import FeatureCard from './FeatureCard';
import Reveal from './Reveal';
import { features } from '@/lib/site-config';

export default function Features() {
  return (
    <section id="features" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-500">Capabilities</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl text-chrome-100 sm:text-4xl">
            What JunAI does today — and where it&apos;s headed
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.id} delay={i * 60}>
              <FeatureCard feature={f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
