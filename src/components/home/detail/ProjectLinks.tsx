import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import LinkIcon from '@mui/icons-material/Link';
import type { ProjectLink } from '../../../types/project';

const ICON_MAP = {
  demo: LaunchIcon,
  repo: GitHubIcon,
  article: ArticleIcon,
  other: LinkIcon,
} as const;

interface ProjectLinksProps {
  links: readonly ProjectLink[];
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  if (links.length === 0) return null;

  return (
    <Box sx={{ mb: { xs: 3, sm: 4 } }}>
      <Typography
        variant="overline"
        color="text.secondary"
        sx={{ display: 'block', mb: 1.5, letterSpacing: '0.1em' }}
      >
        Links
      </Typography>
      <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
        {links.map((link) => {
          const Icon = ICON_MAP[link.kind];
          return (
            <Button
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="secondary"
              size="small"
              startIcon={<Icon />}
              sx={{
                fontWeight: 600,
                transition: 'background-color 0.2s ease, color 0.2s ease',
                '&:hover': {
                  bgcolor: 'secondary.main',
                  color: 'secondary.contrastText',
                },
                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',
                },
              }}
            >
              {link.label}
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
}
