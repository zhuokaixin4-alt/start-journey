import React from 'react';
import { Play } from 'lucide-react';

interface ParallaxTitleProps {
  mousePos: { x: number; y: number };
}

const ParallaxTitle: React.FC<ParallaxTitleProps> = ({ mousePos }) => {
  // Gentle parallax movement
  const xOffset = (mousePos.x - window.innerWidth / 2) / 50;
  const yOffset = (mousePos.y - window.innerHeight / 2) / 50;

  return (
    <div 
      className="absolute top-[35%] left-1/2 z-30 text-center flex flex-col items-center w-full select-none"
      style={{ 
        // Use calc to combine perfect centering (-50%) with the parallax offset
        transform: `translate(calc(-50% + ${xOffset * -1}px), calc(-50% + ${yOffset * -1}px))` 
      }}
    >
      {/* Main English Title - Zilla Slab (Serif Gothic alternative) */}
      <h1 
        className="text-6xl md:text-8xl font-bold text-[#fdf6e3] tracking-wider"
        style={{ 
          fontFamily: '"Zilla Slab", serif',
          textShadow: '4px 4px 0px #ff7d25' // Amber Orange drop shadow
        }}
      >
        START JOURNEY
      </h1>

      {/* Chinese Subtitle - FangSong / Noto Serif SC */}
      <h2 
        className="mt-4 text-3xl md:text-4xl text-[#ff7d25] font-light tracking-[0.3em]"
        style={{ fontFamily: '"FangSong", "Noto Serif SC", serif' }}
      >
        启 程
      </h2>

      {/* Initialize Button Section - Space Mono for Tech/Dashboard feel */}
      <div className="mt-16 flex items-center gap-4">
        {/* Left Dash */}
        <div className="w-8 h-[2px] bg-[#ff7d25]/60"></div>
        
        <button 
          className="group relative px-10 py-3 border-2 border-[#ff7d25] text-[#ff7d25] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#ff7d25] hover:text-[#0b1e26] cursor-pointer"
          style={{ fontFamily: '"Space Mono", monospace' }}
          onClick={() => console.log('Initializing journey...')}
        >
          <div className="flex items-center gap-3">
             <Play className="w-4 h-4 fill-current" />
             <span>Initialize</span>
          </div>
          
          {/* Dashboard Corner Accents */}
          <div className="absolute top-[-2px] left-[-2px] w-2 h-2 border-t-2 border-l-2 border-[#ff7d25]" />
          <div className="absolute top-[-2px] right-[-2px] w-2 h-2 border-t-2 border-r-2 border-[#ff7d25]" />
          <div className="absolute bottom-[-2px] left-[-2px] w-2 h-2 border-b-2 border-l-2 border-[#ff7d25]" />
          <div className="absolute bottom-[-2px] right-[-2px] w-2 h-2 border-b-2 border-r-2 border-[#ff7d25]" />
        </button>
        
        {/* Right Dash */}
        <div className="w-8 h-[2px] bg-[#ff7d25]/60"></div>
      </div>
    </div>
  );
};

export default ParallaxTitle;