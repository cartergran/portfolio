import Box from '@mui/material/Box';
import { SideNav } from '../components/layout/SideNav';
import { MobileTopBar } from '../components/layout/MobileTopBar';
import { Footer } from '../components/layout/Footer';
import { AppRoutes } from './routes';
import { SIDE_NAV_WIDTH } from './theme';

export function App() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <SideNav />

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          ml: { xs: 0, md: `${SIDE_NAV_WIDTH}px` },
          minHeight: '100vh',
        }}
      >
        <MobileTopBar />
        <AppRoutes />
        <Footer />
      </Box>
    </Box>
  );
}
