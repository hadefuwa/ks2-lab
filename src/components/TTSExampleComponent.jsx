import React from 'react';
import { useTTS } from '../contexts/TTSContext';

/**
 * Example Component - Shows how to use the new TTS system
 * This is a simple demonstration you can use as a reference
 */
const TTSExampleComponent = () => {
  const { speak, stop, isSpeaking, isEnabled } = useTTS();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>TTS Example Component</h2>
      
      {!isEnabled && (
        <div style={{ 
          background: '#fff3cd', 
          padding: '15px', 
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #ffc107'
        }}>
          ⚠️ TTS is currently disabled. Enable it using the floating widget in the corner!
        </div>
      )}

      <div style={{ marginBottom: '30px' }}>
        <h3>Simple Text Reading</h3>
        <p>Click the button to hear this text read aloud:</p>
        <button 
          onClick={() => speak("Hello! This is the new site-wide text to speech system. It's super easy to use!")}
          disabled={!isEnabled}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: isEnabled ? 'pointer' : 'not-allowed',
            marginRight: '10px'
          }}
        >
          🔊 Read Example Text
        </button>
        {isSpeaking && (
          <button 
            onClick={stop}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            ⏹️ Stop
          </button>
        )}
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Read with Custom Speed</h3>
        <button 
          onClick={() => speak("This is slow speech, perfect for learning.", { rate: 0.7 })}
          disabled={!isEnabled}
          style={{ padding: '10px 20px', marginRight: '10px' }}
        >
          🐢 Slow
        </button>
        <button 
          onClick={() => speak("This is normal speed speech.", { rate: 1.0 })}
          disabled={!isEnabled}
          style={{ padding: '10px 20px', marginRight: '10px' }}
        >
          ▶️ Normal
        </button>
        <button 
          onClick={() => speak("This is fast speech for quick reviews!", { rate: 1.5 })}
          disabled={!isEnabled}
          style={{ padding: '10px 20px' }}
        >
          🚀 Fast
        </button>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Try Selecting Text</h3>
        <p style={{ 
          padding: '15px', 
          background: '#f8f9fa', 
          borderRadius: '8px',
          userSelect: 'text',
          cursor: 'text'
        }}>
          Highlight this text with your mouse, then press <strong>Ctrl+Shift+R</strong> to hear it read aloud. 
          This works anywhere in the app! You can select any text on any page and have it read to you instantly.
          It's perfect for students who need help with reading or anyone who prefers audio learning.
        </p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Keyboard Shortcuts</h3>
        <ul>
          <li><code>Ctrl+Shift+R</code> - Read selected text</li>
          <li><code>Ctrl+Shift+S</code> - Toggle TTS on/off</li>
          <li><code>Esc</code> - Stop reading</li>
        </ul>
      </div>

      <div style={{ 
        background: '#d1ecf1', 
        padding: '15px', 
        borderRadius: '8px',
        border: '1px solid #bee5eb'
      }}>
        <h4 style={{ marginTop: 0 }}>💡 Pro Tip</h4>
        <p style={{ marginBottom: 0 }}>
          The floating TTS widget in the corner can be dragged anywhere on your screen. 
          Click it to expand and access all controls including speed, volume, and voice selection!
        </p>
      </div>

      {isSpeaking && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#28a745',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          animation: 'pulse 2s infinite'
        }}>
          🔊 Currently Speaking...
        </div>
      )}
    </div>
  );
};

export default TTSExampleComponent;
