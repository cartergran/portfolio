import Box from '@mui/material/Box';
import { useMousePosition } from '../../hooks/useMousePosition';

const GRADIENT_RADIUS = 450;
const GRADIENT_COLOR = 'rgba(74, 108, 247, 0.23)';

export function MouseGradientOverlay() {
  const { x, y } = useMousePosition();

  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        background: `radial-gradient(${GRADIENT_RADIUS}px circle at ${x}px ${y}px, ${GRADIENT_COLOR} 0%, transparent 70%)`,
      }}
    />
  );
}
