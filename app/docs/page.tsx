import type { Metadata } from 'next';
import Link from 'next/link';
import { docSections } from '@/lib/site-config';
import { ChevronRightIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Guides for getting started with, understanding, and troubleshooting JunAI.'
};

export default function DocsIndexPage() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-500">Documentation</p>
      <h1 className="mt-3 font-display text-3xl text-chrome-100 sm:text-4xl">JunAI docs</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-chrome-400">
        Everything you need to install, use, and understand how JunAI is put together.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {docSections.map((section) => (
          <Link
            key={section.slug}
            href={`/docs/${section.slug}`}
            className="group flex items-center justify-between rounded-xl border border-hairline bg-panel/40 p-5 transition-colors hover:border-signal-500/30"
          >
            <div>
              <h2 className="font-display text-base text-chrome-100">{section.title}</h2>
              <p className="mt-1.5 text-sm text-chrome-500">{section.summary}</p>
            </div>
            <ChevronRightIcon className="h-4 w-4 shrink-0 text-chrome-700 transition-colors group-hover:text-signal-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}
