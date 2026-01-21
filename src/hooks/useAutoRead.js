import { useEffect, useRef } from 'react';
import { useTTS } from '../contexts/TTSContext';

/**
 * Hook to auto-read text once when it changes
 * Perfect for lessons and quiz questions
 * 
 * @param {string} text - Text to read
 * @param {object} options - Optional: { rate, volume, enabled }
 * 
 * @example
 * function QuizQuestion({ question }) {
 *   useAutoRead(question.text);
 *   return <div>{question.text}</div>;
 * }
 */
export const useAutoRead = (text, options = {}) => {
  const { speak } = useTTS();
  const hasReadRef = useRef(new Set());
  
  useEffect(() => {
    // Auto-read if:
    // 1. We have text
    // 2. We haven't read this exact text in this session
    // 3. Not explicitly disabled via options
    const shouldRead = options.enabled !== false;
    
    if (shouldRead && text && !hasReadRef.current.has(text)) {
      hasReadRef.current.add(text);
      
      // Small delay to let page settle
      const timer = setTimeout(() => {
        speak(text, options);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [text, speak, options]);
};

/**
 * Hook to auto-read text EVERY time it changes (no deduplication)
 * Use this when you want text read even if it's the same as before
 * 
 * @example
 * function Lesson({ content }) {
 *   useAutoReadAlways(content);
 *   return <div>{content}</div>;
 * }
 */
export const useAutoReadAlways = (text, options = {}) => {
  const { speak } = useTTS();
  
  useEffect(() => {
    const shouldRead = options.enabled !== false;
    
    if (shouldRead && text) {
      const timer = setTimeout(() => {
        speak(text, options);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [text, speak, options]);
};

export default useAutoRead;
