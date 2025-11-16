import { Post } from 'components/pages/post/Post'
import PostPreview from 'components/pages/post/PostPreview'
import { toPlainText } from '@portabletext/react'
import { readToken, siteUrl } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { homePageTitleQuery, postPaths, postsBySlugQuery } from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { PostPayload } from 'types'

type Props = {
	params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = params
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)

	try {
		const [post, homePageTitle] = await Promise.all([
			client.fetch<PostPayload | null>(postsBySlugQuery, { slug }).catch(() => null),
			client.fetch<string | null>(homePageTitleQuery).catch(() => null),
		])

		return defineMetadata({
			baseTitle: homePageTitle ?? undefined,
			description: post?.overview ? toPlainText(post.overview) : '',
			image: post?.image,
			title: post?.title,
			canonical: `${siteUrl}/blog/${slug}`,
		})
	} catch (error) {
		console.error(`Error generating metadata for blog post ${slug}:`, error)
		return defineMetadata({
			title: 'Blog Post',
			canonical: `${siteUrl}/blog/${slug}`,
		})
	}
}

export async function generateStaticParams() {
	try {
		const client = getClient()
		const slugs = await client.fetch<string[]>(postPaths).catch((error) => {
			console.error('Error fetching post paths:', error)
			return [] as string[]
		})
		return slugs.map((slug) => ({ slug }))
	} catch (error) {
		console.error('Error in generateStaticParams for blog:', error)
		return []
	}
}

export default async function PostSlugRoute({ params }: Props) {
	const { slug } = params
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)

	let data: PostPayload | null = null
	try {
		data = await client.fetch<PostPayload | null>(postsBySlugQuery, {
			slug,
		})
	} catch (error) {
		console.error(`Error fetching blog post data for ${slug}:`, error)
		// If it's a network error or query error, log it but don't crash the build
		if (!preview) {
			notFound()
		}
	}

	if (!data && !preview) {
		notFound()
	}

	return preview ? <PostPreview data={data} /> : <Post data={data} />
}
