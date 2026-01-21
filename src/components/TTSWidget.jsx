import React, { useState } from 'react';
import { useTTS } from '../contexts/TTSContext';
import './TTSWidget.css';

/**
 * Embedded TTS Bar - Simple controls under navigation
 * Auto-reads content once, provides replay button
 */
const TTSWidget = () => {
  const {
    isEnabled,
    isSpeaking,
    currentText,
    lastReadText,
    rate,
    volume,
    voice,
    voices,
    stop,
    replay,
    toggleEnabled,
    updateRate,
    updateVolume,
    updateVoice,
  } = useTTS();

  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="tts-bar">
      <div className="tts-bar-content">
        {/* Left side - Status and controls */}
        <div className="tts-bar-left">
          <div className="tts-status-indicator">
            {isSpeaking ? '🔊' : isEnabled ? '🔉' : '🔇'}
            <span className="tts-status-text">
              {isSpeaking ? 'Reading...' : isEnabled ? 'Auto-read enabled' : 'TTS disabled'}
            </span>
          </div>

          {/* Play button - shows when not speaking */}
          {!isSpeaking && lastReadText && (
            <button 
              className="tts-play-btn"
              onClick={replay}
              title="Play/Replay"
            >
              ▶️ Play
            </button>
          )}

          {/* Stop button - shows when speaking */}
          {isSpeaking && (
            <button 
              className="tts-stop-btn"
              onClick={stop}
              title="Stop reading"
            >
              ⏹️ Stop
            </button>
          )}
        </div>

        {/* Right side - Settings */}
        <div className="tts-bar-right">
          <label className="tts-toggle">
            <input
              type="checkbox"
              checked={isEnabled}
              onChange={toggleEnabled}
            />
            <span>Auto-read</span>
          </label>

          <button 
            className={`tts-settings-btn ${showSettings ? 'active' : ''}`}
            onClick={() => setShowSettings(!showSettings)}
            title="TTS Settings"
          >
            ⚙️
          </button>
        </div>
      </div>

      {/* Settings panel - expandable */}
      {showSettings && (
        <div className="tts-settings-panel">
          <div className="tts-setting">
            <label>
              Speed: {rate.toFixed(1)}x
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={rate}
                onChange={(e) => updateRate(parseFloat(e.target.value))}
              />
            </label>
          </div>

          <div className="tts-setting">
            <label>
              Volume: {Math.round(volume * 100)}%
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => updateVolume(parseFloat(e.target.value))}
              />
            </label>
          </div>

          <div className="tts-setting">
            <label>
              Voice:
              <select
                value={voice?.name || ''}
                onChange={(e) => updateVoice(e.target.value)}
              >
                {voices.map((v) => (
                  <option key={v.name} value={v.name}>
                    {v.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default TTSWidget;
