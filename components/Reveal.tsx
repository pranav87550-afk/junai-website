'use client';

import { useEffect, useRef, ReactNode } from 'react';

export default function Reveal({
  children,
  delay = 0,
  className = ''
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.classList.add('is-visible');
      return;
    }

    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggling both ways (instead of unobserving after the first reveal)
          // means the element also "un-reveals" smoothly when it scrolls
          // back out of view, in either direction.
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
