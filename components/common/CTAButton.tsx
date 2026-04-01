'use client';

import type { ReactNode, MouseEventHandler } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'contained' | 'outlined' | 'text';
type Size = 'small' | 'medium' | 'large';

interface CTAButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  size?: Size;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  ariaExpanded?: boolean;
}

const variantClasses: Record<Variant, string> = {
  contained: 'bg-primary text-white hover:bg-primary/90 border border-primary',
  outlined:
    'bg-transparent text-text border border-divider hover:border-primary hover:text-primary',
  text: 'bg-transparent text-text hover:text-primary border border-transparent',
};

const sizeClasses: Record<Size, string> = {
  small: 'text-sm px-3 py-1.5',
  medium: 'text-sm px-5 py-2',
  large: 'text-base px-6 py-2.5',
};

export function CTAButton({
  to,
  href,
  variant = 'contained',
  size = 'medium',
  children,
  startIcon,
  endIcon,
  fullWidth,
  disabled,
  onClick,
  className = '',
  ariaExpanded,
}: CTAButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2',
    'font-semibold rounded-lg',
    'transition-colors duration-200',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed',
    className,
  );

  if (to) {
    return (
      <Link
        href={to}
        className={base}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {startIcon}
        {children}
        {endIcon}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {startIcon}
        {children}
        {endIcon}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      aria-expanded={ariaExpanded}
      className={base}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
}
