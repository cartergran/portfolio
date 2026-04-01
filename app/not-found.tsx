import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-gray-500">
          The page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link
          href="/"
          className={cn(
            'inline-block rounded',
            'px-6 py-2',
            'bg-blue-600 text-white',
            'transition-colors hover:bg-blue-700',
          )}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
