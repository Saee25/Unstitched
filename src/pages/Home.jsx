import React from 'react';
import Navbar from "../components/Navbar";
import VideoToggle from "../components/VideoToggle";

const Home = () => {
  return (
    // Use flex-col and h-screen to make it a full-height, no-scroll page
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      
      {/* This main section grows to fill the remaining space and centers the content */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-10">
        <VideoToggle />
      </main>
    </div>
  );
};

export default Home;