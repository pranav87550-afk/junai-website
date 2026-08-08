import Image from 'next/image';
import Reveal from './Reveal';
import { appScreenshots } from '@/lib/site-config';

export default function Screenshots() {
  if (appScreenshots.length === 0) return null;

  return (
    <section className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-500">In the app</p>
          <h2 className="mt-3 font-display text-3xl text-chrome-100 sm:text-4xl">See JunAI in action</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {appScreenshots.map((src, i) => (
            <Reveal key={src} delay={i * 60}>
              <div className="overflow-hidden rounded-2xl border border-hairline">
                <Image
                  src={src}
                  alt={`JunAI app screenshot ${i + 1}`}
                  width={480}
                  height={960}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
