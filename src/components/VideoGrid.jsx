import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Define animation "variants" for the grid container
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Slightly increased stagger for more visibility (was 0.1)
      delayChildren: 0.1,    // Delay before the first child starts animating
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,         // How long the grid fades out
      when: "afterChildren", // Ensures children exit before the container
    },
  },
};

// Define animation "variants" for each video item
const videoItemVariants = {
  hidden: { y: 30, opacity: 0 }, // Start further down (was 20px)
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",        // Use a spring animation for a more natural feel
      damping: 20,           // Less "bounce"
      stiffness: 150,        // How quickly it reaches its target
      mass: 0.5,             // Weight of the animating element
    },
  },
  exit: {
    y: -30,                  // Exit further up (was -20px)
    opacity: 0,
    transition: {
      duration: 0.2,         // Quicker fade out for individual items
    },
  },
};

const VideoGrid = ({ videos }) => {
  const videoRefs = useRef([]);

  return (
    <>
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
      >
        {videos.map((v, index) => (
          <motion.div
            key={v.id}
            variants={videoItemVariants}
            className="rounded-lg overflow-hidden bg-gray-900 w-full aspect-[9/16]"
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
                if (el) {
                  el.disablePictureInPicture = true;
                  el.setAttribute('disablePictureInPicture', 'true');
                }
              }}
              src={v.url}
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default VideoGrid;