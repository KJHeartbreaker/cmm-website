import { Page } from '@/components/pages/page/Page'
import PagePreview from '@/components/pages/page/PagePreview'
import { toPlainText } from '@portabletext/react'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { contactPageQuery, settingsQuery } from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { contactPagePayload, SettingsPayload } from 'types'

export async function generateMetadata(): Promise<Metadata> {
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)

	const [settings, page] = await Promise.all([
		client.fetch<SettingsPayload | null>(settingsQuery),
		client.fetch<contactPagePayload | null>(contactPageQuery),
	])

	return defineMetadata({
		description: page?.overview ? toPlainText(page.overview) : '',
		image: settings?.ogImage,
		title: page?.title,
	})
}

export default async function ContactPageRoute() {
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)
	const data = await client.fetch<contactPagePayload | null>(contactPageQuery)

	if (!data && !preview) {
		notFound()
	}

	return preview ? <PagePreview data={data} /> : <Page data={data} />
}
