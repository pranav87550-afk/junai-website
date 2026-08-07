import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How JunAI handles data and permissions.'
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="relative bg-void pb-24">
        <div className="mx-auto max-w-2xl px-5">
          <div className="rounded-xl border border-dashed border-hairline bg-panel/30 p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-amber-400">Placeholder</p>
            <p className="mt-3 text-sm leading-relaxed text-chrome-400">
              This page is a placeholder. Replace this content with a real privacy policy before the public
              release — it should cover what data JunAI accesses (including per-app screen reading permissions),
              what&apos;s processed on-device versus sent online, what&apos;s stored, and how a user can revoke access.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
