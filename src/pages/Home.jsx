import React, { useRef } from 'react';
import Navbar from "../components/Navbar";
import VideoToggle from "../components/VideoToggle";
import DarkVeil from '../components/DarkVeil';
import Hero from '../components/Hero';

const Home = () => {
  const videosSectionRef = useRef(null);

  const scrollToVideos = () => {
    if (videosSectionRef.current) {
      // Wait a bit for layout to settle, then calculate scroll position
      setTimeout(() => {
        const element = videosSectionRef.current;
        if (!element) return;
        
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const elementHeight = element.offsetHeight;
        const viewportHeight = window.innerHeight;
        const navbarHeight = 100; // Account for navbar
        const extraPadding = 20; // Small padding for breathing room
        
        // Calculate scroll position to center the content vertically
        // Position so that the content is centered in the viewport
        const scrollPosition = elementTop + (elementHeight / 2) - (viewportHeight / 2) - navbarHeight + extraPadding;

        // Use requestAnimationFrame for smoother animation
        const startPosition = window.pageYOffset;
        const distance = scrollPosition - startPosition;
        const duration = 1000; // 1 second
        let start = null;

        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const percentage = Math.min(progress / duration, 1);
          
          // Easing function for smooth deceleration
          const easeInOutCubic = percentage < 0.5
            ? 4 * percentage * percentage * percentage
            : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

          window.scrollTo(0, startPosition + distance * easeInOutCubic);

          if (progress < duration) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      }, 50);
    }
  };

  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden w-full">
      {/* Content layer */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section - Landing Page with DarkVeil background */}
        <div className="relative min-h-screen bg-black">
          {/* DarkVeil background effect - only for hero section */}
          <div className="absolute inset-0 w-full h-full z-0">
            <DarkVeil speed={0.2} />
          </div>
          
          {/* Hero content */}
          <div className="relative z-10">
            <Hero onGetStarted={scrollToVideos} />
          </div>
        </div>
        
        {/* Videos Section - Scroll down to see with black background */}
        <section 
          ref={videosSectionRef}
          id="explore"
          className="min-h-screen flex items-center justify-center p-4 md:p-10 py-20 bg-black"
        >
          <div className="w-full max-w-7xl">
            <VideoToggle />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;