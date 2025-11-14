import React from 'react';

const Hero = ({ onGetStarted }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 relative z-10">
      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 max-w-4xl leading-tight">
        Transform your vision into immersive digital experiences
      </h1>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onGetStarted}
          className="bg-white text-gray-900 rounded-full px-8 py-4 font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
        >
          Get Started
        </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-8 py-4 font-semibold text-lg hover:bg-white/20 transition-all">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;

