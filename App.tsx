import React, { useState } from 'react';
import StarField from './components/StarField';
import Campfire from './components/Campfire';
import Landscape from './components/Landscape';
import GalaxyBackground from './components/GalaxyBackground';
import ParallaxTitle from './components/ParallaxTitle';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-[#0b1e26] text-white"
      onMouseMove={handleMouseMove}
    >
      {/* 1. Deep Space Background */}
      <GalaxyBackground />

      {/* 2. Star Particles */}
      <StarField mousePos={mousePos} />
      
      {/* 3. Floating Title (Middle Ground) */}
      <ParallaxTitle mousePos={mousePos} />

      {/* 4. Foreground Landscape */}
      <Landscape />
      
      {/* 5. Campfire (Foreground Focus) */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-20">
         <Campfire />
      </div>

      {/* 6. Atmospheric Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] pointer-events-none opacity-40" />
    </div>
  );
};

export default App;