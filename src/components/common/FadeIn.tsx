import type { ElementType, ReactNode } from 'react';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import { useInView } from '../../hooks/useInView';

interface FadeInProps {
  children: ReactNode;
  threshold?: number;
  component?: ElementType;
  id?: string;
  'aria-labelledby'?: string;
  sx?: SxProps<Theme>;
}

const fadeSx = (inView: boolean): Record<string, unknown> => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'none' : 'translateY(24px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  '@media (prefers-reduced-motion: reduce)': {
    opacity: 1,
    transform: 'none',
    transition: 'none',
  },
});

export function FadeIn({
  children,
  threshold = 0.05,
  component = 'div',
  id,
  'aria-labelledby': ariaLabelledBy,
  sx,
}: FadeInProps) {
  const { ref, inView } = useInView({ threshold });

  return (
    <Box
      ref={ref}
      component={component}
      id={id}
      aria-labelledby={ariaLabelledBy}
      sx={{ ...fadeSx(inView), ...sx }}
    >
      {children}
    </Box>
  );
}
