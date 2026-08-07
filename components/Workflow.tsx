import Reveal from './Reveal';
import { workflowSteps } from '@/lib/site-config';

export default function Workflow() {
  return (
    <section className="relative overflow-hidden bg-void py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid bg-grid-cell opacity-[0.25]" />
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-amber-glow opacity-40" />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-500">How it works</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl text-chrome-100 sm:text-4xl">
            From a request to a result
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line for desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-signal-500/40 to-transparent lg:block"
          />

          <ol className="grid gap-x-6 gap-y-10 lg:grid-cols-6">
            {workflowSteps.map((step, i) => (
              <Reveal key={step.id} delay={i * 90}>
                <li className="relative flex flex-col items-start lg:items-center lg:text-center">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-signal-500/40 bg-ink font-mono text-sm text-signal-400 shadow-[0_0_18px_rgba(224,32,46,0.25)]">
                    {step.id}
                  </div>
                  <h3 className="mt-4 font-display text-base text-chrome-100">{step.title}</h3>
                  <p className="mt-1.5 max-w-[16rem] text-sm leading-relaxed text-chrome-500">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
