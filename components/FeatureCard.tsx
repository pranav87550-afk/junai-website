import { iconFor } from './Icons';
import type { Feature, FeatureStatus } from '@/lib/site-config';

const statusLabel: Record<FeatureStatus, string> = {
  live: 'Live',
  'in-progress': 'In progress',
  planned: 'Planned'
};

const statusDot: Record<FeatureStatus, string> = {
  live: 'bg-signal-500',
  'in-progress': 'bg-amber-500',
  planned: 'bg-chrome-700'
};

export default function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = iconFor(feature.icon);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-hairline bg-panel/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-500/30 hover:bg-panel/70">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-signal-500/0 blur-2xl transition-colors duration-300 group-hover:bg-signal-500/15" />

      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-void text-signal-400">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-hairline px-2.5 py-1">
          <span className={`h-1.5 w-1.5 rounded-full ${statusDot[feature.status]}`} />
          <span className="font-mono text-[10px] uppercase tracking-wider text-chrome-500">
            {statusLabel[feature.status]}
          </span>
        </div>
      </div>

      <h3 className="mt-5 font-display text-lg text-chrome-100">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-chrome-500">{feature.description}</p>
    </div>
  );
}
