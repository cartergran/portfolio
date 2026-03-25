import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SIDE_NAV_WIDTH, NAV_SECTIONS } from '../../app/theme';
import { useActiveSection } from '../../hooks/useActiveSection';

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  window.history.replaceState(null, '', `#${id}`);
}

export function SideNav() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <Box
      component="nav"
      aria-label="Section navigation"
      sx={{
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        width: SIDE_NAV_WIDTH,
        height: '100vh',
        bgcolor: 'background.paper',
        borderRight: 1,
        borderColor: 'divider',
        zIndex: 'drawer',
      }}
    >
      {/* Condensed hero */}
      <Box sx={{ px: 3, pt: 3, pb: 2, flex: '0 0 auto' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
          Carter
        </Typography>
        <Typography variant="body2" sx={{ color: 'secondary.main' }}>
          Full-Stack Developer
        </Typography>
        <Stack direction="row" spacing={0.5} sx={{ mt: 1 }}>
          <IconButton
            size="small"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'text.primary' },
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'text.primary' },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>

      <Divider />

      {/* Top spacer */}
      <Box sx={{ flex: 1 }} />

      {/* Nav links */}
      <List sx={{ flex: '0 0 auto', px: 1 }}>
        {NAV_SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <ListItemButton
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              aria-current={isActive ? 'true' : undefined}
              sx={{
                borderLeft: '3px solid',
                borderColor: isActive ? 'secondary.main' : 'transparent',
                color: isActive ? 'text.primary' : 'text.secondary',
                borderRadius: 0,
                transition: 'color 0.2s ease, border-color 0.2s ease',
                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',
                },
                '&:hover': {
                  color: 'text.primary',
                  bgcolor: 'action.hover',
                },
              }}
            >
              <ListItemText
                primary={section.label}
                primaryTypographyProps={{
                  fontWeight: isActive ? 600 : 400,
                  variant: 'body2',
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      {/* Bottom spacer */}
      <Box sx={{ flex: 1 }} />
    </Box>
  );
}
