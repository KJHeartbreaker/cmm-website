import { readToken } from 'lib/sanity.api'
import { homePageSitemap, pagesSitemap, postsSitemap } from 'lib/sanity.queries'
import { getClient } from 'lib/sanity.client'
import { MetadataRoute } from 'next'

interface MetadataPayload {
	_id: string
	_updatedAt: string
	slug: {
		current: string
	}
}

// Have to handle the homepage separately because it doesn't have a slug
interface HomepageMetadataPayload {
	_id: string
	_updatedAt: string
	slug: {
		current: ''
	}
}

type changeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const siteUrl = process.env.SITE_URL || 'https://www.caninemindsandmanners.ca'
	const preview = { token: readToken! }
	const changeFrequency = 'weekly' as changeFrequency
	const client = getClient(preview)
	const [homepage, pages, posts] = await Promise.all([
		client.fetch<HomepageMetadataPayload[]>(homePageSitemap),
		client.fetch<MetadataPayload[]>(pagesSitemap),
		client.fetch<MetadataPayload[]>(postsSitemap),
	])

	// Handle the case where there is nothing to fetch
	if (!homepage || homepage.length === 0) {
		return []
	}

	if (!pages || pages.length === 0) {
		return []
	}

	if (!posts || posts.length === 0) {
		return []
	}

	// Remove drafts from the list
	const filteredHome = homepage.filter((page) => !page._id.startsWith('drafts.'))

	const filteredPages = pages.filter((page) => !page._id.startsWith('drafts.'))

	const filteredPosts = posts.filter((post) => !post._id.startsWith('drafts.'))

	// Map over the data to create an array of sitemap entries
	const homepageRoute = filteredHome.map((page) => {
		return {
			url: `${siteUrl}/`,
			lastModified: new Date(page._updatedAt).toISOString(),
			changeFrequency,
		}
	})

	const routes = filteredPages.map((page) => {
		return {
			url: `${siteUrl}/${page.slug.current}`,
			lastModified: new Date(page._updatedAt).toISOString(),
			changeFrequency,
		}
	})

	const postRoutes = filteredPosts.map((post) => {
		return {
			url: `${siteUrl}/blog/${post.slug.current}`,
			lastModified: new Date(post._updatedAt).toISOString(),
			changeFrequency,
		}
	})

	return [...homepageRoute, ...routes, ...postRoutes]
}
