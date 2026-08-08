import {
  DownloadIcon,
  GithubIcon,
  AndroidBotIcon,
  TagIcon,
  FileIcon,
  ShieldIcon,
  ShieldCheckIcon,
  CalendarIcon
} from './Icons';
import { releaseConfig } from '@/lib/site-config';

function Stat({
  label,
  value,
  icon: Icon
}: {
  label: string;
  value: string;
  icon: (props: { className?: string }) => JSX.Element;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-hairline bg-void/60 p-4">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-wider text-chrome-700">{label}</p>
        <p className="mt-1 break-words font-display text-base text-chrome-100">{value}</p>
      </div>
    </div>
  );
}

export default function DownloadCard() {
  const hasDirectLink = Boolean(releaseConfig.apkDownloadUrl);

  return (
    <div className="border-glow-signal glass-panel overflow-hidden rounded-2xl">
      <div className="border-b border-hairline p-8 sm:p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-2 w-2 animate-pulse-slow rounded-full bg-signal-500" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-chrome-500">Latest release</p>
            </div>
            <h2 className="mt-4 font-display text-2xl text-chrome-100 sm:text-3xl">Download JunAI for Android</h2>
          </div>
          <AndroidBotIcon className="hidden shrink-0 sm:block" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Version" value={releaseConfig.version} icon={TagIcon} />
          <Stat label="APK size" value={releaseConfig.apkSizeMb} icon={FileIcon} />
          <Stat label="Requires" value={releaseConfig.minAndroidVersion} icon={ShieldIcon} />
          <Stat label="Released" value={releaseConfig.releaseDate} icon={CalendarIcon} />
        </div>

        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
          {hasDirectLink ? (
            <a
              href={releaseConfig.apkDownloadUrl}
              className="btn-tactile flex items-center justify-center gap-2 rounded-lg bg-signal-500 px-6 py-3.5 font-display text-sm text-white hover:bg-signal-600"
            >
              <DownloadIcon className="h-4 w-4" />
              Download APK
            </a>
          ) : (
            <span className="flex items-center justify-center gap-2 rounded-lg border border-dashed border-hairline px-6 py-3.5 font-display text-sm text-chrome-700">
              <DownloadIcon className="h-4 w-4" />
              APK link not published yet
            </span>
          )}
          <a
            href={releaseConfig.githubReleaseUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-tactile flex items-center justify-center gap-2 rounded-lg border border-hairline px-6 py-3.5 font-display text-sm text-chrome-100 hover:border-chrome-500/60"
          >
            <GithubIcon />
            View on GitHub Releases
          </a>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-chrome-700">
          <ShieldCheckIcon className="h-4 w-4 text-signal-500" />
          Verified &amp; safe to install
        </div>

        {releaseConfig.sha256 ? (
          <div className="mt-6">
            <p className="font-mono text-[10px] uppercase tracking-wider text-chrome-700">SHA-256 checksum</p>
            <p className="mt-1.5 break-all rounded-lg border border-hairline bg-void/60 p-3 font-mono text-xs text-chrome-300">
              {releaseConfig.sha256}
            </p>
          </div>
        ) : null}
      </div>

      <div className="grid gap-8 p-8 sm:grid-cols-2 sm:p-10">
        <div>
          <h3 className="font-display text-sm uppercase tracking-wider text-chrome-500">Changelog</h3>
          <ul className="mt-4 space-y-2.5">
            {releaseConfig.changelog.map((line) => (
              <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-chrome-300">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-500" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wider text-chrome-500">Installation</h3>
          <ol className="mt-4 space-y-2.5 font-body text-sm leading-relaxed text-chrome-300">
            <li>1. Download the APK using the button above, or from GitHub Releases.</li>
            <li>2. On your device, allow installs from this source when prompted.</li>
            <li>3. Open the downloaded file and tap Install.</li>
            <li>4. Launch JunAI and complete first-run setup.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
