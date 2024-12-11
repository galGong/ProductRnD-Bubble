import React, { useEffect, useRef } from 'react';
import { useStarAnimation } from '../hooks/useStarAnimation';

export const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useStarAnimation(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: 'black' }}
    />
  );
};