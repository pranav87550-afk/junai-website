import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import DownloadCard from '@/components/DownloadCard';

export const metadata: Metadata = {
  title: 'Download',
  description: 'Get the latest JunAI APK, release notes, and installation instructions.'
};

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download"
        title="Get JunAI"
        description="Grab the latest build directly, or from the GitHub release page. Details below are kept in sync with each release."
      />
      <section className="relative bg-void pb-28">
        <div className="mx-auto max-w-4xl px-5">
          <DownloadCard />
        </div>
      </section>
    </>
  );
}
