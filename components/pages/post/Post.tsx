'use client'

import { AuthorContainer } from '@/components/cards/Card.styles'
import SanityComponentImage from '@/components/images/SanityComponentImage'
import { CustomPortableText } from '@/components/portableText/CustomPortableText'
import ShareButtons from '@/components/utilityComponents/ShareButtons'
import Link from 'next/link'
import type { PostPayload } from 'types'
import { PostContainer, BlogGuts } from './Post.styles'

export interface PostProps {
	data: PostPayload | null
}

export function Post({ data }: PostProps) {
	const { title, subheader, body, image, author, slug } = data ?? {}

	const authorSlug = `/our-team#${author.slug.current}`

	return (
		<PostContainer>
			<h1 className="title">{title}</h1>
			<SanityComponentImage alt={image.alt} asset={image.asset} className="post-image" />
			{subheader && <h3 className="subheader">{subheader}</h3>}
			<BlogGuts>
				<AuthorContainer>
					<SanityComponentImage {...author.picture} />
					<Link href={authorSlug} passHref>
						<h5>{author.name}</h5>
					</Link>
				</AuthorContainer>
				<ShareButtons shareUrl={`blog/${slug!.current}`} title={title} />
			</BlogGuts>
			<CustomPortableText value={body.portableTextBlock} />
		</PostContainer>
	)
}
