'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { faqs } from '@/lib/site-config';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-500">FAQ</p>
          <h2 className="mt-3 font-display text-3xl text-chrome-100 sm:text-4xl">Common questions</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 divide-y divide-hairline border-y border-hairline">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.question} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left font-display text-base text-chrome-100"
                  >
                    {item.question}
                    <span
                      className={`shrink-0 font-mono text-lg text-chrome-700 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 text-signal-400' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-chrome-500">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
