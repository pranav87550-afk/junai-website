import Image from 'next/image';
import Link from 'next/link';
import AnimatedBackground from './AnimatedBackground';
import { GithubIcon, DownloadIcon } from './Icons';
import { githubConfig, siteConfig } from '@/lib/site-config';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-void pb-20 pt-32 sm:pt-40">
      <div className="absolute inset-0 bg-grid bg-grid-cell opacity-[0.35]" />
      <div className="absolute inset-0 bg-signal-glow" />
      <AnimatedBackground />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-panel/60 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-signal-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-chrome-500">
              System status — active development
            </span>
          </div>

          <h1 className="mt-7 font-display text-4xl leading-[1.08] tracking-tight text-chrome-100 sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-chrome-300 sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <Link
              href="/download"
              className="border-glow-signal group flex items-center justify-center gap-2 rounded-lg bg-signal-500 px-6 py-3.5 font-display text-sm tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-signal-600"
            >
              <DownloadIcon className="h-4 w-4" />
              Download JunAI
            </Link>
            <a
              href={githubConfig.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-hairline px-6 py-3.5 font-display text-sm tracking-wide text-chrome-100 transition-colors hover:border-chrome-500/60"
            >
              <GithubIcon />
              View on GitHub
            </a>
          </div>

          <p className="mt-6 font-mono text-xs text-chrome-700">
            Android · On-device + online hybrid AI · Open development
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 rounded-full bg-signal-500/10 blur-3xl" />
          <div className="relative animate-drift">
            <Image
              src="/images/jun-bot.png"
              alt="Jun, the JunAI assistant character — a rounded chrome bot head with a red accent"
              width={640}
              height={640}
              priority
              className="relative z-10 mx-auto h-auto w-full max-w-[340px] drop-shadow-[0_0_60px_rgba(224,32,46,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
