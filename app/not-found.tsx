import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-void px-5 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-500">404</p>
      <h1 className="mt-3 font-display text-3xl text-chrome-100">This screen isn&apos;t in the graph</h1>
      <p className="mt-3 max-w-sm text-sm text-chrome-500">
        The page you&apos;re looking for doesn&apos;t exist, or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-signal-500 px-6 py-3 font-display text-sm text-white transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </section>
  );
}
