'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { GridIcon, ScrollViewIcon } from './Icons';
import { appScreenshots } from '@/lib/site-config';

type ViewMode = 'grid' | 'scroll';

export default function Screenshots() {
  const [view, setView] = useState<ViewMode>('grid');

  if (appScreenshots.length === 0) return null;

  return (
    <section className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-500">In the app</p>
            <h2 className="mt-3 font-display text-3xl text-chrome-100 sm:text-4xl">See JunAI in action</h2>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-hairline bg-panel/60 p-1">
            <button
              type="button"
              onClick={() => setView('grid')}
              aria-pressed={view === 'grid'}
              aria-label="Grid view"
              className={`btn-tactile flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                view === 'grid' ? 'bg-signal-500 text-white' : 'text-chrome-500 hover:text-chrome-100'
              }`}
            >
              <GridIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setView('scroll')}
              aria-pressed={view === 'scroll'}
              aria-label="Scroll view"
              className={`btn-tactile flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                view === 'scroll' ? 'bg-signal-500 text-white' : 'text-chrome-500 hover:text-chrome-100'
              }`}
            >
              <ScrollViewIcon className="h-4 w-4" />
            </button>
          </div>
        </Reveal>

        {view === 'grid' ? (
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
        ) : (
          <Reveal delay={80}>
            <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {appScreenshots.map((src, i) => (
                <div
                  key={src}
                  className="shrink-0 snap-center overflow-hidden rounded-2xl border border-hairline"
                  style={{ width: 'min(72vw, 300px)' }}
                >
                  <Image
                    src={src}
                    alt={`JunAI app screenshot ${i + 1}`}
                    width={480}
                    height={960}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-chrome-700">
              Swipe to browse
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
