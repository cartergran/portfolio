import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  sidebar?: ReactNode;
  topbar?: ReactNode;
}

export function PageContainer({ children, sidebar, topbar }: PageContainerProps) {
  return (
    <>
      {topbar && <div className="block md:hidden">{topbar}</div>}
      <div className="flex min-h-screen">
        {sidebar && (
          <aside className="hidden md:block w-1/3 shrink-0">
            {sidebar}
          </aside>
        )}
        <main className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 max-w-3xl">
          {children}
        </main>
      </div>
    </>
  );
}
