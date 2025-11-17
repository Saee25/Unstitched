import React from "react";
import StarBorder from "./ReactBits/StarBorder"; // Adjust path if needed

const Hero = ({ onGetStarted }) => {
  const ripple = (e) => {
    const btn = e.currentTarget;
    const circle = document.createElement("span");

    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    const rect = btn.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add("ripple");

    const existing = btn.getElementsByClassName("ripple")[0];
    if (existing) existing.remove();

    btn.appendChild(circle);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 relative z-10">
      
      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 text-center mb-12">
        Transform your vision into immersive digital experiences
      </h1>

      {/* CTA Buttons */}
      <StarBorder
        as="div"
        // --- CHANGES MADE HERE ---
        // 1. Added border-[#6b3fff] to match the prop color
        // 2. Added shadow-[0_0_20px_...] to create the neon glow effect
        className="p-[1px] border border-[#6b3fff] shadow-[0_0_20px_rgba(74,15,255,0.5)]" 
        color="#6b3fff"
        speed="4s"
      >
        <button
          onClick={(e) => {
            ripple(e);
            onGetStarted();
          }}
          className="
            relative overflow-hidden select-none w-full h-full
            px-10 py-4 rounded-full font-semibold text-lg
            backdrop-blur-xl 
            bg-[rgba(74,15,255,0.25)] 
            text-[#e8e8ff]
            /* Removed the button shadow to avoid double-glow chaos, or you can keep it subtle */
            hover:shadow-[0_0_25px_rgba(147,133,255,0.55)]
            transition-all duration-300
            hover:scale-[1.03] active:scale-[0.98]
          "
        >
          Get Started
        </button>
      </StarBorder>
    </section>
  );
};

export default Hero;