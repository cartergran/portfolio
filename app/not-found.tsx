import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-gray-500">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
