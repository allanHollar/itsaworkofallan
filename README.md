# It's a work of Allan! 🙂

A modern, responsive, and animated portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.  
This project showcases frontend engineering work, animated project case studies, and interactive UI features — all optimized for performance and accessibility.

---

## 🚀 Tech Stack

- ⚛️ **React 18** (with Hooks + Context API)
- 📘 **TypeScript**
- 💅 **Tailwind CSS** + SCSS Modules
- 🎞 **Framer Motion** (smooth animations)
- 🛠️ **React Router v6**
- 📦 **Styled Components** & FontAwesome Icons
- 📈 **React Scroll + Intersection Observer** (for dynamic, scroll-triggered visuals)
- 🧪 **Jest + Testing Library** (setup included)

---

## 🧩 Features

- 🎯 Fully typed with TypeScript
- ⚙️ Responsive layout (mobile-first)
- ✨ Smooth section transitions & animations
- 🖼️ Lazy-loaded images with accessibility tags
- 🧠 Modular code with strong type safety
- 💡 Custom context providers (`Resume`, `AboutMe`, `Projects`, `SingleProject`)
- 🔥 Optimized builds and Tailwind CLI workflow

---

## 📂 Project Structure

```
src/
│
├── components/         # Reusable UI components
├── context/            # Global context providers
├── css/                # Tailwind and SCSS styles
├── data/               # Project and resume JSON data
├── images/             # Web-optimized assets
├── pages/              # Route-based components
├── types/              # TypeScript interfaces & types
└── App.tsx             # App entry with routing
```

---

## 🛠️ Setup & Development

### 1. Clone the repo

```bash
git clone https://github.com/your-username/itsaworkofallan.git
cd itsaworkofallan
```

### 2. Install dependencies

```bash
yarn install
# or
npm install --legacy-peer-deps
```

### 3. Run the dev server

```bash
yarn start
```

This will run:

- React (`react-scripts`)
- Tailwind CLI (watch mode)
- Nodemon to watch `data/`

---

## 🧪 Testing

```bash
yarn test
```

Runs unit tests using `Jest` and `@testing-library/react`.

---

## 🧱 Build

```bash
yarn build
```

Optimized static build for production.

---

## 🌐 Deployment

Deploy to:

- **Netlify**
- **Vercel**
- **GitHub Pages**
- **Firebase Hosting**
- or any static site host!

Just make sure to set up your build command:

```bash
yarn build
```

and output directory:

```
build/
```

---

## 📖 License

MIT © [Allan Ritumban](https://github.com/allanHollar)

---

## 🙌 Acknowledgments

Special thanks to the open-source community and contributors behind React, Tailwind, and all dependencies in this stack 💜
