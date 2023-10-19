'use client'

import React from 'react'
import Link from 'next/link'
import { PostCardProps } from 'types'
import { PortableTextBlock } from 'sanity'
import SanityComponentImage from '../images/SanityComponentImage'
import { AuthorContainer, PostCardContainer } from './Card.styles'
import { SimplePortableText } from '../portableText/SimplePortableText'

const PostCard: React.FC<PostCardProps> = ({
	title,
	slug,
	author,
	excerpt,
	image,
}: PostCardProps) => {
	const hrefSlug = `/blog/${slug.current}`
	const authorSlug = `/our-team#${author.slug.current}`

	return (
		<PostCardContainer>
			<Link href={hrefSlug} passHref>
				<SanityComponentImage {...image} className="cardImage" />
			</Link>
			<div className="copy-block">
				<Link href={hrefSlug} passHref>
					<h4>{title}</h4>
				</Link>
				<AuthorContainer>
					<SanityComponentImage {...author.picture} />
					<Link href={authorSlug} passHref>
						<h5>{author.name}</h5>
					</Link>
				</AuthorContainer>
				<SimplePortableText value={excerpt.portableTextBlock as PortableTextBlock[]} />
			</div>
		</PostCardContainer>
	)
}

export default PostCard
