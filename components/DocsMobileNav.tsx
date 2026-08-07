'use client';

import { usePathname, useRouter } from 'next/navigation';
import { docSections } from '@/lib/site-config';

export default function DocsMobileNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="lg:hidden">
      <label htmlFor="docs-nav" className="sr-only">
        Jump to documentation section
      </label>
      <select
        id="docs-nav"
        value={pathname}
        onChange={(e) => router.push(e.target.value)}
        className="w-full rounded-lg border border-hairline bg-panel px-4 py-3 font-body text-sm text-chrome-100"
      >
        <option value="/docs">Overview</option>
        {docSections.map((section) => (
          <option key={section.slug} value={`/docs/${section.slug}`}>
            {section.title}
          </option>
        ))}
      </select>
    </div>
  );
}
