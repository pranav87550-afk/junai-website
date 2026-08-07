import Reveal from './Reveal';
import { GithubIcon, ChevronRightIcon } from './Icons';
import { githubConfig } from '@/lib/site-config';

export default function GithubSection() {
  return (
    <section className="relative bg-void py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="border-glow-signal glass-panel flex flex-col items-start gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-hairline bg-ink text-chrome-100">
                <GithubIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-chrome-100">{githubConfig.repoName}</h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-chrome-500">
                  {githubConfig.description}
                </p>
              </div>
            </div>

            <a
              href={githubConfig.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-tactile flex shrink-0 items-center gap-1.5 rounded-lg bg-chrome-100 px-5 py-3 font-display text-sm text-void"
            >
              View repository
              <ChevronRightIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
