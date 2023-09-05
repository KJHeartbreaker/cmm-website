import { Page } from 'components/pages/page/Page'
import PagePreview from 'components/pages/page/PagePreview'
import { toPlainText } from '@portabletext/react'
import { readToken } from 'lib/sanity.api'
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

	const [settings, page] = await Promise.all([
		client.fetch<SettingsPayload | null>(settingsQuery),
		client.fetch<BlogLandingPagePayload | null>(blogPageQuery),
	])

	return defineMetadata({
		description: page?.overview ? toPlainText(page.overview) : '',
		image: settings?.ogImage,
		title: page?.title,
	})
}

export default async function BlogPageRoute() {
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)
	const data = await client.fetch<BlogLandingPagePayload | null>(blogPageQuery)

	if (!data && !preview) {
		notFound()
	}

	return preview ? <PagePreview data={data} /> : <Page data={data} />
}
