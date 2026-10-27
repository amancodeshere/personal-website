import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const railwayDomain = process.env.RAILWAY_PUBLIC_DOMAIN;
  const origin = configured?.replace(/\/$/, '') || (railwayDomain ? `https://${railwayDomain.replace(/\/$/, '')}` : undefined);
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(origin ? { sitemap: `${origin}/sitemap.xml` } : {}),
  };
}
