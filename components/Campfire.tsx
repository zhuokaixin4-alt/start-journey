import React from 'react';

const Campfire: React.FC = () => {
  return (
    <div className="relative w-32 h-32 flex justify-center items-end select-none pointer-events-none">
       {/* SVG Filter Definition for Distortion and Blur */}
       <svg className="absolute w-0 h-0">
        <defs>
          <filter id="fire-wave-blur">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.05" numOctaves="2" seed="5">
              <animate attributeName="baseFrequency" dur="6s" values="0.01 0.05;0.015 0.06;0.01 0.05" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="4" />
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>
       </svg>

       <style>
         {`
           @keyframes pop-up {
             0% { transform: scale(0) translateY(10px); opacity: 0; }
             20% { opacity: 1; }
             100% { transform: scale(1.2) translateY(-40px) rotate(10deg); opacity: 0; }
           }
           @keyframes flicker-poly {
             0%, 100% { transform: scale(1) skewX(0deg); opacity: 0.9; }
             25% { transform: scaleY(1.1) skewX(-2deg); opacity: 1; }
             50% { transform: scaleY(0.9) skewX(2deg); opacity: 0.8; }
             75% { transform: scaleY(1.05) skewX(-1deg); opacity: 1; }
           }
           .poly-flame {
             position: absolute;
             bottom: 0;
             clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
             transform-origin: bottom center;
           }
         `}
       </style>

       {/* Ambient Glow - Amber Orange */}
       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#ff7d25] blur-[60px] opacity-25 rounded-full" />

       {/* Logs - Updated to Dark Ink/Blue colors to match landscape */}
       <div className="absolute bottom-2 z-10 w-24 h-12">
          <svg viewBox="0 0 100 50" className="drop-shadow-lg">
             {/* Log Dark Sides - Changed from #0f1a15 to #0a171f */}
             <polygon points="10,40 90,40 85,30 15,30" fill="#0a171f" stroke="#1c2e36" strokeWidth="1" />
             {/* Log Ends */}
             <polygon points="30,45 70,5 80,10 40,50" fill="#16262e" />
             <polygon points="70,45 30,5 20,10 60,50" fill="#16262e" />
             {/* Embers */}
             <rect x="45" y="35" width="10" height="5" fill="#ff7d25" opacity="0.8" className="animate-pulse" />
          </svg>
       </div>

       {/* Flames Container */}
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-24 z-20 mix-blend-screen" style={{ filter: 'url(#fire-wave-blur)' }}>
          
          {/* Main Core Flame - Deep Amber */}
          <div className="poly-flame w-12 h-16 bg-[#ff4500] left-2 z-10 animate-[flicker-poly_0.8s_infinite_ease-in-out]" />
          
          {/* Secondary Flame - Amber Orange */}
          <div className="poly-flame w-10 h-12 bg-[#ff7d25] left-3 bottom-1 z-20 animate-[flicker-poly_1.2s_infinite_ease-in-out_reverse]" style={{ animationDelay: '0.1s' }} />
          
          {/* Inner Flame - Light Cream */}
          <div className="poly-flame w-6 h-8 bg-[#ffeddb] left-5 bottom-2 z-30 animate-[flicker-poly_0.6s_infinite_ease-in-out]" style={{ animationDelay: '0.2s' }} />
       </div>

       {/* Sparks */}
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-24 z-20 pointer-events-none">
          <div className="absolute w-2 h-2 bg-[#ffeddb] bottom-4 left-4" 
               style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animation: 'pop-up 2s linear infinite' }} />
          <div className="absolute w-1.5 h-1.5 bg-[#ff7d25] bottom-6 left-8" 
               style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animation: 'pop-up 2.5s linear infinite 0.5s' }} />
           <div className="absolute w-2.5 h-2.5 bg-[#ffae00] bottom-2 left-6" 
               style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animation: 'pop-up 1.8s linear infinite 1s' }} />
       </div>

    </div>
  );
};

export default Campfire;