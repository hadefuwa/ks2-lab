import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

const TTSContext = createContext(null);

/**
 * Global TTS Provider - Site-wide text-to-speech functionality
 * Provides a clean, simple interface for reading any text anywhere in the app
 */
export const TTSProvider = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(() => {
    const saved = localStorage.getItem('tts_enabled');
    return saved !== null ? JSON.parse(saved) : true;
  });
  
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [lastReadText, setLastReadText] = useState(''); // Track last read text for replay
  const [rate, setRate] = useState(() => {
    const saved = localStorage.getItem('tts_rate');
    return saved ? parseFloat(saved) : 1.0;
  });
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem('tts_volume');
    return saved ? parseFloat(saved) : 1.0;
  });
  const [voice, setVoice] = useState(null);
  const [voices, setVoices] = useState([]);
  
  const utteranceRef = useRef(null);
  const isInitialized = useRef(false);

  // Load available voices
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      
      // Auto-select a good English voice if none selected
      if (!voice && availableVoices.length > 0) {
        const englishVoice = availableVoices.find(v => 
          v.lang.startsWith('en') && v.name.includes('Google')
        ) || availableVoices.find(v => v.lang.startsWith('en')) || availableVoices[0];
        
        setVoice(englishVoice);
        localStorage.setItem('tts_voice', englishVoice.name);
      }
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, [voice]);

  // Load saved voice preference
  useEffect(() => {
    const savedVoiceName = localStorage.getItem('tts_voice');
    if (savedVoiceName && voices.length > 0) {
      const savedVoice = voices.find(v => v.name === savedVoiceName);
      if (savedVoice) setVoice(savedVoice);
    }
  }, [voices]);

  // Monitor speech synthesis state
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const checkStatus = () => {
      setIsSpeaking(window.speechSynthesis.speaking);
      setIsPaused(window.speechSynthesis.paused);
    };

    const interval = setInterval(checkStatus, 100);
    return () => clearInterval(interval);
  }, []);

  // Speak function
  const speak = useCallback((text, options = {}) => {
    if (!isEnabled) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    if (!text || text.trim() === '') return;

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Apply settings
    utterance.rate = options.rate !== undefined ? options.rate : rate;
    utterance.volume = options.volume !== undefined ? options.volume : volume;
    utterance.pitch = options.pitch !== undefined ? options.pitch : 1.0;
    
    if (voice) {
      utterance.voice = voice;
    }

    // Event handlers
    utterance.onstart = () => {
      setIsSpeaking(true);
      setCurrentText(text);
      setLastReadText(text); // Store for replay
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentText('');
      utteranceRef.current = null;
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event.error);
      setIsSpeaking(false);
      setCurrentText('');
      utteranceRef.current = null;
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [isEnabled, rate, volume, voice]);

  // Stop function
  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setCurrentText('');
      utteranceRef.current = null;
    }
  }, []);

  // Pause function
  const pause = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, []);

  // Resume function
  const resume = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, []);

  // Replay last read text
  const replay = useCallback(() => {
    if (lastReadText) {
      speak(lastReadText);
    }
  }, [lastReadText, speak]);

  // Re
  // Read selected text
  const readSelection = useCallback(() => {
    const selection = window.getSelection();
    const text = selection?.toString().trim();
    if (text) {
      speak(text);
    }
  }, [speak]);

  // Toggle enabled state
  const toggleEnabled = useCallback(() => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem('tts_enabled', JSON.stringify(newState));
    if (!newState) {
      stop();
    }
  }, [isEnabled, stop]);

  // Update rate
  const updateRate = useCallback((newRate) => {
    const clampedRate = Math.max(0.5, Math.min(2.0, newRate));
    setRate(clampedRate);
    localStorage.setItem('tts_rate', clampedRate.toString());
  }, []);

  // Update volume
  const updateVolume = useCallback((newVolume) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(clampedVolume);
    localStorage.setItem('tts_volume', clampedVolume.toString());
  }, []);

  // Update voice
  const updateVoice = useCallback((voiceName) => {
    const selectedVoice = voices.find(v => v.name === voiceName);
    if (selectedVoice) {
      setVoice(selectedVoice);
      localStorage.setItem('tts_voice', voiceName);
    }
  }, [voices]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + Shift + S: Toggle TTS
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        toggleEnabled();
      }
      // Ctrl/Cmd + Shift + R: Read selection
      else if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'R') {
        e.preventDefault();
        readSelection();
      }
      // Escape: Stop reading
      else if (e.key === 'Escape' && isSpeaking) {
        e.preventDefault();
        stop();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleEnabled, readSelection, stop, isSpeaking]);

  const value = {
    // State
    isEnabled,
    isSpeaking,
    isPaused,
    currentText,
    lastReadText,
    rate,
    volume,
    voice,
    voices,
    
    // Actions
    speak,
    stop,
    pause,
    resume,
    replay,
    readSelection,
    toggleEnabled,
    updateRate,
    updateVolume,
    updateVoice,
  };

  return <TTSContext.Provider value={value}>{children}</TTSContext.Provider>;
};

/**
 * Hook to access TTS functionality from any component
 */
export const useTTS = () => {
  const context = useContext(TTSContext);
  if (!context) {
    throw new Error('useTTS must be used within a TTSProvider');
  }
  return context;
};

export default TTSContext;
