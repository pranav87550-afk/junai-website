import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { docSections } from '@/lib/site-config';
import { docsContent } from '@/lib/docs-content';

export function generateStaticParams() {
  return docSections.map((section) => ({ slug: section.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const section = docSections.find((s) => s.slug === params.slug);
  if (!section) return {};
  return { title: section.title, description: section.summary };
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const section = docSections.find((s) => s.slug === params.slug);
  const content = docsContent[params.slug];

  if (!section || !content) {
    notFound();
  }

  return (
    <article>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-500">Documentation</p>
      <h1 className="mt-3 font-display text-3xl text-chrome-100">{content.title}</h1>
      <div className="docs-prose mt-8 max-w-2xl">{content.body}</div>
    </article>
  );
}
