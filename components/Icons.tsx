import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const
};

export function BotIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 8V4" />
      <circle cx="12" cy="3" r="1" />
      <circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1.2" fill="currentColor" stroke="none" />
      <path d="M9 17.5c1 .7 5 .7 6 0" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function BrainIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4a3 3 0 0 0-3 3v.3A2.7 2.7 0 0 0 4 10v1a2.7 2.7 0 0 0 1.3 2.3A3 3 0 0 0 8 18a3 3 0 0 0 1-.2" />
      <path d="M15 4a3 3 0 0 1 3 3v.3A2.7 2.7 0 0 1 20 10v1a2.7 2.7 0 0 1-1.3 2.3A3 3 0 0 1 16 18a3 3 0 0 1-1-.2" />
      <path d="M9 4v14M15 4v14" />
    </svg>
  );
}

export function DeviceIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.2" />
      <path d="M11 19h2" />
    </svg>
  );
}

export function ReplayIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12a8 8 0 1 1 2.3 5.6" />
      <path d="M4 20v-5h5" />
    </svg>
  );
}

export function CpuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="3" y="10" width="2" height="4" fill="currentColor" stroke="none" />
      <rect x="19" y="10" width="2" height="4" fill="currentColor" stroke="none" />
      <rect x="10" y="3" width="4" height="2" fill="currentColor" stroke="none" />
      <rect x="10" y="19" width="4" height="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="10.5" width="14" height="9" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.79 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.07.77 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...props}>
      <path d="M17.47 14.38c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.51-.17-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.82 1.19 3.01.15.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
      <path d="M12.02 2C6.5 2 2 6.48 2 11.98c0 1.88.52 3.64 1.42 5.15L2 22l5.02-1.31a10 10 0 0 0 5 1.33h.01c5.52 0 10-4.48 10-9.98C22.03 6.48 17.55 2 12.02 2Zm0 18.13h-.01a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-2.97.78.79-2.88-.19-.3a8.15 8.15 0 0 1-1.25-4.35c0-4.5 3.68-8.16 8.19-8.16 2.19 0 4.24.85 5.79 2.4a8.09 8.09 0 0 1 2.4 5.77c0 4.5-3.68 8.16-8.19 8.16Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} width={20} height={20} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} width={20} height={20} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.2" />
      <path d="M4 6.5l8 6 8-6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v11" />
      <path d="M7.5 11L12 15.5 16.5 11" />
      <path d="M5 19.5h14" />
    </svg>
  );
}

export function iconFor(id: string) {
  switch (id) {
    case 'bot':
      return BotIcon;
    case 'target':
      return TargetIcon;
    case 'brain':
      return BrainIcon;
    case 'device':
      return DeviceIcon;
    case 'replay':
      return ReplayIcon;
    case 'cpu':
      return CpuIcon;
    case 'lock':
      return LockIcon;
    default:
      return BotIcon;
  }
}
