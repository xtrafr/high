# Hooked.wtf - Premium Digital Tools

A modern, fully responsive website frontend built with **React**, **Vite**, and **Tailwind CSS**. Features a sleek dark theme with neon accents, glassmorphism effects, and smooth animations powered by Framer Motion.

## 🚀 Features

- **Ultra-modern design**: Dark mode with purple/cyan gradients and neon effects
- **Fully responsive**: Optimized for mobile, tablet, and desktop
- **Smooth animations**: Framer Motion for seamless transitions
- **Glassmorphism UI**: Modern backdrop blur effects
- **Product catalog**: Dynamic product cards with hover effects
- **Live stats counter**: Animated statistics display
- **Customer reviews**: 5-star rating system with avatars
- **Feature highlights**: Icon-based feature grid

## 📦 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Inter Font** - Clean, professional typography

## 🛠️ Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 👀 Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to Netlify:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop).

### GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/hooked-wtf",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
hooked-wtf/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with animated background
│   │   ├── ProductCard.jsx   # Product card component
│   │   ├── Stats.jsx         # Animated statistics counter
│   │   ├── Reviews.jsx       # Customer reviews section
│   │   ├── Features.jsx      # Features grid
│   │   └── Footer.jsx        # Footer with links
│   ├── data/
│   │   └── mockData.js       # Product and review data
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    500: '#8b5cf6',  // Purple
    600: '#7c3aed',
    700: '#6d28d9',
  },
  accent: {
    cyan: '#06b6d4',
    purple: '#a855f7',
    blue: '#3b82f6',
  },
}
```

### Products

Edit `src/data/mockData.js` to modify products, reviews, and stats.

## 📄 License

Copyright © 2025 Hooked.wtf - All rights reserved

---

Built with ❤️ using React + Vite + Tailwind CSS
