import Hero from '@/components/Hero';
import Features from '@/components/Features';
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
      <Workflow />
      <Roadmap />
      <GithubSection />
      <Community />
      <Faq />
    </>
  );
}
