export function Footer() {
  return (
    <footer>
      <hr className="border-divider" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-2 py-6 sm:flex-row sm:py-8">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Carter Gran
          </p>
          <p className="text-text-muted text-sm">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
