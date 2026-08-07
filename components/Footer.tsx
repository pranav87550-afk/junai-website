import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon, WhatsappIcon, InstagramIcon, MailIcon } from './Icons';
import { socialConfig, contactConfig } from '@/lib/site-config';

function SocialLink({
  href,
  label,
  icon: Icon
}: {
  href: string;
  label: string;
  icon?: (props: { className?: string }) => JSX.Element;
}) {
  if (!href) {
    return (
      <span className="flex items-center gap-2 text-sm text-chrome-700">
        {Icon && <Icon className="h-4 w-4" />}
        {label} — coming soon
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-sm text-chrome-300 hover:text-signal-400"
    >
      {Icon && <Icon className="h-4 w-4" />}
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image src="/images/jun-bot.png" alt="" width={26} height={26} className="h-6 w-6 object-contain" />
              <span className="font-display text-base tracking-wide text-chrome-100">
                JUN<span className="text-signal-500">AI</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-chrome-500">
              An AI assistant designed to understand intent, retrieve knowledge, interact with your device, and
              learn supported workflows.
            </p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-chrome-700">Product</p>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/#features" className="text-sm text-chrome-300 hover:text-signal-400">Features</Link></li>
              <li><Link href="/download" className="text-sm text-chrome-300 hover:text-signal-400">Download</Link></li>
              <li><Link href="/docs" className="text-sm text-chrome-300 hover:text-signal-400">Documentation</Link></li>
              <li><Link href="/about" className="text-sm text-chrome-300 hover:text-signal-400">About</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-chrome-700">Community</p>
            <ul className="mt-4 space-y-2.5">
              <li><SocialLink href={socialConfig.github} label="GitHub" icon={GithubIcon} /></li>
              <li><SocialLink href={socialConfig.whatsapp} label="WhatsApp" icon={WhatsappIcon} /></li>
              <li><SocialLink href={socialConfig.instagram} label="Instagram" icon={InstagramIcon} /></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-chrome-700">Support</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${contactConfig.supportEmail}?subject=${encodeURIComponent('JunAI Bug Report')}`}
                  className="btn-tactile flex items-center gap-2 text-sm text-chrome-300 hover:text-signal-400"
                >
                  <MailIcon className="h-4 w-4" />
                  Report a Bug
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-chrome-700">© {new Date().getFullYear()} JunAI. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-chrome-500 hover:text-chrome-100">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-chrome-500 hover:text-chrome-100">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
