import { ReactNode } from 'react';

export interface DocContent {
  title: string;
  body: ReactNode;
}

function Code({ children }: { children: ReactNode }) {
  return (
    <pre className="my-4 overflow-x-auto rounded-lg border border-hairline bg-void p-4 font-mono text-xs leading-relaxed text-chrome-300">
      <code>{children}</code>
    </pre>
  );
}

export const docsContent: Record<string, DocContent> = {
  'getting-started': {
    title: 'Getting Started',
    body: (
      <>
        <p>
          JunAI is distributed as an Android APK. There's no separate account or online setup required to install
          it — first-run configuration happens on your device.
        </p>
        <h2>Install</h2>
        <ol>
          <li>Download the latest APK from the Download page or GitHub Releases.</li>
          <li>Open the file on your device and allow installation from this source if prompted.</li>
          <li>Launch JunAI once the install finishes.</li>
        </ol>
        <h2>First-run setup</h2>
        <p>
          On first launch, JunAI will ask for the permissions it needs for the features you choose to use — for
          example, accessibility access for Device Interaction, or per-app opt-in for passive screen reading. Every
          permission is scoped to a specific feature; you can decline any of them and use the rest of the app.
        </p>
        <h2>Try a command</h2>
        <p>Start with something simple to see intent understanding in action:</p>
        <Code>{'"Set an alarm for 7 AM"\n"Open Spotify and play my Discover Weekly"'}</Code>
        <p>From there, Learn &amp; Replay lets you record a sequence of steps once and replay it as a macro later.</p>
      </>
    )
  },
  features: {
    title: 'Features',
    body: (
      <>
        <p>A closer look at each capability and what it actually does.</p>
        <h2>AI Assistant</h2>
        <p>Conversational interaction for everyday tasks and questions — the entry point to everything else.</p>
        <h2>Intent Understanding</h2>
        <p>
          Before anything happens, JunAI decides whether your message is conversation or a command that should
          trigger an action. This separation is what keeps casual chat from accidentally triggering device actions.
        </p>
        <h2>Knowledge &amp; RAG</h2>
        <p>Retrieval-augmented lookup surfaces relevant information to inform a response, rather than relying on
          the model's training data alone.</p>
        <h2>Device Interaction</h2>
        <p>
          JunAI can read supported on-screen elements and act on them — tapping, scrolling, entering text — to
          complete a task on your behalf.
        </p>
        <h2>Learn &amp; Replay</h2>
        <p>
          Record a supported sequence of interactions once; JunAI can replay that sequence later as a macro,
          matching UI elements even if their position on screen changes.
        </p>
        <h2>Local AI</h2>
        <p>
          Where technically possible, JunAI runs models on-device for lower latency and better privacy, using an
          online model as a fallback for heavier tasks.
        </p>
        <h2>Privacy</h2>
        <p>
          Passive screen reading is opt-in per app and off by default. Supported processing happens on-device where
          technically possible.
        </p>
      </>
    )
  },
  architecture: {
    title: 'Architecture',
    body: (
      <>
        <p>A high-level look at the major components. This is intentionally not implementation-level detail.</p>
        <h2>Intent layer</h2>
        <p>
          Incoming input is routed to determine whether it's conversational or actionable, and — for actionable
          requests — which capability should handle it.
        </p>
        <h2>Hybrid AI routing</h2>
        <p>
          Supported tasks run on smaller on-device models; more complex or open-ended requests can fall back to an
          online model. The routing decision aims to keep common tasks fast and local.
        </p>
        <h2>Device interaction layer</h2>
        <p>
          Reads the current screen's accessible elements and can act on them directly, or match them against a
          previously recorded macro.
        </p>
        <h2>Learn &amp; Replay engine</h2>
        <p>
          Captures a sequence of supported interactions, stores it as a reusable macro, and replays it by matching
          UI elements rather than fixed coordinates — so it can survive minor layout changes.
        </p>
        <h2>Knowledge layer</h2>
        <p>Retrieval-augmented lookup that supplies relevant context to a response when needed.</p>
      </>
    )
  },
  faq: {
    title: 'FAQ',
    body: (
      <p>
        See the <a href="/#faq">FAQ section</a> on the home page for answers to common questions about JunAI,
        including pricing, offline support, and device compatibility.
      </p>
    )
  },
  troubleshooting: {
    title: 'Troubleshooting',
    body: (
      <>
        <h2>Install blocked or app not installed</h2>
        <p>
          Make sure "Install from unknown sources" (or the equivalent per-app permission on newer Android versions)
          is enabled for the browser or file manager you used to download the APK.
        </p>
        <h2>A feature asks for a permission I don't want to grant</h2>
        <p>
          Every permission in JunAI is scoped to a specific feature. You can decline it — the rest of the app will
          keep working, just without that particular capability.
        </p>
        <h2>Learn &amp; Replay isn't matching a step correctly</h2>
        <p>
          This usually happens when the target app's UI has changed since the macro was recorded. Try re-recording
          the affected step.
        </p>
        <h2>Still stuck?</h2>
        <p>
          Open an issue on the GitHub repository with your Android version and a description of what happened —
          that's the fastest way to get it looked at.
        </p>
      </>
    )
  }
};
