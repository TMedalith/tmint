import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-serif text-8xl text-white/5 mb-6">404</p>
        <h1 className="font-serif text-2xl mb-2">Page not found</h1>
        <p className="text-text-muted text-sm mb-8">
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="text-sm text-text-secondary hover:text-accent transition-colors"
        >
          ← Go home
        </Link>
      </div>
    </div>
  );
}
