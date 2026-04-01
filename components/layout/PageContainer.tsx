import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: ReactNode;
  sidebar?: ReactNode;
  topbar?: ReactNode;
}

export function PageContainer({
  children,
  sidebar,
  topbar,
}: PageContainerProps) {
  return (
    <>
      {topbar && <div className="block md:hidden">{topbar}</div>}
      <div className="flex min-h-screen">
        {sidebar && (
          <aside className="hidden w-1/3 shrink-0 md:block">{sidebar}</aside>
        )}
        <main
          className={cn(
            'min-w-0 flex-1',
            'px-8 sm:px-12 md:px-16',
            'py-4 sm:py-6 md:py-8',
          )}
        >
          {children}
        </main>
      </div>
    </>
  );
}
