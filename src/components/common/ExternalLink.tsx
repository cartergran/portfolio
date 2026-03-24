import Link from '@mui/material/Link';
import type { LinkProps } from '@mui/material/Link';

type ExternalLinkProps = Omit<LinkProps<'a'>, 'target' | 'rel' | 'component'>;

export function ExternalLink({ children, sx, ...rest }: ExternalLinkProps) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
