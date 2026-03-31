export function Footer() {
  return (
    <footer>
      <hr className="border-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Carter Gran
          </p>
          <p className="text-sm text-text-muted">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
