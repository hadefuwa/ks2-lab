# 🚀 Quick Start - New TTS System

## Instant Usage (No Setup Required!)

Your new TTS system is **already active** and ready to use!

### 1. See the Floating Widget
Look for the **🔉 TTS** icon in the corner of your screen. That's your global TTS control!

### 2. Try It Right Now
1. **Highlight any text** on any page
2. Press `Ctrl+Shift+R`
3. **Listen** to it being read aloud! 🎧

### 3. Customize Controls
- **Click the widget** to expand full controls
- **Drag it** anywhere you want
- **Adjust speed** - slower for learning, faster for review
- **Change volume** - as loud or quiet as you need
- **Pick a voice** - choose your favorite

## Use in Your Components

Want to add "Read This" buttons to your components? Super easy:

```jsx
import { useTTS } from '../contexts/TTSContext';

function MyComponent() {
  const { speak } = useTTS();
  
  return (
    <button onClick={() => speak("Hello world!")}>
      🔊 Read This
    </button>
  );
}
```

**That's it!** One import, one line. Done. ✅

## Examples

### Read on Page Load
```jsx
function Lesson({ content }) {
  const { speak, isEnabled } = useTTS();
  
  useEffect(() => {
    if (isEnabled) speak(content);
  }, [content]);
  
  return <div>{content}</div>;
}
```

### Read Button
```jsx
function ReadButton({ text }) {
  const { speak } = useTTS();
  return <button onClick={() => speak(text)}>🔊</button>;
}
```

### With Custom Speed
```jsx
function SlowRead({ text }) {
  const { speak } = useTTS();
  return (
    <button onClick={() => speak(text, { rate: 0.7 })}>
      🐢 Read Slowly
    </button>
  );
}
```

## Keyboard Shortcuts

- `Ctrl+Shift+R` - Read selected text
- `Ctrl+Shift+S` - Toggle TTS on/off  
- `Esc` - Stop reading

## Key Features

✅ **Works Everywhere** - Every page, every component  
✅ **No Configuration** - Just use it  
✅ **Beautiful Widget** - Professional UI  
✅ **Drag & Drop** - Position it anywhere  
✅ **Keyboard Control** - Quick shortcuts  
✅ **Read Anything** - Highlight & read  
✅ **Remembers Settings** - Speed, volume, voice, position  
✅ **100% Free** - No API costs  
✅ **Works Offline** - Uses browser voices  

## That's All!

You're ready to use the new TTS system. It's already integrated and working!

For more details, see:
- `docs/NEW_TTS_GUIDE.md` - Full documentation
- `docs/TTS_MIGRATION_GUIDE.md` - Migrate existing components
- `src/components/TTSExampleComponent.jsx` - Working examples

**Enjoy!** 🎉
