import { Page } from 'components/pages/page/Page'
import PagePreview from 'components/pages/page/PagePreview'
import { toPlainText } from '@portabletext/react'
import { readToken, siteUrl } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { homePageQuery, settingsQuery } from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { HomePagePayload, SettingsPayload } from 'types'

export async function generateMetadata(): Promise<Metadata> {
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)

	try {
		const [settings, page] = await Promise.all([
			client.fetch<SettingsPayload | null>(settingsQuery).catch(() => null),
			client.fetch<HomePagePayload | null>(homePageQuery).catch(() => null),
		])

		return defineMetadata({
			description: page?.overview ? toPlainText(page.overview) : '',
			image: settings?.ogImage,
			title: page?.title,
			canonical: siteUrl,
		})
	} catch (error) {
		console.error('Error generating metadata for home page:', error)
		return defineMetadata({
			title: 'Home',
			canonical: siteUrl,
		})
	}
}

export default async function IndexRoute() {
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)

	let data: HomePagePayload | null = null
	try {
		data = await client.fetch<HomePagePayload | null>(homePageQuery)
	} catch (error) {
		console.error('Error fetching home page data:', error)
		if (!preview) {
			notFound()
		}
	}

	if (!data && !preview) {
		notFound()
	}

	return preview ? <PagePreview data={data} /> : <Page data={data} />
}
