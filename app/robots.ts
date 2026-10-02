import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/video-sitemap.xml`,
      `${SITE_URL}/image-sitemap.xml`,
    ],
  };
}
