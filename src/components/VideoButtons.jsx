import React from 'react';
import { categories } from './VideoData'; // Import categories

const VideoButtons = ({ active, setActive }) => {
  return (
    <div className="flex flex-col gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActive(cat.id)}
          className={`
            px-6 py-3 rounded-lg text-base font-medium
            transition-all duration-300 text-left
            ${active === cat.id
              ? "bg-purple-600 text-white"
              : "bg-gray-800 text-white hover:bg-gray-700"
            }
          `}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default VideoButtons;