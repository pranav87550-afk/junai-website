import DocsSidebar from '@/components/DocsSidebar';
import DocsMobileNav from '@/components/DocsMobileNav';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-void pb-24 pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <DocsMobileNav />
          <div className="hidden lg:block">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-chrome-700">Documentation</p>
            <DocsSidebar />
          </div>
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
