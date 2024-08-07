import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative w-full mt-10 mb-5">
      {/* Banner for larger screens */}
      <div className="hidden md:block">
        <img 
          src="Untitled design (2).png" 
          alt="Large Banner" 
          className="w-full h-auto" 
        />
      </div>
      {/* Banner for smaller screens */}
      <div className="block md:hidden">
        <img 
          src="Untitled design (2).png" 
          alt="Small Banner" 
          className="w-full h-auto" 
        />
      </div>
    </div>
  );
};

export default Banner;
