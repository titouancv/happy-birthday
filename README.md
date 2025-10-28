# 🎂 Happy Birthday - Interactive Candles

An interactive and animated web application to celebrate birthdays! Blow out the virtual candles by hovering over them and discover a colorful message.

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-6-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-cyan)

## ✨ Features

- 🕯️ **Animated candles** with realistic flickering and pulsing flames
- 🎨 **Random colors** for each revealed letter
- 🖱️ **Hover interaction** - blow out candles by hovering your mouse
- 🔄 **Reset button** to relight all candles
- 📱 **Responsive design** and centered layout
- ⚡ **Smooth animations** with Tailwind CSS

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/titouancv/happy-birthday.git

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🏗️ Project Architecture

The project follows a modular architecture with separation of concerns:

```
src/
├── components/
│   ├── Candle.tsx           # Main orchestrator component
│   ├── LitCandle.tsx        # Lit candle with all its elements
│   ├── Flame.tsx            # Flame animation
│   ├── Wick.tsx             # Candle wick
│   ├── CandleBody.tsx       # Candle body with wax drips
│   ├── CandleBase.tsx       # Candle base
│   ├── LetterBlock.tsx      # Letter block (blown out candle)
│   ├── CandleList.tsx       # List of candles
│   ├── BirthdayCake.tsx     # Main container
│   └── ResetButton.tsx      # Reset button
├── hooks/
│   └── useCandleManager.ts  # Custom hook for candle management
├── utils/
│   ├── candleHelpers.ts     # Utility functions for candles
│   └── randomValue.ts       # Random value generation
└── App.tsx                  # Application entry point
```

## 🎯 Main Components

### Candle

Main component that manages the state (lit/blown out) of a candle and displays either a `LitCandle` or a `LetterBlock`.

### LitCandle

Composes a lit candle with:

- Animated flame (flickering, pulsing)
- Wick
- Candle body with wax drips
- Base

### LetterBlock

Displays a letter with a random color when the candle is blown out.

### useCandleManager

Custom hook that encapsulates all business logic:

- Candle state management
- Detection of all blown out candles
- Reset functionality

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Static typing
- **Vite** - Ultra-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Animations** - Custom animations for flame effects

## 📝 Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Lint the code
```

## 🎨 Customization

You can easily customize:

- Displayed text: modify `'Happy Birthday'` in `App.tsx`
- Letter colors: modify the HSL logic in `LetterBlock.tsx`
- Animations: adjust durations in `Candle.tsx`
- Candle size: modify values in `randomValue()`

## 📄 License

MIT

## 👤 Author

Titouan - [GitHub](https://github.com/titouancv)

---

Made with ❤️ and React
