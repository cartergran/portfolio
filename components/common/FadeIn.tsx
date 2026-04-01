'use client';

import { useInView } from '@/hooks/useInView';
import type { ElementType, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: string;
  threshold?: number;
  component?: ElementType;
  id?: string;
  'aria-labelledby'?: string;
}

export function FadeIn({
  children,
  className = '',
  delay = '',
  threshold = 0.05,
  component: Component = 'div',
  id,
  'aria-labelledby': ariaLabelledBy,
}: FadeInProps) {
  const { ref, inView } = useInView({ threshold });

  return (
    <Component
      ref={ref}
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`transition-all duration-500 ${
        inView ? 'animate-fade-in-up opacity-100' : 'translate-y-4 opacity-0'
      } ${delay} ${className}`}
    >
      {children}
    </Component>
  );
}
