import { MetadataRoute } from 'next'
 
export default function sitemap() {
  const baseUrl = 'https://hansanakavinda.me'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ]
}