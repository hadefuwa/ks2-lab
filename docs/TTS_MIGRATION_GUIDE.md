# Migration Guide: Old TTS → New TTS

## Quick Migration Steps

### Step 1: Change Import
```jsx
// OLD ❌
import { speak, stop } from '../utils/textToSpeech';

// NEW ✅
import { useTTS } from '../contexts/TTSContext';
```

### Step 2: Add Hook in Component
```jsx
// OLD ❌
function MyComponent() {
  // speak and stop were global imports
  
  const handleClick = () => {
    speak("Hello");
  };
}

// NEW ✅
function MyComponent() {
  const { speak, stop } = useTTS();
  
  const handleClick = () => {
    speak("Hello");
  };
}
```

## Real Examples from Your Codebase

### Example 1: WorldWar2Game.jsx

**BEFORE:**
```jsx
import { speak, stop } from '../utils/textToSpeech';

function WorldWar2Game() {
  const startLevel = (level) => {
    speak(level.title + ". " + level.description, { rate: 0.9 });
  };
  
  return <div>...</div>;
}
```

**AFTER:**
```jsx
import { useTTS } from '../contexts/TTSContext';

function WorldWar2Game() {
  const { speak, stop } = useTTS();
  
  const startLevel = (level) => {
    speak(level.title + ". " + level.description, { rate: 0.9 });
  };
  
  return <div>...</div>;
}
```

### Example 2: VowelSoundGame.jsx

**BEFORE:**
```jsx
import { speak, stop } from '../utils/textToSpeech';

function VowelSoundGame() {
  useEffect(() => {
    const introText = "Find the vowel sound!";
    speak(introText, { rate: 0.9 });
  }, []);
  
  return <div>...</div>;
}
```

**AFTER:**
```jsx
import { useTTS } from '../contexts/TTSContext';

function VowelSoundGame() {
  const { speak, stop } = useTTS();
  
  useEffect(() => {
    const introText = "Find the vowel sound!";
    speak(introText, { rate: 0.9 });
  }, [speak]); // Add speak to dependencies if using in useEffect
  
  return <div>...</div>;
}
```

### Example 3: QuizScreen with Auto-Read

**BEFORE:**
```jsx
import { speak, stop, getPreferences } from '../utils/textToSpeech';

function QuizScreen() {
  const prefs = getPreferences();
  
  useEffect(() => {
    if (prefs.autoRead) {
      speak(question.text);
    }
  }, [question]);
}
```

**AFTER:**
```jsx
import { useTTS } from '../contexts/TTSContext';

function QuizScreen() {
  const { speak, isEnabled } = useTTS();
  
  useEffect(() => {
    if (isEnabled) {
      speak(question.text);
    }
  }, [question, isEnabled, speak]);
}
```

## Complete Component Migration Example

Here's a full component migration:

### BEFORE (Old System):
```jsx
import React, { useState, useEffect } from 'react';
import { speak, stop, isSpeaking, getPreferences } from '../utils/textToSpeech';

function LessonComponent({ lesson }) {
  const [speaking, setSpeaking] = useState(false);
  const prefs = getPreferences();
  
  useEffect(() => {
    if (prefs.autoRead) {
      speak(lesson.content);
      setSpeaking(true);
    }
  }, [lesson]);
  
  const handleRead = () => {
    speak(lesson.content);
    setSpeaking(true);
  };
  
  const handleStop = () => {
    stop();
    setSpeaking(false);
  };
  
  return (
    <div>
      <h2>{lesson.title}</h2>
      <p>{lesson.content}</p>
      {!speaking ? (
        <button onClick={handleRead}>🔊 Read Lesson</button>
      ) : (
        <button onClick={handleStop}>⏹️ Stop</button>
      )}
    </div>
  );
}
```

### AFTER (New System):
```jsx
import React, { useEffect } from 'react';
import { useTTS } from '../contexts/TTSContext';

function LessonComponent({ lesson }) {
  const { speak, stop, isSpeaking, isEnabled } = useTTS();
  
  useEffect(() => {
    if (isEnabled) {
      speak(lesson.content);
    }
  }, [lesson, isEnabled, speak]);
  
  return (
    <div>
      <h2>{lesson.title}</h2>
      <p>{lesson.content}</p>
      {!isSpeaking ? (
        <button onClick={() => speak(lesson.content)}>
          🔊 Read Lesson
        </button>
      ) : (
        <button onClick={stop}>⏹️ Stop</button>
      )}
    </div>
  );
}
```

**What's Better:**
- ✅ Less code (no state management needed)
- ✅ `isSpeaking` is always accurate (global state)
- ✅ No need to track speaking state manually
- ✅ `isEnabled` replaces `prefs.autoRead`
- ✅ Users control TTS from widget, not per-component

## API Method Mapping

| Old Method | New Method | Notes |
|-----------|-----------|-------|
| `speak(text, options)` | `speak(text, options)` | ✅ Same API |
| `stop()` | `stop()` | ✅ Same API |
| `pause()` | `pause()` | ✅ Same API |
| `resume()` | `resume()` | ✅ Same API |
| `isSpeaking()` | `isSpeaking` (state) | Now a state value, not function |
| `getPreferences()` | Use hook states | `isEnabled`, `rate`, `volume`, etc. |
| `setVoice(name)` | `updateVoice(name)` | Renamed for clarity |
| `setRate(rate)` | `updateRate(rate)` | Renamed for clarity |
| N/A | `readSelection()` | ✨ New feature! |
| N/A | `toggleEnabled()` | ✨ New feature! |

## Common Patterns

### Pattern 1: Read on Component Mount
```jsx
function MyComponent({ content }) {
  const { speak, isEnabled } = useTTS();
  
  useEffect(() => {
    if (isEnabled) {
      speak(content);
    }
  }, [content, isEnabled, speak]);
  
  return <div>{content}</div>;
}
```

### Pattern 2: Button to Read Text
```jsx
function MyComponent({ text }) {
  const { speak } = useTTS();
  
  return (
    <button onClick={() => speak(text)}>
      🔊 Read
    </button>
  );
}
```

### Pattern 3: Conditional Reading
```jsx
function QuizQuestion({ question, showAnswer }) {
  const { speak, isEnabled } = useTTS();
  
  useEffect(() => {
    if (isEnabled && showAnswer) {
      speak(question.answer);
    }
  }, [showAnswer, isEnabled, speak, question.answer]);
  
  return <div>...</div>;
}
```

### Pattern 4: Read with Custom Settings
```jsx
function SlowReader({ text }) {
  const { speak } = useTTS();
  
  return (
    <button onClick={() => speak(text, { rate: 0.7, pitch: 1.1 })}>
      🐢 Read Slowly
    </button>
  );
}
```

## Files to Update

Based on grep results, these files currently use the old TTS:
1. `WorldWar2Game.jsx`
2. `VowelSoundGame.jsx`
3. `SynonymsAntonymsGame.jsx`
4. `SightWordGame.jsx`
5. (Any other quiz or game components)

**To migrate:** Just change the import and add the `useTTS()` hook!

## Benefits of Migration

1. **Simpler Code** - No state management needed
2. **Global Controls** - Users control TTS site-wide
3. **Better UX** - Floating widget with all options
4. **Keyboard Shortcuts** - Built-in accessibility
5. **Read Selection** - Highlight any text and read it
6. **Consistent** - All components use same TTS system
7. **Less Bugs** - Single source of truth for TTS state

## Testing After Migration

1. ✅ Click the TTS widget to ensure it appears
2. ✅ Drag the widget to move it
3. ✅ Click "Read" buttons in migrated components
4. ✅ Highlight text and press Ctrl+Shift+R
5. ✅ Adjust speed/volume in widget
6. ✅ Disable TTS and verify components respect it
7. ✅ Refresh page and verify settings persist

## Optional: Remove Old TTS File

After migrating all components, you can optionally delete or archive:
- `src/utils/textToSpeech.js` (old implementation)

The new system is completely self-contained in:
- `src/contexts/TTSContext.jsx` (context provider)
- `src/components/TTSWidget.jsx` (UI widget)
- `src/components/TTSWidget.css` (styles)

## Need Help?

Check `docs/NEW_TTS_GUIDE.md` for full documentation and examples!
