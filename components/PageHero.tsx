import { ReactNode } from 'react';

export default function PageHero({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-void pb-16 pt-32 sm:pt-40">
      <div className="absolute inset-0 bg-grid bg-grid-cell opacity-[0.3]" />
      <div className="absolute inset-0 bg-signal-glow opacity-60" />
      <div className="relative mx-auto max-w-4xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-500">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl text-chrome-100 sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-chrome-400">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
