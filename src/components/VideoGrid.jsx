import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoGrid = ({ videos }) => {
  const [minHeight, setMinHeight] = useState(null);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Find the shortest video's natural height and use it for all videos
    const checkVideoHeights = () => {
      const loadedVideos = videoRefs.current.filter(ref => ref && ref.videoHeight && ref.videoWidth);
      
      if (loadedVideos.length === videos.length) {
        // Find the video with the smallest natural height (shortest vertical length)
        const heights = loadedVideos.map(ref => ref.videoHeight);
        const shortestHeight = Math.min(...heights);
        
        // Use the shortest video's height as the reference
        // Scale it proportionally based on container width to maintain aspect ratio
        if (containerRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const isMobile = window.innerWidth < 768; // md breakpoint
          const gap = isMobile ? 16 : 24; // gap-4 = 16px, gap-6 = 24px
          
          // Calculate available width per video
          const videosPerRow = isMobile ? 1 : 3;
          const availableWidth = (containerWidth - (gap * (videosPerRow - 1))) / videosPerRow;
          
          // Find the video with shortest height and get its aspect ratio
          const shortestVideo = loadedVideos.find(ref => ref.videoHeight === shortestHeight);
          if (shortestVideo) {
            const aspectRatio = shortestVideo.videoWidth / shortestVideo.videoHeight;
            // Calculate height that maintains the aspect ratio with available width
            const calculatedHeight = availableWidth / aspectRatio;
            setMinHeight(calculatedHeight);
          }
        }
      }
    };

    // Check heights when videos are loaded
    videoRefs.current.forEach((ref) => {
      if (ref) {
        if (ref.readyState >= 1) { // HAVE_METADATA
          checkVideoHeights();
        } else {
          ref.addEventListener('loadedmetadata', checkVideoHeights, { once: true });
        }
      }
    });

    // Also check on window resize
    const handleResize = () => {
      setTimeout(checkVideoHeights, 100); // Small delay to ensure container has resized
    };
    window.addEventListener('resize', handleResize);

    return () => {
      videoRefs.current.forEach((ref) => {
        if (ref) {
          ref.removeEventListener('loadedmetadata', checkVideoHeights);
        }
      });
      window.removeEventListener('resize', handleResize);
    };
  }, [videos]);

  const videoVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1], // Custom easing for smooth animation
      }
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Stagger the video animations for smooth cascade
        delayChildren: 0.05,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  };

  return (
    // This grid stacks on mobile (grid-cols-1) and goes to 3 columns on desktop (md:grid-cols-3)
    <motion.div 
      ref={containerRef} 
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {videos.map((v, index) => (
        // The motion.div handles the animation
        <motion.div
          key={v.id} // Key is crucial for AnimatePresence
          // This wrapper div creates the consistent shape - vertical panels like billboards
          // Use minHeight if available, otherwise use aspect ratio as fallback
          className="rounded-lg overflow-hidden bg-gray-900 w-full flex items-center justify-center"
          style={minHeight ? { height: `${minHeight}px` } : { aspectRatio: '3/4' }}
          variants={videoVariants}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={v.url}
            autoPlay
            loop
            muted
            playsInline // Important for iOS
            className="w-full h-full object-contain" // Changed to object-contain to show full video without cropping
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default VideoGrid;