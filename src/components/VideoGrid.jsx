import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1, when: "afterChildren" },
  },
};

const videoItemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 20, stiffness: 150, mass: 0.5 },
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const VideoGrid = ({ videos }) => {
  const videoRefs = useRef([]);
  const [hovered, setHovered] = useState(null);
  const [isPlaying, setIsPlaying] = useState({});
  const [progress, setProgress] = useState({});

  const togglePlay = (i) => {
    const vid = videoRefs.current[i];
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setIsPlaying((p) => ({ ...p, [i]: true }));
    } else {
      vid.pause();
      setIsPlaying((p) => ({ ...p, [i]: false }));
    }
  };

  const handleTimeUpdate = (i) => {
    const vid = videoRefs.current[i];
    if (!vid) return;
    const prg = (vid.currentTime / vid.duration) * 100;
    setProgress((p) => ({ ...p, [i]: prg }));
  };

  const handleSeek = (e, i) => {
    const vid = videoRefs.current[i];
    if (!vid) return;
    const scrub = (e.target.value / 100) * vid.duration;
    vid.currentTime = scrub;
  };

  return (
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
    >
      {videos.map((v, i) => (
        <motion.div
          key={v.id}
          variants={videoItemVariants}
          className="relative rounded-lg overflow-hidden bg-gray-900 w-full aspect-[9/16]"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <video
            ref={(el) => (videoRefs.current[i] = el)}
            src={v.url}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full"
            style={{ objectFit: "cover" }}
            onTimeUpdate={() => handleTimeUpdate(i)}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onContextMenu={(e) => e.preventDefault()}
          />

          {hovered === i && (
            <div className="absolute bottom-0 left-0 w-full bg-black/60 px-2 py-1 flex items-center gap-2">
              <button
                onClick={() => togglePlay(i)}
                className="text-white text-lg leading-none p-0 m-0 select-none"
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  boxShadow: "none"
                }}
                onMouseDown={(e) => e.preventDefault()} // prevents blue highlight
              >
                {isPlaying[i] ? "⏸" : "▶"}
              </button>

              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress[i] || 0}
                onChange={(e) => handleSeek(e, i)}
                className="w-full cursor-pointer"
                style={{
                  height: "3px",
                  background: "transparent",
                  accentColor: "white"
                }}
              />
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default VideoGrid;
