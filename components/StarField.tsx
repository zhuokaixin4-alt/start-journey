import React, { useRef, useEffect, useCallback } from 'react';
import { Star, ShootingStar } from '../types';

interface StarFieldProps {
  mousePos: { x: number; y: number };
}

const StarField: React.FC<StarFieldProps> = ({ mousePos }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationFrameRef = useRef<number>(0);

  const STAR_COUNT = 300;

  const initStars = useCallback((width: number, height: number) => {
    const stars: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      const size = Math.random() * 2;
      // Stars closer (larger) appear to move faster
      const speedMultiplier = 0.2 + (size / 2) * 0.5;
      
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: 0,
        originY: 0,
        size: size,
        color: `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`,
        // Continuous flow velocity (drifting left)
        vx: -0.3 * speedMultiplier, 
        vy: 0,
        friction: 0,
        ease: 0,
      });
    }
    starsRef.current = stars;
  }, []);

  const spawnShootingStar = useCallback((width: number, height: number) => {
    // Start from top-right area mostly
    const isTopStart = Math.random() < 0.5;
    let startX, startY;
    
    // Randomize start position outside or near edge of screen
    if (isTopStart) {
        startX = width * 0.3 + Math.random() * width * 0.7; // Right side of top edge
        startY = -20;
    } else {
        startX = width + 20;
        startY = Math.random() * height * 0.6; // Top part of right edge
    }

    // Angle: diagonal down-left (approx 135 degrees / 2.35 radians)
    // Add some variation
    const angle = Math.PI * 0.75 + (Math.random() * 0.2 - 0.1); 
    const speed = 15 + Math.random() * 15; // Very fast

    shootingStarsRef.current.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: 150 + Math.random() * 200,
        size: 1 + Math.random() * 1.5,
        color: '#ffffff',
        speed: speed,
        active: true
    });
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Draw Background Stars
    starsRef.current.forEach((star) => {
      // Flow
      star.x += star.vx;
      star.y += star.vy;

      // Wrap
      if (star.x < 0) {
        star.x = canvas.width;
        star.y = Math.random() * canvas.height;
      }

      // Parallax
      const moveX = (mousePos.x - window.innerWidth / 2) * 0.02 * star.size;
      const moveY = (mousePos.y - window.innerHeight / 2) * 0.02 * star.size;

      ctx.beginPath();
      ctx.arc(star.x + moveX, star.y + moveY, star.size, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.fill();
    });

    // 2. Manage Shooting Stars
    // Chance to spawn a new one (Increased frequency from 0.008 to 0.03)
    if (Math.random() < 0.03) { 
        spawnShootingStar(canvas.width, canvas.height);
    }

    // Update and Draw Shooting Stars
    for (let i = shootingStarsRef.current.length - 1; i >= 0; i--) {
        const s = shootingStarsRef.current[i];
        
        s.x += s.vx;
        s.y += s.vy;

        // Calculate tail position
        const tailX = s.x - (s.vx / s.speed) * s.len;
        const tailY = s.y - (s.vy / s.speed) * s.len;

        // Remove if out of bounds (far out)
        if (s.x < -s.len || s.y > canvas.height + s.len) {
            shootingStarsRef.current.splice(i, 1);
            continue;
        }

        // Draw Trail (Gradient Fade)
        const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = s.size;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Optional: Head glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
    }

    animationFrameRef.current = requestAnimationFrame(draw);
  }, [mousePos, spawnShootingStar]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(window.innerWidth, window.innerHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [draw, initStars]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none mix-blend-screen"
    />
  );
};

export default StarField;