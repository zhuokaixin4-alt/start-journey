import React from 'react';

const GalaxyBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      
      {/* Galaxy 1: Top Left - Cool Cyan/Blue */}
      <div className="absolute top-[5%] left-[5%] opacity-40 w-[500px] h-[500px]" style={{ animation: 'spin-slow 240s linear infinite' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
                <radialGradient id="galaxyGrad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
            </defs>
            {/* Core */}
            <ellipse cx="100" cy="100" rx="40" ry="30" fill="url(#galaxyGrad1)" />
            {/* Arms */}
            <path d="M100,100 m-50,-20 a 60,25 0 1,1 100,40" fill="none" stroke="#0ea5e9" strokeWidth="15" strokeOpacity="0.1" strokeLinecap="round" filter="blur(5px)"/>
            <path d="M100,100 m-50,-20 a 60,25 0 1,1 100,40" fill="none" stroke="#bae6fd" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2 10" />
            <path d="M100,100 m50,20 a 60,25 0 1,1 -100,-40" fill="none" stroke="#0ea5e9" strokeWidth="15" strokeOpacity="0.1" strokeLinecap="round" filter="blur(5px)"/>
        </svg>
      </div>

       {/* Galaxy 2: Bottom Right - Subtle Purple/Amber */}
      <div className="absolute bottom-[-10%] right-[-10%] opacity-20 w-[800px] h-[800px] mix-blend-screen" style={{ transform: 'rotate(-15deg)' }}>
        <svg viewBox="0 0 500 500" className="w-full h-full">
            <defs>
                 <radialGradient id="galaxyGrad2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
            </defs>
            <circle cx="250" cy="250" r="200" fill="url(#galaxyGrad2)" filter="blur(60px)" />
        </svg>
      </div>
      
      {/* Nebula Clouds - Adjusted to match #0b1e26 Ink Blue base */}
      <div className="absolute top-[30%] right-[20%] w-96 h-96 bg-[#1e3a8a]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-[#0f766e]/20 rounded-full blur-[80px]" />
    </div>
  );
};

export default GalaxyBackground;