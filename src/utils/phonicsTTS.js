/**
 * Phonics Text-to-Speech Utility
 * Generates pure phoneme sounds for phonics lessons
 * Uses Web Speech API with phonetic pronunciation
 */

// Phoneme mappings for pure sounds
const PHONEME_MAP = {
  // Vowels
  'a': 'æ', // as in "cat"
  'e': 'ɛ', // as in "bed"
  'i': 'ɪ', // as in "sit"
  'o': 'ɒ', // as in "hot"
  'u': 'ʌ', // as in "cup"
  
  // Consonants
  'm': 'm',
  's': 's',
  't': 't',
  'b': 'b',
  'c': 'k',
  'd': 'd',
  'f': 'f',
  'g': 'g',
  'h': 'h',
  'j': 'dʒ',
  'k': 'k',
  'l': 'l',
  'n': 'n',
  'p': 'p',
  'q': 'kw',
  'r': 'r',
  'v': 'v',
  'w': 'w',
  'x': 'ks',
  'y': 'j',
  'z': 'z',
};

// Blends and words with phonetic pronunciation
const BLEND_PRONUNCIATIONS = {
  'ma': 'mæ',
  'me': 'mɛ',
  'mo': 'mɒ',
  'at': 'æt',
  'it': 'ɪt',
  'on': 'ɒn',
  'cat': 'kæt',
  'mat': 'mæt',
  'sun': 'sʌn',
  'dog': 'dɒg',
  'hat': 'hæt',
};

/**
 * Speak a pure phoneme sound
 * @param {string} letter - Single letter to speak
 * @param {Object} options - TTS options
 */
export const speakPhoneme = async (letter, options = {}) => {
  if (!letter || letter.length === 0) return;
  
  const lowerLetter = letter.toLowerCase();
  const phoneme = PHONEME_MAP[lowerLetter];
  
  if (!phoneme) {
    // Fallback to letter name
    return speakLetter(letter, options);
  }
  
  // Use SSML-like approach or direct phoneme
  // For Web Speech API, we'll use a word that contains the sound
  const soundWord = getSoundWord(lowerLetter);
  
  return new Promise((resolve, reject) => {
    if (!('speechSynthesis' in window)) {
      reject(new Error('Speech synthesis not supported'));
      return;
    }
    
    const utterance = new SpeechSynthesisUtterance(soundWord);
    utterance.rate = options.rate !== undefined ? options.rate : 0.7; // Slower for clarity
    utterance.pitch = options.pitch !== undefined ? options.pitch : 1.2; // Slightly higher pitch can help with clarity
    utterance.volume = Math.max(0, Math.min(1, options.volume !== undefined ? options.volume : 1.0)); // Max volume (1.0)
    
    console.log('Phonics TTS: Speaking', soundWord, 'with volume:', utterance.volume, 'pitch:', utterance.pitch);
    
    // Try to use a louder, clearer voice
    const voices = window.speechSynthesis.getVoices();
    // Prefer voices that are typically louder (Microsoft voices on Windows)
    const preferredVoice = voices.find(v => 
      v.name.toLowerCase().includes('zira') || // Microsoft Zira is usually louder
      v.name.toLowerCase().includes('david') || // Microsoft David
      v.name.toLowerCase().includes('mark') ||  // Microsoft Mark
      v.name.toLowerCase().includes('hazel')    // Microsoft Hazel
    ) || voices.find(v => 
      v.name.toLowerCase().includes('samantha') ||
      v.name.toLowerCase().includes('alex') ||
      v.name.toLowerCase().includes('victoria')
    ) || voices.find(v => v.lang.startsWith('en'));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    utterance.onend = () => resolve();
    utterance.onerror = (e) => reject(e);
    
    window.speechSynthesis.speak(utterance);
  });
};

/**
 * Speak a letter name
 */
export const speakLetter = async (letter, options = {}) => {
  return new Promise((resolve, reject) => {
    if (!('speechSynthesis' in window)) {
      reject(new Error('Speech synthesis not supported'));
      return;
    }
    
    const utterance = new SpeechSynthesisUtterance(letter.toUpperCase());
    utterance.rate = options.rate || 0.8;
    utterance.pitch = options.pitch || 1.2; // Slightly higher pitch
    utterance.volume = Math.max(0, Math.min(1, options.volume !== undefined ? options.volume : 1.0)); // Ensure volume is between 0 and 1
    
    const voices = window.speechSynthesis.getVoices();
    const childVoice = voices.find(v => 
      v.name.toLowerCase().includes('child') || 
      v.name.toLowerCase().includes('zira')
    ) || voices.find(v => v.lang.startsWith('en'));
    
    if (childVoice) {
      utterance.voice = childVoice;
    }
    
    utterance.onend = () => resolve();
    utterance.onerror = (e) => reject(e);
    
    window.speechSynthesis.speak(utterance);
  });
};

/**
 * Speak a blend or word
 */
export const speakBlend = async (blend, options = {}) => {
  return new Promise((resolve, reject) => {
    if (!('speechSynthesis' in window)) {
      reject(new Error('Speech synthesis not supported'));
      return;
    }
    
    // Use phonetic pronunciation if available
    const pronunciation = BLEND_PRONUNCIATIONS[blend.toLowerCase()] || blend;
    
    const utterance = new SpeechSynthesisUtterance(pronunciation);
    utterance.rate = options.rate || 0.6; // Slower for blending
    utterance.pitch = options.pitch || 1.2; // Slightly higher pitch
    utterance.volume = Math.max(0, Math.min(1, options.volume !== undefined ? options.volume : 1.0)); // Ensure volume is between 0 and 1
    
    const voices = window.speechSynthesis.getVoices();
    const childVoice = voices.find(v => 
      v.name.toLowerCase().includes('child') || 
      v.name.toLowerCase().includes('zira')
    ) || voices.find(v => v.lang.startsWith('en'));
    
    if (childVoice) {
      utterance.voice = childVoice;
    }
    
    utterance.onend = () => resolve();
    utterance.onerror = (e) => reject(e);
    
    window.speechSynthesis.speak(utterance);
  });
};

/**
 * Speak a word slowly, then blended
 */
export const speakWordSlowlyThenBlended = async (word, options = {}) => {
  // First speak each letter sound slowly
  for (let i = 0; i < word.length; i++) {
    await speakPhoneme(word[i], { rate: 0.6, ...options });
    await new Promise(resolve => setTimeout(resolve, 300)); // Pause between sounds
  }
  
  // Then speak the word blended
  await new Promise(resolve => setTimeout(resolve, 500));
  await speakBlend(word, { rate: 0.8, ...options });
};

/**
 * Get a word that contains the target sound for better pronunciation
 */
function getSoundWord(letter) {
  const soundWords = {
    'a': 'apple',
    'e': 'egg',
    'i': 'igloo',
    'o': 'octopus',
    'u': 'umbrella',
    'm': 'mmm', // Just the sound
    's': 'sss', // Just the sound
    't': 'ttt', // Just the sound
    'b': 'ball',
    'c': 'cat',
    'd': 'dog',
    'f': 'fish',
    'g': 'goat',
    'h': 'hat',
    'j': 'jam',
    'k': 'kite',
    'l': 'lion',
    'n': 'nest',
    'p': 'pig',
    'q': 'queen',
    'r': 'rabbit',
    'v': 'van',
    'w': 'web',
    'x': 'box',
    'y': 'yak',
    'z': 'zebra',
  };
  
  return soundWords[letter] || letter;
}

/**
 * Stop current speech
 */
export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

/**
 * Wait for voices to load
 */
export const waitForVoices = () => {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      resolve([]);
      return;
    }
    
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
      return;
    }
    
    window.speechSynthesis.onvoiceschanged = () => {
      resolve(window.speechSynthesis.getVoices());
    };
    
    // Timeout after 2 seconds
    setTimeout(() => {
      resolve(window.speechSynthesis.getVoices());
    }, 2000);
  });
};
