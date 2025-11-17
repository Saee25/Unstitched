import React, { useState } from 'react';

// 1. Accept onLogoClick prop
const Navbar = ({ onNavClick, onLogoClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false); 
    if (onNavClick) {
      onNavClick(); 
    }
  };

  // 2. Handler for the Logo click
  const handleLogoClick = () => {
    setIsMenuOpen(false); // Close menu just in case
    if (onLogoClick) {
      onLogoClick();
    }
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-8 md:px-12 py-4">
      <div className="flex justify-between items-center w-full">
        
        {/* Centered Navbar Container - Glassmorphic */}
        <div className="bg-white/10 backdrop-blur-md border border-gemini-blue shadow-lg shadow-gemini-blue/50 
        rounded-full px-8 py-3 flex items-center justify-between 
        w-full max-w-[650px] mx-auto">
          
          {/* 3. Logo - Changed div to button */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none"
          >
            <span className="text-white font-semibold text-sm md:text-base cursor-pointer">
              Unstitched
            </span>
          </button>

          {/* Static Text Links */}
          <div className="hidden md:flex gap-6">
            <button 
              onClick={handleNavigation}
              className="text-white text-sm font-medium hover:text-blue-300 transition-colors"
            >
              About
            </button>
            <button 
              onClick={handleNavigation}
              className="text-white text-sm font-medium hover:text-blue-300 transition-colors"
            >
              Explore
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden absolute right-4 bg-white/10 backdrop-blur-md border border-gemini-blue shadow-lg shadow-gemini-blue/50 rounded-full p-2 flex flex-col gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-2 p-4 min-w-[120px]">
          <button 
            onClick={handleNavigation}
            className="text-white text-sm font-medium py-2 px-4 text-left hover:bg-white/20 rounded-lg transition-colors"
          >
            About
          </button>
          <button 
            onClick={handleNavigation}
            className="text-white text-sm font-medium py-2 px-4 text-left hover:bg-white/20 rounded-lg transition-colors"
          >
            Explore
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;