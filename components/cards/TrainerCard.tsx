'use client'

import React from 'react'
import { SanityImageProps } from 'types'
import { PortableTextBlock } from 'sanity'
import Link from 'next/link'
import SanityComponentImage from '../images/SanityComponentImage'
import { SimplePortableText } from '../portableText/SimplePortableText'
import { TrainerCardContainer } from './Card.styles'

export interface TrainerCardProps {
	name: string
	slug: { current: string }
	certs?: { portableTextBlock: PortableTextBlock[] }
	image: SanityImageProps
}

const TrainerCard: React.FC<TrainerCardProps> = ({ name, slug, certs, image }: TrainerCardProps) => (
	<TrainerCardContainer>
		<Link href={`/our-team#${slug.current}`} passHref>
			<SanityComponentImage {...image} />
		</Link>
		<div className="copy-block">
			<Link href={`/our-team#${slug.current}`} passHref>
				<h4>{name}</h4>
			</Link>
			{certs && <SimplePortableText value={certs.portableTextBlock} />}
		</div>
	</TrainerCardContainer>
)

export default TrainerCard
