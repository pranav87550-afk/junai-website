'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docSections } from '@/lib/site-config';

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation" className="space-y-1">
      <Link
        href="/docs"
        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
          pathname === '/docs'
            ? 'bg-signal-500/10 text-signal-400'
            : 'text-chrome-400 hover:bg-white/5 hover:text-chrome-100'
        }`}
      >
        Overview
      </Link>
      {docSections.map((section) => {
        const href = `/docs/${section.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={section.slug}
            href={href}
            className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
              active ? 'bg-signal-500/10 text-signal-400' : 'text-chrome-400 hover:bg-white/5 hover:text-chrome-100'
            }`}
          >
            {section.title}
          </Link>
        );
      })}
    </nav>
  );
}
