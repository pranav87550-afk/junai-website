import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms for using JunAI.'
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="relative bg-void pb-24">
        <div className="mx-auto max-w-2xl px-5">
          <div className="rounded-xl border border-dashed border-hairline bg-panel/30 p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-amber-400">Placeholder</p>
            <p className="mt-3 text-sm leading-relaxed text-chrome-400">
              This page is a placeholder. Replace this content with real terms of use before the public release.
              If JunAI uses any open-source licenses or third-party components, list attributions here too.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
