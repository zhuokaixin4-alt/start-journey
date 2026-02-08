import React from 'react';

const Landscape: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[45vh] z-10 pointer-events-none">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-full object-cover preserve-3d"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a2b33" />
            <stop offset="100%" stopColor="#0b1e26" />
          </linearGradient>
        </defs>

        {/* Distant Hills - Dark ink blue/green mix */}
        <path
          fill="#16262e"
          d="M0,220 C240,180 480,240 720,200 C960,160 1200,200 1440,160 V320 H0 Z"
          opacity="0.8"
        />
        
        {/* Foreground Planet Curve - Changed from Dark Olive (#2f3828) to Dark Ink Blue (#142833) */}
        <path
          fill="#142833" 
          d="M0,280 C320,250 640,260 1440,220 V320 H0 Z"
        />
        
        {/* Stylized Pine Trees (Triangles) - Changed from green silhouettes to dark blue silhouettes */}
        {/* Left Group */}
        <path fill="#0a171f" d="M100,280 L140,150 L180,280 Z" />
        <path fill="#152830" d="M150,290 L200,120 L250,290 Z" />
        <path fill="#0a171f" d="M220,285 L260,180 L300,285 Z" />

        {/* Right Group */}
        <path fill="#0a171f" d="M1100,280 L1150,140 L1200,280 Z" />
        <path fill="#152830" d="M1180,290 L1240,100 L1300,290 Z" />
        <path fill="#0a171f" d="M1280,285 L1320,190 L1360,285 Z" />
      </svg>
    </div>
  );
};

export default Landscape;