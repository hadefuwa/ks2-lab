/**
 * Text-to-Speech Utility Module
 * Backward-compatible wrapper around the GoogleTTSService.
 */
import ttsService from '../services/GoogleTTSService';

const hasWindow = typeof window !== 'undefined';
const storage = hasWindow ? window.localStorage : null;
let paused = false;

const getStoredBool = (key, fallback) => {
  if (!storage) return fallback;
  const value = storage.getItem(key);
  if (value === null) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const getStoredNumber = (key, fallback) => {
  if (!storage) return fallback;
  const value = storage.getItem(key);
  if (value === null) return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const setStoredValue = (key, value) => {
  if (!storage) return;
  storage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
};

const isElectron = () => hasWindow && !!window.electronAPI?.ttsSpeak;
const isWebSpeechSupported = () => hasWindow && 'speechSynthesis' in window;
const isSupported = () => isElectron() || isWebSpeechSupported();

const speak = (text, options = {}) => {
  return ttsService.speak(text, options);
};

const stop = () => {
  paused = false;
  return ttsService.stop();
};

const pause = () => {
  if (isWebSpeechSupported()) {
    window.speechSynthesis.pause();
    paused = true;
  }
};

const resume = () => {
  if (isWebSpeechSupported()) {
    window.speechSynthesis.resume();
    paused = false;
  }
};

const isPaused = () => {
  if (isWebSpeechSupported()) {
    return window.speechSynthesis.paused;
  }
  return paused;
};

const isSpeaking = () => {
  if (ttsService.getState) {
    return ttsService.getState().speaking;
  }
  if (isWebSpeechSupported()) {
    return window.speechSynthesis.speaking;
  }
  return false;
};

const getVoices = () => {
  if (isWebSpeechSupported()) {
    return window.speechSynthesis.getVoices();
  }
  return [];
};

const getPreferences = () => {
  const state = ttsService.getState ? ttsService.getState() : {};
  return {
    enabled: getStoredBool('tts_enabled', state.enabled ?? true),
    autoRead: getStoredBool('tts_auto_read', state.autoRead ?? true),
    readAnswers: getStoredBool('tts_read_answers', true),
    rate: getStoredNumber('tts_rate', state.rate ?? 1.0),
    pitch: getStoredNumber('tts_pitch', 1.0),
    volume: getStoredNumber('tts_volume', 1.0),
    voice: storage?.getItem('tts_voice') || null,
    preferredVoice: storage?.getItem('tts_preferred_voice') || null
  };
};

const savePreferences = (prefs = {}) => {
  if (prefs.enabled !== undefined) {
    setStoredValue('tts_enabled', prefs.enabled);
    ttsService.setEnabled(prefs.enabled);
  }
  if (prefs.autoRead !== undefined) {
    setStoredValue('tts_auto_read', prefs.autoRead);
    ttsService.setAutoRead(prefs.autoRead);
  }
  if (prefs.readAnswers !== undefined) {
    setStoredValue('tts_read_answers', prefs.readAnswers);
  }
  if (prefs.rate !== undefined) {
    setStoredValue('tts_rate', prefs.rate);
    ttsService.setRate(prefs.rate);
  }
  if (prefs.pitch !== undefined) setStoredValue('tts_pitch', prefs.pitch);
  if (prefs.volume !== undefined) setStoredValue('tts_volume', prefs.volume);
  if (prefs.voice !== undefined && prefs.voice !== null) {
    setStoredValue('tts_voice', prefs.voice);
  }
  if (prefs.preferredVoice !== undefined && prefs.preferredVoice !== null) {
    setStoredValue('tts_preferred_voice', prefs.preferredVoice);
  }
};

const setEnabled = (enabled) => savePreferences({ enabled });
const setAutoRead = (autoRead) => savePreferences({ autoRead });
const setReadAnswers = (readAnswers) => savePreferences({ readAnswers });

const textToSpeech = {
  isElectron,
  isWebSpeechSupported,
  isSupported,
  speak,
  stop,
  pause,
  resume,
  isPaused,
  isSpeaking,
  getVoices,
  getPreferences,
  savePreferences,
  setEnabled,
  setAutoRead,
  setReadAnswers,
  autoRead: getPreferences().autoRead
};

export default textToSpeech;
export {
  speak,
  stop,
  pause,
  resume,
  isPaused,
  isSpeaking,
  isSupported,
  getVoices,
  getPreferences,
  savePreferences,
  setEnabled,
  setAutoRead,
  setReadAnswers
};
