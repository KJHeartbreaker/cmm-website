import { Post } from 'components/pages/post/Post'
import PostPreview from 'components/pages/post/PostPreview'
import { toPlainText } from '@portabletext/react'
import { readToken } from 'lib/sanity.api'
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

	const [post, homePageTitle] = await Promise.all([
		client.fetch<PostPayload | null>(postsBySlugQuery, { slug }),
		client.fetch<string | null>(homePageTitleQuery),
	])

	return defineMetadata({
		baseTitle: homePageTitle ?? undefined,
		description: post?.overview ? toPlainText(post.overview) : '',
		image: post?.image,
		title: post?.title,
	})
}

export async function generateStaticParams() {
	const client = getClient()
	const slugs = await client.fetch<string[]>(postPaths)
	return slugs.map((slug) => ({ slug }))
}

export default async function PostSlugRoute({ params }: Props) {
	const { slug } = params
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)
	const data = await client.fetch<PostPayload | null>(postsBySlugQuery, {
		slug,
	})

	if (!data && !preview) {
		notFound()
	}

	return preview ? <PostPreview data={data} /> : <Post data={data} />
}
