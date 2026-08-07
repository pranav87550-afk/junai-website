import type { MetadataRoute } from 'next';
import { siteConfig, docSections } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/download', '/docs', '/about', '/privacy', '/terms'].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date()
  }));

  const docRoutes = docSections.map((section) => ({
    url: `${siteConfig.url}/docs/${section.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...docRoutes];
}
