'use client'

import { postsBySlugQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { PostPayload } from 'types'

import { Post, type PostProps } from './Post'

export default function PostPreview({ data: initialData }: PostProps) {
	const [data] = useLiveQuery<PostPayload | null>(initialData, postsBySlugQuery, {
		slug: initialData?.slug,
	})

	return <Post data={data ?? initialData} />
}
