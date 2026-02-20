# 🚀 Helin Uçar — Personal Portfolio

Modern, performant, and visually stunning personal portfolio built with **React 18**, **TypeScript**, and **Vite**. This project features a seamless integration of high-end UI libraries like **Magic UI** and **Aceternity UI**, adapted specifically for a Vite-based architecture.

## 🔗 Links
- **Live Demo:** [helinucar.vercel.app/](https://helinucar.vercel.app/)
- **GitHub Repo:** [HelinUcar/portfolio](https://github.com/HelinUcar/portfolio)

---

## ✨ Key Features
- 🌍 **Internationalization (i18n):** Custom `LanguageContext` supporting Turkish (TR) and English (EN) seamlessly.
- 🌓 **Adaptive Theme:** Dark and Light mode support with persistent state using `ThemeContext`.
- 🎭 **Premium UI Components:** Integrated advanced animations and components from **Magic UI** and **Aceternity UI** (Orb effect, Blur fade, Retro grid, etc.).
- 📱 **Fully Responsive:** Mobile-first approach ensuring a perfect experience on all screen sizes.
- ⚓ **Smart Navigation:** Sticky header with `IntersectionObserver` to track active sections in real-time.
- 🏗️ **Component-Based Architecture:** Modular structure for high maintainability and scalability.

---

## 🛠️ Tech Stack

| Category | Tools |
| :--- | :--- |
| **Core** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, CSS Variables |
| **Animations** | Framer Motion, Motion |
| **UI Components** | Magic UI, Aceternity UI, Shadcn/ui |
| **Icons** | Lucide React, Tabler Icons |
| **Deployment** | Vercel |

---

## 🗂️ Project Structure

The project follows a clean and logical organization, adhering to modern React best practices:

```txt
src/
 ├── components/       # Atomic and complex UI components (Hero, Project cards, etc.)
 ├── data/             # Resume, projects, and localization (i18n) data
 ├── hooks/            # Custom hooks (useActiveSection, useTheme, etc.)
 ├── lib/              # Utility functions and context providers
 │    ├── i18n/        # LanguageContext & uiText
 │    └── theme/       # ThemeContext
 ├── types/            # TypeScript interfaces and global type definitions
 └── pages/            # Main section layouts
```

---

## 🧠 Development Insights: Adapting from Next.js
This project was inspired by a Next.js reference ( [kinhdev24-portfolio](https://github.com/kinhdev24/kinhdev24-portfolio)). However, it has been **completely re-engineered** for a Vite + React SPA environment:
- **Context API over Next-Themes:** Implemented a custom `ThemeContext` to handle dark mode class toggling on the root element.
- **Custom i18n Logic:** Instead of heavy libraries, a lightweight `LanguageContext` was built to manage state and text mapping.
- **Client-Side Optimization:** Converted Next.js specific components (like `next/image` and `next/link`) into standard React/Vite compatible structures without losing performance or SEO value.
- **Utility First:** Utilized `clsx` and `tailwind-merge` for clean, conditional class management.

---

🚀 Getting Started

## Prerequisites
- **Node.js:** v18 or higher  
- **Package Manager:** npm, pnpm, or yarn  

## Installation
1. Clone the repository:

```bash
git clone https://github.com/HelinUcar/portfolio.git
```

2. Navigate to the project folder:

```bash
cd portfolio
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Scripts
- **npm run dev:** Starts the development server at `localhost:5173`.
- **npm run build:** Generates the production-ready build in the `dist/` folder.
- **npm run preview:** Locally previews the production build.

## 📬 Contact & Socials
- **LinkedIn:** [in/helin-duygu-ucar](https://www.linkedin.com/in/helin-duygu-u%C3%A7ar-64043617b/)
- **GitHub:** [@HelinUcar](https://github.com/HelinUcar/)
- **Email:** [helinduyguucar@gmail.com](mailto:helinduyguucar@gmail.com)

## 📄 License & Credits
- **UI Reference:** [kinhdev24-portfolio](https://github.com/kinhdev24/kinhdev24-portfolio)  
- This project is for personal portfolio use. Feel free to explore and learn!