import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://beon.vn';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Block API routes from being crawled
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
