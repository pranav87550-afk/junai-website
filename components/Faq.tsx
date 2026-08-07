import Reveal from './Reveal';
import { faqs } from '@/lib/site-config';

export default function Faq() {
  return (
    <section id="faq" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-500">FAQ</p>
          <h2 className="mt-3 font-display text-3xl text-chrome-100 sm:text-4xl">Common questions</h2>
        </Reveal>

        <div className="mt-12 divide-y divide-hairline border-y border-hairline">
          {faqs.map((item, i) => (
            <details key={item.question} className="group py-5" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base text-chrome-100 marker:content-none">
                {item.question}
                <span className="shrink-0 font-mono text-lg text-chrome-700 transition-transform group-open:rotate-45 group-open:text-signal-400">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-chrome-500">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
