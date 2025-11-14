import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { videoData } from "./VideoData";
import VideoButtons from "./VideoButtons";
import VideoGrid from "./VideoGrid";

const VideoToggle = () => {
  const [activeCategory, setActiveCategory] = useState("brands");

  return (
    // Main container: stacks vertically on mobile, row on desktop
    <div className="flex flex-col md:flex-row gap-10 w-full h-full">
      
      {/* LEFT COLUMN */}
      {/* Takes full width on mobile, 1/3 on desktop */}
      {/* Uses flex-col and justify-between to push content to top and bottom */}
      <div className="w-full md:w-1/3 flex flex-col justify-between md:h-[80vh] px-4 md:px-10">
        
        {/* Top Content (Title + Buttons) */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            Magic is for you
          </h1>
          <VideoButtons
            active={activeCategory}
            setActive={setActiveCategory}
          />
        </div>

        {/* Bottom Content (Description) */}
        <p className="text-lg text-white mt-8 md:mt-0">
          Showcase your brand through Immersive video content
        </p>
      </div>

      {/* RIGHT COLUMN */}
      {/* Takes full width on mobile, 2/3 on desktop */}
      <div className="w-full md:w-2/3 flex items-center justify-center relative min-h-[400px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.4, 0, 0.2, 1] // Smooth cubic-bezier easing
            }}
            className="w-full"
          >
            <VideoGrid videos={videoData[activeCategory]} />
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default VideoToggle;