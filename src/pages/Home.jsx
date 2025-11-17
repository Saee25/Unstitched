import React, { useRef } from 'react';
import Navbar from "../components/Navbar";
import LeftSection from "../components/LeftSection";
import DarkVeil from '../components/ReactBits/DarkVeil';
import Hero from '../components/Hero';

const Home = () => {
  const videosSectionRef = useRef(null);

  // --- UPDATED: Custom Animation for Scrolling Up ---
  const scrollToTop = () => {
    const duration = 1000; // Same duration as scroll down (1 second)
    const startPosition = window.pageYOffset;
    const distance = -startPosition; // Target is 0, so distance is (0 - current)
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      // Same easing function for consistent feel
      const easeInOutCubic = percentage < 0.5
        ? 4 * percentage * percentage * percentage
        : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * easeInOutCubic);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  // --- Existing Scroll Down Logic ---
  const scrollToVideos = () => {
    if (videosSectionRef.current) {
      setTimeout(() => {
        const element = videosSectionRef.current;
        if (!element) return;
        
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const elementHeight = element.offsetHeight;
        const viewportHeight = window.innerHeight;
        const navbarHeight = 100; 
        const extraPadding = 50; 
        
        const scrollPosition = elementTop + (elementHeight / 2) - (viewportHeight / 2) - navbarHeight + extraPadding;

        const startPosition = window.pageYOffset;
        const distance = scrollPosition - startPosition;
        const duration = 1000; 
        let start = null;

        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const percentage = Math.min(progress / duration, 1);
          
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
      <div className="relative z-10 w-full overflow-x-hidden">
        
        {/* Pass the new custom scrollToTop function */}
        <Navbar onNavClick={scrollToVideos} onLogoClick={scrollToTop} />
        
        <div className="relative min-h-screen bg-black">
          <div className="absolute inset-0 w-full h-full z-0">
            <DarkVeil speed={0.2} />
          </div>
          
          <div className="relative z-10">
            <Hero onGetStarted={scrollToVideos} />
          </div>
        </div>
        
        <section 
          ref={videosSectionRef}
          id="explore"
          className="min-h-screen flex items-center justify-center p-4 md:p-10 py-20 bg-black"
        >
          <div className="w-full max-w-7xl">
            <LeftSection />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;