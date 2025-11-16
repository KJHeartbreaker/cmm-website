import { Page } from 'components/pages/page/Page'
import PagePreview from 'components/pages/page/PagePreview'
import { toPlainText } from '@portabletext/react'
import { readToken, siteUrl } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { blogPageQuery, settingsQuery } from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { BlogLandingPagePayload, SettingsPayload } from 'types'

export async function generateMetadata(): Promise<Metadata> {
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)

	try {
		const [settings, page] = await Promise.all([
			client.fetch<SettingsPayload | null>(settingsQuery).catch(() => null),
			client.fetch<BlogLandingPagePayload | null>(blogPageQuery).catch(() => null),
		])

		return defineMetadata({
			description: page?.overview ? toPlainText(page.overview) : '',
			image: settings?.ogImage,
			title: page?.title,
			canonical: `${siteUrl}/blog`,
		})
	} catch (error) {
		console.error('Error generating metadata for blog page:', error)
		return defineMetadata({
			title: 'Blog',
			canonical: `${siteUrl}/blog`,
		})
	}
}

export default async function BlogPageRoute() {
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)

	let data: BlogLandingPagePayload | null = null
	try {
		data = await client.fetch<BlogLandingPagePayload | null>(blogPageQuery)

		// Debug logging - remove after fixing
		if (process.env.NODE_ENV === 'development') {
			console.log('Blog page data:', JSON.stringify(data, null, 2))
		}
	} catch (error) {
		console.error('Error fetching blog page data:', error)
		if (!preview) {
			notFound()
		}
	}

	if (!data && !preview) {
		notFound()
	}

	return preview ? <PagePreview data={data} /> : <Page data={data} />
}
