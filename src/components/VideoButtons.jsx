import React, { useRef } from "react";
import { categories } from "./VideoData";

const VideoButtons = ({ active, setActive }) => {
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

    const rippleEl = btn.getElementsByClassName("ripple")[0];
    if (rippleEl) rippleEl.remove();

    btn.appendChild(circle);
  };

  return (
    <div className="flex flex-col gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={(e) => {
            ripple(e);
            setActive(cat.id);
          }}
          className={`
            relative overflow-hidden
            px-6 py-3 rounded-xl text-base font-medium select-none
            transition-all duration-300 text-left

            backdrop-blur-xl border

            ${
              active === cat.id
                ? `
                bg-[rgba(74,15,255,0.25)]
                border-[rgba(147,133,255,0.5)]
                text-[#e8e8ff]
                shadow-[0_0_18px_rgba(74,15,255,0.45)]
                scale-[1.02]
              `
                : `
                bg-[rgba(64,121,255,0.15)]
                border-[rgba(255,255,255,0.2)]
                text-[#e8e8ffcc]
                hover:bg-[rgba(147,133,255,0.25)]
                hover:shadow-[0_0_12px_rgba(147,133,255,0.35)]
                hover:scale-[1.01]
              `
            }
          `}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default VideoButtons;
