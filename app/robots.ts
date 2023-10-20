import { siteUrl } from 'lib/sanity.api'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			disallow: '/studio/',
		},
		sitemap: `${siteUrl}/sitemap.xml`,
	}
}
