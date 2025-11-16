import { toPlainText } from '@portabletext/react'
import { Page } from 'components/pages/page/Page'
import PagePreview from 'components/pages/page/PagePreview'
import { readToken, siteUrl } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { homePageTitleQuery, pagePaths, pagesBySlugQuery, settingsQuery } from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { PagePayload, SettingsPayload } from 'types'

type Props = {
	params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = params
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)

	try {
		const [settings, page, homePageTitle] = await Promise.all([
			client.fetch<SettingsPayload | null>(settingsQuery).catch(() => null),
			client.fetch<PagePayload | null>(pagesBySlugQuery, { slug }).catch(() => null),
			client.fetch<string | null>(homePageTitleQuery).catch(() => null),
		])

		return defineMetadata({
			baseTitle: homePageTitle ?? undefined,
			description: page?.overview ? toPlainText(page.overview) : '',
			image: settings?.ogImage,
			title: page?.title,
			canonical: `${siteUrl}/${slug}`,
		})
	} catch (error) {
		console.error(`Error generating metadata for ${slug}:`, error)
		return defineMetadata({
			title: 'Page',
			canonical: `${siteUrl}/${slug}`,
		})
	}
}

export async function generateStaticParams() {
	try {
		const client = getClient()
		const slugs = await client.fetch<string[]>(pagePaths).catch((error) => {
			console.error('Error fetching page paths:', error)
			return [] as string[]
		})
		return slugs.map((slug) => ({ slug }))
	} catch (error) {
		console.error('Error in generateStaticParams:', error)
		return []
	}
}

export default async function PageSlugRoute({ params }: Props) {
	const { slug } = params
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)

	let data: PagePayload | null = null
	try {
		data = await client.fetch<PagePayload | null>(pagesBySlugQuery, {
			slug,
		})
	} catch (error) {
		console.error(`Error fetching page data for ${slug}:`, error)
		// If it's a network error or query error, log it but don't crash the build
		if (!preview) {
			notFound()
		}
	}

	if (!data && !preview) {
		notFound()
	}

	return preview ? <PagePreview data={data} /> : <Page data={data} />
}
