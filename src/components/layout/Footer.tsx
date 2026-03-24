import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export function Footer() {
  return (
    <Box component="footer">
      <Divider />
      <Container maxWidth="lg">
        <Box
          sx={{
            py: { xs: 3, sm: 4 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Portfolio
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Built with React &amp; Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
