import Reveal from './Reveal';
import { GithubIcon } from './Icons';
import { socialConfig } from '@/lib/site-config';

const items = [
  { key: 'github', label: 'GitHub', href: socialConfig.github },
  { key: 'whatsapp', label: 'WhatsApp Community', href: socialConfig.whatsapp },
  { key: 'instagram', label: 'Instagram', href: socialConfig.instagram },
  { key: 'x', label: 'X', href: socialConfig.x }
];

export default function Community() {
  return (
    <section className="relative bg-ink py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-500">Community</p>
          <h2 className="mt-3 font-display text-3xl text-chrome-100 sm:text-4xl">Follow along as it's built</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {items.map((item) =>
              item.href ? (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm text-chrome-200 transition-colors hover:border-signal-500/40 hover:text-signal-400"
                >
                  {item.key === 'github' && <GithubIcon className="h-4 w-4" />}
                  {item.label}
                </a>
              ) : (
                <span
                  key={item.key}
                  className="flex items-center gap-2 rounded-full border border-dashed border-hairline px-5 py-2.5 text-sm text-chrome-700"
                >
                  {item.label} — coming soon
                </span>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
