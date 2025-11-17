# 🧵 Unstitched

> **Transform your vision into immersive digital experiences.**

**Unstitched** is a high-performance, visually immersive React web application designed to showcase creative video content. It features advanced WebGL background shaders, fluid layouts, and a smooth, mobile-first interactive experience.

![Hero Section](/src/assets/image-1.png)

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites
* **Node.js** (v18 or higher recommended)
* **npm** or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Saee25/Unstitched](https://github.com/Saee25/Unstitched)
    cd unstitched
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run the Development Server**
    Start the local server with hot-reloading enabled.
    ```bash
    npm run dev
    ```
    > Open your browser and navigate to `http://localhost:5173` to view the app.

4.  **Build for Production**
    Compile and optimize the application for deployment.
    ```bash
    npm run build
    ```

## ✨ Features

* **🔮 Immersive WebGL Background**: Integrated **OGL** powered "Dark Veil" fluid simulation shader that reacts to time and subtle motion.
* **🎥 Dynamic Video Gallery**: A tabbed filtering system (Brands, Creators, Products) featuring seamless exit/enter animations powered by **Framer Motion**.
* **👆 Interactive UI Elements**:
    * **StarBorder Buttons**: Custom glowing borders with CSS animations.
    * **Ripple Effects**: JavaScript-driven coordinate-based ripple clicks on interactive buttons.
    * **Gradient Text**: Animated background-clip text effects.
* **📱 Responsive Navigation**:
    * Glassmorphism navbar with mobile toggle menu support.
    * Custom **Cubic-Bezier Smooth Scrolling** for "Back to Top" and "Explore" navigation.
* **⚡ Optimized Performance**: Built on **Vite** with lazy-loaded assets and React 19.

## 📸 How It Looks

### Video Showcase
Users can seamlessly switch between video categories with staggered grid animations.

![Video Grid](/src/assets/image.png)

## 🛠️ Tech Stack

* **Core**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) + `tailwindcss-animate`
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Graphics/3D**: [OGL](https://github.com/oframe/ogl) (Lightweight WebGL library)
* **Icons**: Lucide React

## 📂 Project Structure

```text
UNSTITCHED/
├── public/              # Static assets
├── src/
│   ├── assets/          # WebM video files and images
│   ├── components/      # Reusable UI components
│   │   ├── ReactBits/   # Special Effects (DarkVeil, StarBorder, GradientText)
│   │   ├── Hero.jsx     # Landing section with 3D background
│   │   ├── Navbar.jsx   # Responsive navigation logic
│   │   ├── VideoGrid.jsx# Motion-enabled video layout
│   │   └── ...
│   ├── pages/           # Page composition (Home.jsx)
│   ├── App.jsx          # Root component
│   └── main.jsx         # Entry point
├── tailwind.config.js   # Custom color palette and animation config
└── vite.config.js       # Vite configuration with path aliases