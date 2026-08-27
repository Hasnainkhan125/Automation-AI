import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://shashidhar-portfolio.netlify.app',
            lastModified: new Date('2025-06-27'),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ]
}
