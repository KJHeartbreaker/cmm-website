'use client'

import { pagesBySlugQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PagePayload } from 'types'

import { Page, type PageProps } from './Page'

export default function PagePreview({ data: initialData }: PageProps) {
	// Only use preview query for PagePayload (which has a slug)
	// For HomePagePayload and BlogLandingPagePayload, just render without live preview
	const hasSlug = initialData && 'slug' in initialData && initialData.slug

	// Always call the hook, but only use it for pages with slugs
	const [data] = useLiveQuery<PagePayload | null>(hasSlug ? (initialData as PagePayload) : null, pagesBySlugQuery, {
		slug: hasSlug ? (initialData as PagePayload).slug : undefined,
	})

	// For pages without slugs, use initialData directly
	const finalData = hasSlug ? data ?? initialData : initialData

	return <Page data={finalData} />
}
