export interface Position {
  x: number;
  y: number;
}

export interface Star {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  friction: number;
  ease: number;
}

export interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  size: number;
  color: string;
  speed: number;
  active: boolean;
}