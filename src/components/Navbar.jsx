import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0a0a0a] text-white px-4 md:px-10 py-5 border-b border-gray-800 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold">
          Unstitched
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Creators</a>
        </div>

        {/* Burger Menu Button - Mobile Only */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 pt-4 pb-2">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Creators
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;