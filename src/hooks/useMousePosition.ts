import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

const OFF_SCREEN: MousePosition = { x: -9999, y: -9999 };

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>(OFF_SCREEN);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const handleLeave = () => setPosition(OFF_SCREEN);

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return position;
}
