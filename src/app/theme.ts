import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const SIDE_NAV_WIDTH = '33.333vw';

export interface NavSection {
  label: string;
  id: string;
}

export const NAV_SECTIONS: readonly NavSection[] = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
] as const;

export const NAV_SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a1a2e',
      light: '#30305a',
      dark: '#0f0f1a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4a6cf7',
      light: '#7b93f9',
      dark: '#2a4cd4',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a2e',
      secondary: '#5a5a72',
    },
    divider: 'rgba(26, 26, 46, 0.08)',
  },

  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.005em',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      lineHeight: 1.7,
      letterSpacing: '0.005em',
    },
    body2: {
      lineHeight: 1.6,
      letterSpacing: '0.005em',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },

  shape: {
    borderRadius: 10,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1100,
      xl: 1400,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          '@media (prefers-reduced-motion: reduce)': {
            scrollBehavior: 'auto',
          },
        },
        body: {
          overflowX: 'hidden',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 20px',
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
