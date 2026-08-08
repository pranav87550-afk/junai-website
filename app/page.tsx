import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import Workflow from '@/components/Workflow';
import Roadmap from '@/components/Roadmap';
import GithubSection from '@/components/GithubSection';
import Community from '@/components/Community';
import Faq from '@/components/Faq';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <Workflow />
      <Roadmap />
      <GithubSection />
      <Community />
      <Faq />
    </>
  );
}
