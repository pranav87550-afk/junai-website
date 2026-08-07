import Reveal from './Reveal';
import { roadmap, type RoadmapStatus } from '@/lib/site-config';

const statusStyles: Record<RoadmapStatus, string> = {
  done: 'text-signal-400 border-signal-500/40',
  'in-progress': 'text-amber-400 border-amber-500/40',
  planned: 'text-chrome-500 border-hairline'
};

const statusLabel: Record<RoadmapStatus, string> = {
  done: 'Done',
  'in-progress': 'In progress',
  planned: 'Planned'
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-500">Roadmap</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl text-chrome-100 sm:text-4xl">
            Built in the open, phase by phase
          </h2>
        </Reveal>

        <div className="mt-14 space-y-3">
          {roadmap.map((item, i) => (
            <Reveal key={item.phase} delay={i * 50}>
              <div className="group flex items-start gap-5 rounded-xl border border-hairline bg-panel/30 p-5 transition-colors hover:border-signal-500/25">
                <span className="font-mono text-sm text-chrome-700">{item.phase}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-base text-chrome-100">{item.title}</h3>
                    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusStyles[item.status]}`}>
                      {statusLabel[item.status]}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-chrome-500">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
