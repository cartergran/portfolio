import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import { TopNav } from '../components/layout/TopNav';
import { MobileNav } from '../components/layout/MobileNav';
import { Footer } from '../components/layout/Footer';
import { AppRoutes } from './routes';

export function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileMenuOpen = useCallback(() => {
    setMobileNavOpen(true);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <TopNav onMobileMenuOpen={handleMobileMenuOpen} />
      <MobileNav open={mobileNavOpen} onClose={handleMobileMenuClose} />
      <AppRoutes />
      <Footer />
    </Box>
  );
}
