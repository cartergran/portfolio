import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { ContainerProps } from "@mui/material/Container";

interface PageContainerProps {
  children: ReactNode;
  maxWidth?: ContainerProps["maxWidth"];
  disableGutters?: boolean;
}

export function PageContainer({
  children,
  maxWidth = "lg",
  disableGutters = false,
}: PageContainerProps) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container maxWidth={maxWidth} disableGutters={disableGutters}>
        {children}
      </Container>
    </Box>
  );
}
