import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About',
  description: 'What JunAI is, why it exists, and where it is headed.'
};

const sections = [
  {
    heading: 'What JunAI is',
    body: "JunAI is an Android AI assistant built to do more than answer questions. It's designed to understand what you're asking for, pull in relevant knowledge, interact with your device's UI, and learn workflows you repeat so it can carry them out for you."
  },
  {
    heading: 'Why it exists',
    body: 'Most assistants stop at conversation. Getting something actually done — filling in a form, replaying a multi-step task, acting on what\'s on screen — usually still falls back to doing it by hand. JunAI is an attempt to close that gap on Android, where a single developer can iterate quickly and closely with real usage.'
  },
  {
    heading: 'The problem it tries to solve',
    body: 'Repetitive on-device tasks rarely have a good automation option unless you\'re willing to write scripts or rely on rigid, coordinate-based macro tools that break the moment a layout shifts. JunAI aims to make "show me once, then do it for me" a realistic pattern — matching UI elements by what they are, not just where they sit on screen.'
  },
  {
    heading: 'Major technologies and concepts',
    body: 'A hybrid on-device + online AI approach, an intent-understanding layer that separates conversation from commands, an accessibility-based device interaction layer, and a Learn & Replay engine for recording and replaying supported interactions.'
  }
];

const implemented = [
  'Conversational AI assistant',
  'Intent understanding (conversation vs. command)',
  'Device interaction for supported on-screen actions',
  'Learn & Replay macro recording and playback',
  'Opt-in, per-app passive screen observation'
];

const planned = [
  'Deeper Knowledge / RAG retrieval',
  'Expanded on-device model coverage',
  'Broader gesture and interaction capture types',
  'Public release and wider onboarding'
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Project"
        title="About JunAI"
        description="An honest look at what's built, what's in progress, and what's still just a plan."
      />

      <section className="relative bg-void pb-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="space-y-12">
            {sections.map((s) => (
              <Reveal key={s.heading}>
                <h2 className="font-display text-xl text-chrome-100">{s.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-chrome-400">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-16 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-hairline bg-panel/40 p-6">
                <p className="font-mono text-[10px] uppercase tracking-wider text-signal-400">
                  Currently implemented
                </p>
                <ul className="mt-4 space-y-2.5">
                  {implemented.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-chrome-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-hairline bg-panel/40 p-6">
                <p className="font-mono text-[10px] uppercase tracking-wider text-chrome-500">
                  Planned / experimental
                </p>
                <ul className="mt-4 space-y-2.5">
                  {planned.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-chrome-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-chrome-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
