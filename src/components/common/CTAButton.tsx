import type { ReactNode, MouseEventHandler } from "react";
import Button from "@mui/material/Button";
import type { ButtonOwnProps } from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

interface CTAButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: ButtonOwnProps["variant"];
  color?: ButtonOwnProps["color"];
  size?: ButtonOwnProps["size"];
  startIcon?: ButtonOwnProps["startIcon"];
  endIcon?: ButtonOwnProps["endIcon"];
  sx?: ButtonOwnProps["sx"];
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

export function CTAButton({
  to,
  href,
  variant = "contained",
  children,
  color,
  size,
  startIcon,
  endIcon,
  sx,
  fullWidth,
  onClick,
}: CTAButtonProps) {
  const shared = { variant, color, size, startIcon, endIcon, sx, fullWidth };

  if (to) {
    return (
      <Button component={RouterLink} to={to} onClick={onClick} {...shared}>
        {children}
      </Button>
    );
  }

  if (href) {
    return (
      <Button
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        {...shared}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button onClick={onClick} {...shared}>
      {children}
    </Button>
  );
}
