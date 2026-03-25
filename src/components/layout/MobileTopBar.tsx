import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NAV_SECTIONS, NAV_SECTION_IDS } from '../../app/theme';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const SHORT_LABELS: Record<string, string> = {
  about: 'About',
  experience: 'Exp.',
  projects: 'Projects',
};

export function MobileTopBar() {
  const activeSection = useActiveSection(NAV_SECTION_IDS);
  const scrollToSection = useScrollToSection(NAV_SECTION_IDS);

  return (
    <Box
      component="nav"
      aria-label="Section navigation"
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'sticky',
        top: 0,
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        bgcolor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: 1,
        borderColor: 'divider',
        zIndex: 'appBar',
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontWeight: 700, color: 'text.primary' }}
      >
        Carter
      </Typography>

      <Box sx={{ display: 'flex', gap: 0.5 }}>
        {NAV_SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <Button
              key={section.id}
              size="small"
              onClick={() => scrollToSection(section.id)}
              aria-current={isActive ? 'true' : undefined}
              sx={{
                minWidth: 'auto',
                px: 1,
                color: isActive ? 'secondary.main' : 'text.secondary',
                fontWeight: isActive ? 600 : 400,
                fontSize: '0.8125rem',
                '&:hover': { color: 'text.primary' },
              }}
            >
              {SHORT_LABELS[section.id] ?? section.label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
}
