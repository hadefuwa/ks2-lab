# 🏗️ TTS System Architecture

## Visual Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        App.jsx                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              TTSProvider (Context)                    │  │
│  │  Manages global TTS state, voices, settings          │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │           Your App Content                     │  │  │
│  │  │  ┌──────────────┐  ┌──────────────┐           │  │  │
│  │  │  │ Component A  │  │ Component B  │           │  │  │
│  │  │  │  useTTS() ✓  │  │  useTTS() ✓  │           │  │  │
│  │  │  └──────────────┘  └──────────────┘           │  │  │
│  │  │                                                 │  │  │
│  │  │  All components can access TTS via useTTS()   │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  │                                                       │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │         TTSWidget (Floating UI)                │  │  │
│  │  │  🔉 Always visible, draggable controls        │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Component Structure

```
src/
├── App.jsx                         ← Wraps app with TTSProvider
├── contexts/
│   └── TTSContext.jsx              ← Global TTS state & logic
├── components/
│   ├── TTSWidget.jsx               ← Floating control panel UI
│   ├── TTSWidget.css               ← Beautiful styles
│   └── TTSExampleComponent.jsx     ← Usage examples
└── any-component/
    └── AnyComponent.jsx            ← Just import useTTS() hook!
```

## Data Flow

```
User Interaction
      ↓
┌─────────────────┐
│  TTSWidget UI   │  User adjusts settings
│  (Floating)     │  or clicks controls
└────────┬────────┘
         ↓
┌─────────────────┐
│  TTSContext     │  Updates global state
│  (Provider)     │  (rate, volume, voice, etc.)
└────────┬────────┘
         ↓
┌─────────────────┐
│  Web Speech API │  Browser reads text aloud
│  (Browser)      │  using selected voice
└─────────────────┘
```

## State Management

```
TTSContext manages:
├── isEnabled        (boolean)   ← TTS on/off
├── isSpeaking       (boolean)   ← Currently reading?
├── isPaused         (boolean)   ← Paused?
├── currentText      (string)    ← Text being read
├── rate            (number)    ← Speed (0.5-2.0)
├── volume          (number)    ← Volume (0-1)
├── voice           (object)    ← Selected voice
└── voices          (array)     ← All available voices
```

## Method Flow

```
Component calls:  speak("Hello")
                       ↓
                  useTTS() hook
                       ↓
                  TTSContext
                       ↓
              Web Speech API
                       ↓
              Browser speaks!
```

## Keyboard Shortcuts Flow

```
User presses:  Ctrl+Shift+R
                    ↓
        TTSContext listens
                    ↓
        Reads window.getSelection()
                    ↓
        Calls speak() method
                    ↓
        Text is read aloud!
```

## Settings Persistence

```
User changes settings in widget
            ↓
    TTSContext updates state
            ↓
    localStorage saves:
    ├── tts_enabled
    ├── tts_rate
    ├── tts_volume
    ├── tts_voice
    └── tts_widget_position
            ↓
    Settings restored on reload!
```

## Component Usage Pattern

```jsx
// Any component in your app
import { useTTS } from '../contexts/TTSContext';

function MyComponent() {
  // 1. Get TTS methods from context
  const { speak, stop, isSpeaking } = useTTS();
  
  // 2. Use them anywhere
  const handleClick = () => {
    speak("Hello world!");
  };
  
  // 3. That's it!
  return <button onClick={handleClick}>Read</button>;
}
```

## Lifecycle

```
App Starts
    ↓
TTSProvider initializes
    ↓
Loads saved preferences
    ↓
Loads available voices
    ↓
TTSWidget renders (floating)
    ↓
User interacts with widget OR components
    ↓
Settings sync to localStorage
    ↓
User closes app
    ↓
Settings saved for next time!
```

## Key Benefits of Architecture

### 1. Separation of Concerns
- **TTSContext**: Logic & state management
- **TTSWidget**: User interface
- **Components**: Just use the hook

### 2. Single Source of Truth
- All TTS state in one place (TTSContext)
- No state duplication
- Always consistent

### 3. Loose Coupling
- Components don't know about widget
- Widget doesn't know about components
- Context mediates everything

### 4. Easy Testing
```jsx
// Mock TTSContext for testing
const mockTTS = {
  speak: jest.fn(),
  stop: jest.fn(),
  isSpeaking: false
};

<TTSContext.Provider value={mockTTS}>
  <MyComponent />
</TTSContext.Provider>
```

### 5. Simple Extension
Want to add a new TTS feature?
1. Add method to TTSContext
2. Optionally add UI to TTSWidget
3. All components get it automatically!

## Comparison: Before vs After

### Old Architecture ❌
```
Component A
  └── import textToSpeech utils
  └── manage local state
  └── configure settings
  
Component B
  └── import textToSpeech utils
  └── manage local state
  └── configure settings
  
(Repeat for every component)
```

### New Architecture ✅
```
TTSProvider (global)
  ├── TTSWidget (UI)
  └── All Components
        └── useTTS() hook
        └── Done!
```

## Technology Stack

```
┌─────────────────────────────────┐
│  React Context API              │  State management
├─────────────────────────────────┤
│  React Hooks                    │  Component logic
├─────────────────────────────────┤
│  Web Speech API                 │  Text-to-speech
├─────────────────────────────────┤
│  localStorage                   │  Settings persistence
├─────────────────────────────────┤
│  CSS3                           │  Beautiful UI
└─────────────────────────────────┘
```

## Performance

- **Lightweight**: ~250 lines of code total
- **Fast**: Uses native browser APIs
- **No Network**: Works 100% offline
- **No Cost**: No API calls or services
- **Efficient**: Single global state, no duplicates

## Scalability

Adding TTS to 100 new components?
```jsx
// Just add this to each:
const { speak } = useTTS();
```

That's it. No other changes needed!

## Maintenance

### To Update TTS Logic
1. Edit `TTSContext.jsx`
2. All components updated automatically

### To Update TTS UI
1. Edit `TTSWidget.jsx` or `TTSWidget.css`
2. Changes appear immediately

### To Add New Feature
1. Add method to TTSContext
2. Components can use it instantly

## Summary

The new architecture provides:
- ✅ **Simple** - One hook to rule them all
- ✅ **Maintainable** - Single source of truth
- ✅ **Scalable** - Works for any number of components
- ✅ **Testable** - Easy to mock and test
- ✅ **Beautiful** - Professional UI included
- ✅ **Performant** - Lightweight and fast
- ✅ **User-Friendly** - Intuitive controls

It's a complete, production-ready TTS solution! 🎉
