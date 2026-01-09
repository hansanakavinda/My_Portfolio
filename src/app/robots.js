import { MetadataRoute } from 'next'
 
export default function robots() {
  const baseUrl = 'hansanakavinda.me'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `https://${baseUrl}/sitemap.xml`,
  }
}