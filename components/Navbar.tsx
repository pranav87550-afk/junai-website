'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon, CloseIcon, GithubIcon } from './Icons';
import { githubConfig } from '@/lib/site-config';

const links = [
  { href: '/#features', label: 'Features' },
  { href: '/download', label: 'Download' },
  { href: '/docs', label: 'Docs' },
  { href: '/#roadmap', label: 'Roadmap' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass-panel border-b' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/images/jun-bot.png" alt="" width={30} height={30} className="h-7 w-7 object-contain" priority />
          <span className="font-display text-lg tracking-wide text-chrome-100">
            JUN<span className="text-signal-500">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm text-chrome-300 transition-colors hover:text-chrome-100"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={githubConfig.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-sm text-chrome-100 transition-colors hover:border-signal-500/50 hover:text-signal-400"
          >
            <GithubIcon />
            GitHub
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center text-chrome-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0">
          <nav className="glass-panel flex flex-col gap-1 border-t border-hairline px-5 pb-6 pt-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-chrome-200 transition-colors hover:bg-white/5 hover:text-chrome-100"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={githubConfig.repoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center gap-2 rounded-lg border border-hairline px-3 py-3 text-base text-chrome-100"
            >
              <GithubIcon />
              View on GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
