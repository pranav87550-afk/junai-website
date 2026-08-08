// ============================================================================
// JunAI Website — Central Configuration
// Update values here. Nothing in components/ or app/ should hardcode
// version numbers, URLs, or status flags.
// ============================================================================

export const siteConfig = {
  name: 'JunAI',
  tagline: 'An AI that understands, learns, and acts.',
  description:
    'JunAI is an AI assistant designed to understand user intent, retrieve knowledge, interact with your device, and learn supported workflows.',
  url: 'https://junai.app', // TODO: replace with live domain
  ogImage: '/images/jun-splash.png'
};

// ----------------------------------------------------------------------------
// GitHub
// ----------------------------------------------------------------------------
export const githubConfig = {
  repoUrl: 'https://github.com/pranav87550-afk/JunAI',
  repoName: 'JunAI',
  description:
    'Open-source Android AI assistant with on-device hybrid AI, intent understanding, and Learn & Replay workflow automation.',
  showStats: false // flip to true once repo is public and stats are real
};

// ----------------------------------------------------------------------------
// Download / Release info — DO NOT hardcode elsewhere. Leave placeholders
// as [BRACKETED] until real release data exists.
// ----------------------------------------------------------------------------
export const releaseConfig = {
  version: 'v1',
  apkSizeMb: '[SIZE]',
  minAndroidVersion: '[TBA]',
  releaseDate: 'August 15, 2026',
  apkDownloadUrl: '', // TODO: link to GitHub Releases asset once published
  githubReleaseUrl: 'https://github.com/pranav87550-afk/JunAI/releases/latest',
  sha256: '', // TODO: paste checksum for the published APK
  changelog: [
    // TODO: replace with real changelog entries per release
    '[Changelog not yet published — check the GitHub release page]'
  ]
};

// ----------------------------------------------------------------------------
// Social / Community — leave blank until a real URL exists. Blank links
// render as "coming soon" rather than a dead href.
// ----------------------------------------------------------------------------
export const contactConfig = {
  supportEmail: 'jun.dev.1510@gmail.com'
};

export const socialConfig = {
  github: githubConfig.repoUrl,
  whatsapp: 'https://whatsapp.com/channel/0029Vb8R5uZCxoB4qZHBCZ1b',
  instagram: 'https://www.instagram.com/junai.dev?igsh=dmYzYXY1cWI3cG82'
};

// ----------------------------------------------------------------------------
// App screenshots — jab screenshots ready ho, yahan path daal dena
// (e.g. '/images/screenshot-1.png'). Array khali rahega toh Screenshots
// section bilkul render hi nahi hoga — koi blank space nahi dikhega.
// ----------------------------------------------------------------------------
export const appScreenshots: string[] = [
  // '/images/screenshot-1.png',
  // '/images/screenshot-2.png',
];

// ----------------------------------------------------------------------------
// Features — status drives the badge shown on the feature card.
// ----------------------------------------------------------------------------
export type FeatureStatus = 'live' | 'in-progress' | 'planned';

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  status: FeatureStatus;
}

export const features: Feature[] = [
  {
    id: 'assistant',
    icon: 'bot',
    title: 'AI Assistant',
    description: 'Natural, conversational interaction with JunAI for everyday tasks and commands.',
    status: 'live'
  },
  {
    id: 'intent',
    icon: 'target',
    title: 'Intent Understanding',
    description: "JunAI separates conversation from actionable commands and works out what you actually want done.",
    status: 'live'
  },
  {
    id: 'knowledge',
    icon: 'brain',
    title: 'Knowledge & RAG',
    description: 'Retrieval-augmented knowledge lookup surfaces relevant information as part of a response.',
    status: 'in-progress'
  },
  {
    id: 'device',
    icon: 'device',
    title: 'Device Interaction',
    description: 'Reads and acts on supported on-screen elements to carry out actions on your behalf.',
    status: 'live'
  },
  {
    id: 'learn-replay',
    icon: 'replay',
    title: 'Learn & Replay',
    description: 'Observes a supported interaction once, then can replay it as a reusable macro.',
    status: 'live'
  },
  {
    id: 'local-ai',
    icon: 'cpu',
    title: 'Local AI',
    description: 'Runs on-device models for supported tasks, falling back online only where needed.',
    status: 'in-progress'
  },
  {
    id: 'privacy',
    icon: 'lock',
    title: 'Privacy',
    description: 'Screen reading is opt-in per app, off by default, and processed on-device where technically possible.',
    status: 'live'
  }
];

// ----------------------------------------------------------------------------
// How JunAI works — pipeline steps
// ----------------------------------------------------------------------------
export const workflowSteps = [
  { id: '01', title: 'User Input', description: 'You type or speak a request in plain language.' },
  { id: '02', title: 'Intent Understanding', description: 'JunAI decides whether this is conversation or a command.' },
  { id: '03', title: 'Knowledge / Context Retrieval', description: 'Relevant knowledge and on-screen context are pulled in.' },
  { id: '04', title: 'Decision', description: 'A plan is formed: reply, retrieve, or act.' },
  { id: '05', title: 'Action', description: 'Supported on-device actions are carried out, or a recorded macro is replayed.' },
  { id: '06', title: 'Result', description: 'You get a response, or see the action completed on screen.' }
];

// ----------------------------------------------------------------------------
// Roadmap — status must reflect reality. Do not mark 'done' speculatively.
// ----------------------------------------------------------------------------
export type RoadmapStatus = 'done' | 'in-progress' | 'planned';

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  status: RoadmapStatus;
}

export const roadmap: RoadmapPhase[] = [
  { phase: '01', title: 'Core Assistant Foundation', description: 'Base conversational engine and app architecture.', status: 'done' },
  { phase: '02', title: 'Intent Understanding', description: 'Separating conversation from actionable commands.', status: 'done' },
  { phase: '03', title: 'Device Interaction', description: 'Reading and acting on supported on-screen elements.', status: 'done' },
  { phase: '04', title: 'Learn & Replay', description: 'Recording supported interactions and replaying them as macros.', status: 'in-progress' },
  { phase: '05', title: 'Passive Learning', description: 'Opt-in passive screen observation for autonomous action on intent.', status: 'in-progress' },
  { phase: '06', title: 'Knowledge / RAG Improvements', description: 'Deeper retrieval-augmented knowledge lookup.', status: 'planned' },
  { phase: '07', title: 'Performance & Stability', description: 'Hardening the data layer, tests, and reliability audits.', status: 'planned' },
  { phase: '08', title: 'Public Release', description: 'Wider availability and onboarding polish.', status: 'planned' }
];

// ----------------------------------------------------------------------------
// FAQ
// ----------------------------------------------------------------------------
export const faqs = [
  {
    question: 'What is JunAI?',
    answer:
      'JunAI is an Android AI assistant built to understand what you mean, retrieve relevant knowledge, interact with your device, and learn supported workflows so it can repeat them for you.'
  },
  {
    question: 'Is JunAI free?',
    answer: 'Pricing details will be published alongside the first public release. Check the download page for current status.'
  },
  {
    question: 'Does JunAI work offline?',
    answer:
      'JunAI uses a hybrid approach: supported tasks run on-device, while more complex requests may use an online model. Fully offline coverage depends on the task.'
  },
  {
    question: 'What devices are supported?',
    answer: 'JunAI targets Android devices. Minimum OS version and other requirements are listed on the download page.'
  },
  {
    question: 'What is Learn & Replay?',
    answer:
      'Learn & Replay lets JunAI observe a supported interaction you perform once, then replay that same sequence later as a macro.'
  },
  {
    question: 'Does JunAI access my device?',
    answer:
      'JunAI can read supported on-screen elements to understand context and carry out actions. Passive screen observation is opt-in per app and off by default.'
  },
  {
    question: 'Where can I download JunAI?',
    answer: 'The latest build is available on the Download page and on GitHub Releases.'
  }
];

// ----------------------------------------------------------------------------
// Documentation
// ----------------------------------------------------------------------------
export interface DocSection {
  slug: string;
  title: string;
  summary: string;
}

export const docSections: DocSection[] = [
  { slug: 'getting-started', title: 'Getting Started', summary: 'Install JunAI and complete first-run setup.' },
  { slug: 'features', title: 'Features', summary: 'A closer look at what JunAI can do today.' },
  { slug: 'architecture', title: 'Architecture', summary: 'How the major components fit together, at a high level.' },
  { slug: 'faq', title: 'FAQ', summary: 'Common questions, answered briefly.' },
  { slug: 'troubleshooting', title: 'Troubleshooting', summary: 'Fixes for common install and runtime issues.' }
];
