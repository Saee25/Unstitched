import React, { useState } from "react";
import { videoData } from "./VideoData";
import VideoButtons from "./VideoButtons";
import VideoGrid from "./VideoGrid";
import { AnimatePresence } from "framer-motion";
import GradientText from "./ReactBits/GradientText";

const LeftSection = () => {
  const [activeCategory, setActiveCategory] = useState("brands");

  return (
    <div className="flex flex-col md:flex-row gap-10 w-full relative">

      {/* LEFT COLUMN */}
      <div
        className="
          w-full md:w-[35%]
          flex flex-col justify-start
          py-8 md:py-12 px-6 md:px-10 
          z-20
        "
      >
        {/* HERO TEXT */}
        <div className="mb-6">
          <GradientText
            colors={["#4a0fff", "#6b3fff", "#e8e8ff", "#4079ff", "#4a0fff"]}
            animationSpeed={3}
            className="text-3xl md:text-4xl font-extrabold leading-tight whitespace-nowrap"
          >
            MAGIC is for you!
          </GradientText>
        </div>

        {/* BUTTONS */}
        <VideoButtons active={activeCategory} setActive={setActiveCategory} />

        {/* DESCRIPTION */}
        <p className="text-lg text-white mt-6">
          Showcase your brand through Immersive video content
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full md:w-[65%] flex items-start justify-center relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <VideoGrid key={activeCategory} videos={videoData[activeCategory]} />
        </AnimatePresence>
      </div>

    </div>
  );
};

export default LeftSection;
