# 🎯 New Embedded TTS System - Quick Guide

## What Changed

The TTS system is now **embedded as a bar under the navigation** instead of a floating widget. It's much simpler and cleaner!

## Features

✅ **Auto-Read** - Content reads automatically once when enabled  
✅ **Replay Button** - Click to hear it again  
✅ **Embedded Bar** - Clean, fixed position under navigation  
✅ **Simple Controls** - Toggle, settings, and replay  

## How It Looks

```
┌─────────────────────────────────────────────┐
│          Navigation Bar                      │
├─────────────────────────────────────────────┤
│ 🔉 Auto-read enabled    🔁 Replay  [Auto-read ✓] ⚙️ │
├─────────────────────────────────────────────┤
│                                              │
│          Your Content Here                   │
│                                              │
```

## Usage in Components

### Option 1: Auto-Read (Recommended)
Perfect for lessons and quiz questions. Reads text once automatically:

```jsx
import { useAutoRead } from '../hooks/useAutoRead';

function QuizQuestion({ question }) {
  // Auto-reads when question changes
  useAutoRead(question.text);
  
  return <div>{question.text}</div>;
}
```

### Option 2: Manual Control
For custom behavior:

```jsx
import { useTTS } from '../contexts/TTSContext';

function MyComponent({ text }) {
  const { speak, replay, isSpeaking } = useTTS();
  
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => speak(text)}>
        🔊 Read
      </button>
      {isSpeaking && <span>Reading...</span>}
    </div>
  );
}
```

## TTS Bar Controls

### For Users:
- **Auto-read checkbox** - Enable/disable automatic reading
- **🔁 Replay** - Hear the last content again
- **⏹️ Stop** - Stop current reading
- **⚙️ Settings** - Adjust speed, volume, voice

### Settings Panel (click ⚙️):
- **Speed** - 0.5x to 2.0x
- **Volume** - 0% to 100%
- **Voice** - Choose from available voices

## Examples

### Quiz Question
```jsx
import { useAutoRead } from '../hooks/useAutoRead';

function QuizQuestion({ question, answers }) {
  // Read question automatically
  useAutoRead(question.text);
  
  return (
    <div>
      <h3>{question.text}</h3>
      {answers.map(answer => (
        <button key={answer}>{answer}</button>
      ))}
    </div>
  );
}
```

### Lesson Content
```jsx
import { useAutoRead } from '../hooks/useAutoRead';

function LessonView({ lesson }) {
  // Read title and content together
  const fullText = `${lesson.title}. ${lesson.content}`;
  useAutoRead(fullText);
  
  return (
    <div>
      <h2>{lesson.title}</h2>
      <p>{lesson.content}</p>
    </div>
  );
}
```

### Custom Speed
```jsx
import { useAutoRead } from '../hooks/useAutoRead';

function StoryReader({ story }) {
  // Read slowly for young learners
  useAutoRead(story, { rate: 0.8 });
  
  return <div className="story">{story}</div>;
}
```

### Always Re-read (No Deduplication)
```jsx
import { useAutoReadAlways } from '../hooks/useAutoRead';

function Flashcard({ word }) {
  // Read word every time, even if it's the same
  useAutoReadAlways(word);
  
  return <div className="flashcard">{word}</div>;
}
```

## Two Auto-Read Hooks

### `useAutoRead(text, options)`
Reads text **once per session**. If the same text appears again, it won't re-read.
- ✅ Good for: Lessons, quiz questions, instructions
- ⚠️ Won't re-read if text hasn't changed

### `useAutoReadAlways(text, options)`
Reads text **every time** it changes, even if it's the same text.
- ✅ Good for: Flashcards, repeated words, drill exercises
- ⚠️ Will re-read every time

## Manual Control Methods

From `useTTS()` hook:

```jsx
const {
  // State
  isEnabled,      // Is auto-read enabled?
  isSpeaking,     // Currently reading?
  lastReadText,   // Last text that was read
  
  // Actions
  speak,          // speak(text, options)
  stop,           // Stop reading
  replay,         // Replay last text
} = useTTS();
```

## User Experience Flow

1. **User loads lesson/quiz**
2. **TTS bar auto-reads** content (if enabled)
3. **User sees "Replay" button** after reading finishes
4. **User clicks Replay** to hear it again
5. **User can adjust settings** anytime via ⚙️

## Keyboard Shortcuts

- `Esc` - Stop reading

(Removed highlight-to-read since focus is on auto-read)

## Migrating Existing Components

### Before:
```jsx
import { speak } from '../utils/textToSpeech';

function MyComponent({ question }) {
  useEffect(() => {
    speak(question.text);
  }, [question]);
}
```

### After:
```jsx
import { useAutoRead } from '../hooks/useAutoRead';

function MyComponent({ question }) {
  useAutoRead(question.text);
}
```

Much simpler! 🎉

## Benefits

✅ **Cleaner UI** - No floating widget to move around  
✅ **Simpler** - One-line auto-read in components  
✅ **Automatic** - Reads content without user action  
✅ **Replay Button** - Easy to hear content again  
✅ **Less Distracting** - Fixed position, out of the way  

## That's It!

The TTS bar is already embedded and working. Just use `useAutoRead()` in any component that should speak its content automatically!
