import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

interface SectionProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export function Section({ children, sx }: SectionProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, sm: 6 },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
