# New Site-Wide TTS Implementation Guide

## Overview
The new TTS system provides a **simple, site-wide text-to-speech solution** that works everywhere in your app. No more per-component configuration!

## Key Features

✅ **Site-Wide Accessibility** - Works on every page, every component  
✅ **Floating Control Widget** - Always visible, draggable interface  
✅ **Keyboard Shortcuts** - Quick access without mouse  
✅ **Read Any Selected Text** - Highlight and read instantly  
✅ **Simple API** - Just one hook to use TTS anywhere  
✅ **Persistent Settings** - Remembers speed, volume, voice, position  

## How It Works

### 1. Global Widget
A floating TTS widget appears in the corner of your app. Users can:
- **Click to expand/collapse** controls
- **Drag** to reposition anywhere on screen
- **Enable/disable** TTS globally
- **Adjust speed, volume, voice**
- **Read selected text** with one click

### 2. Keyboard Shortcuts
- `Ctrl+Shift+R` - Read selected text
- `Ctrl+Shift+S` - Toggle TTS on/off
- `Esc` - Stop reading

### 3. Simple Component Usage

#### Basic Usage - Just Read Text
```jsx
import { useTTS } from '../contexts/TTSContext';

function MyComponent() {
  const { speak, stop } = useTTS();
  
  return (
    <div>
      <button onClick={() => speak("Hello, this is text to speech!")}>
        Read This
      </button>
      <button onClick={stop}>
        Stop
      </button>
    </div>
  );
}
```

#### Read on Events
```jsx
import { useTTS } from '../contexts/TTSContext';

function QuizQuestion({ question }) {
  const { speak } = useTTS();
  
  // Read question when component loads
  useEffect(() => {
    speak(question.text);
  }, [question]);
  
  return <div>{question.text}</div>;
}
```

#### Check TTS State
```jsx
import { useTTS } from '../contexts/TTSContext';

function MyComponent() {
  const { isSpeaking, isEnabled, currentText } = useTTS();
  
  return (
    <div>
      {isSpeaking && <div>🔊 Now reading: {currentText}</div>}
      {!isEnabled && <div>TTS is disabled</div>}
    </div>
  );
}
```

#### Custom Speed/Options
```jsx
import { useTTS } from '../contexts/TTSContext';

function MyComponent() {
  const { speak } = useTTS();
  
  const readSlowly = () => {
    speak("This will be read slowly", { rate: 0.7 });
  };
  
  const readQuickly = () => {
    speak("This will be read quickly", { rate: 1.5 });
  };
  
  return (
    <div>
      <button onClick={readSlowly}>Read Slowly</button>
      <button onClick={readQuickly}>Read Quickly</button>
    </div>
  );
}
```

## Available Methods from useTTS()

### State
- `isEnabled` - Boolean: Is TTS enabled?
- `isSpeaking` - Boolean: Is something currently being read?
- `isPaused` - Boolean: Is reading paused?
- `currentText` - String: Text currently being read
- `rate` - Number: Current speech rate (0.5-2.0)
- `volume` - Number: Current volume (0-1)
- `voice` - Object: Current voice
- `voices` - Array: All available voices

### Actions
- `speak(text, options)` - Read text aloud
  - `text` - String to read
  - `options` - Optional: `{ rate, volume, pitch }`
- `stop()` - Stop reading immediately
- `pause()` - Pause reading
- `resume()` - Resume paused reading
- `readSelection()` - Read currently selected text
- `toggleEnabled()` - Enable/disable TTS
- `updateRate(rate)` - Change speech speed (0.5-2.0)
- `updateVolume(volume)` - Change volume (0-1)
- `updateVoice(voiceName)` - Change voice

## Migration from Old TTS

### Old Way ❌
```jsx
import { speak, stop } from '../utils/textToSpeech';

// Had to manage state manually
// No global controls
// Settings per component
```

### New Way ✅
```jsx
import { useTTS } from '../contexts/TTSContext';

function MyComponent() {
  const { speak, stop } = useTTS();
  // That's it! Everything else is automatic
}
```

## Examples

### Auto-Read Lesson Content
```jsx
function LessonView({ lesson }) {
  const { speak, isEnabled } = useTTS();
  
  useEffect(() => {
    if (isEnabled) {
      speak(lesson.title + ". " + lesson.content);
    }
  }, [lesson, isEnabled]);
  
  return <div>{lesson.content}</div>;
}
```

### Read Quiz Questions
```jsx
function QuizQuestion({ question, answers }) {
  const { speak } = useTTS();
  
  const readQuestion = () => {
    const text = `${question.text}. ${answers.join(', ')}`;
    speak(text, { rate: 0.9 }); // Slightly slower for comprehension
  };
  
  return (
    <div>
      <h3>{question.text}</h3>
      <button onClick={readQuestion}>🔊 Read Question</button>
      {answers.map(answer => <div key={answer}>{answer}</div>)}
    </div>
  );
}
```

### Interactive Story Reader
```jsx
function StoryReader({ story }) {
  const { speak, stop, isSpeaking } = useTTS();
  
  return (
    <div>
      <p>{story}</p>
      {!isSpeaking ? (
        <button onClick={() => speak(story)}>
          ▶️ Start Reading
        </button>
      ) : (
        <button onClick={stop}>
          ⏹️ Stop Reading
        </button>
      )}
    </div>
  );
}
```

## User Features

### For Students
1. **Highlight any text** on the page and press `Ctrl+Shift+R` to hear it
2. **Click the floating widget** to see controls
3. **Adjust speed** - slower for learning, faster for review
4. **Choose a voice** they like best
5. **Disable** when not needed

### For Parents/Teachers
- Students can learn independently
- Helps with reading difficulties
- Supports multiple learning styles
- Works offline (uses browser voices)

## Technical Details

### Browser Support
- ✅ Chrome/Edge (best quality voices)
- ✅ Firefox (good support)
- ✅ Safari (good support)
- ⚠️ Uses Web Speech API (built-in, no dependencies)

### Performance
- Lightweight (~5KB)
- No external services or API calls
- Works 100% offline
- No cost or usage limits

### Accessibility
- WCAG 2.1 compliant
- Keyboard accessible
- Screen reader friendly
- High contrast widget

## Comparison: Old vs New

| Feature | Old System | New System |
|---------|-----------|------------|
| Setup per component | ✅ Required | ❌ Not needed |
| Global controls | ❌ None | ✅ Floating widget |
| Keyboard shortcuts | ❌ None | ✅ Built-in |
| Read selection | ❌ Manual | ✅ Automatic |
| Settings persistence | ⚠️ Limited | ✅ Full |
| User interface | ❌ None | ✅ Beautiful widget |
| Draggable controls | ❌ No | ✅ Yes |
| Code complexity | 🔴 High (500+ lines) | 🟢 Low (just use hook) |

## What's Different

### Before
- TTS was tied to specific components (quizzes, games)
- Had to import and configure in each file
- No global controls
- Settings were scattered
- Complex implementation with Edge TTS fallbacks

### Now
- TTS is site-wide and always available
- One-line import in any component
- Beautiful floating widget for user control
- All settings in one place
- Simple, clean Web Speech API only

## That's It!

The new TTS system is ready to use. Just:
1. Import `useTTS` hook
2. Call `speak(text)` when you want something read
3. Everything else is handled by the global widget!

No configuration, no complexity - just simple, site-wide text-to-speech! 🎉
