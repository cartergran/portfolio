import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Stack spacing={1.5} sx={{ textAlign: align, mb: { xs: 4, sm: 6 } }}>
      <Typography variant="h3" component="h2">
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 560, mx: align === "center" ? "auto" : undefined }}
        >
          {subtitle}
        </Typography>
      )}
    </Stack>
  );
}
