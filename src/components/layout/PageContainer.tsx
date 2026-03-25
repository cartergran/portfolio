import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { ContainerProps } from '@mui/material/Container';

interface PageContainerProps {
  children: ReactNode;
  maxWidth?: ContainerProps['maxWidth'];
  disableGutters?: boolean;
}

export function PageContainer({
  children,
  maxWidth = 'lg',
  disableGutters = false,
}: PageContainerProps) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth={maxWidth} disableGutters={disableGutters}>
        {children}
      </Container>
    </Box>
  );
}
