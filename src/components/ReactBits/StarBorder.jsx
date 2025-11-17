import React from "react";

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...rest
}) => {
  return (
    <Component
      // "overflow-hidden" is CRITICAL here to stop the glow from spilling out
      className={`relative inline-block overflow-hidden rounded-full ${className}`}
      {...rest}
    >
      {/* Bottom Glow Animation */}
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>

      {/* Top Glow Animation */}
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>

      {/* Content Container - sits on top (z-10) of the glow */}
      <div className="relative z-10 rounded-full w-full h-full">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;