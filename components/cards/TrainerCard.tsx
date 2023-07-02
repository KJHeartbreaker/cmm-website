'use client'

import React from 'react'
import { SanityImageProps } from 'types'
import { PortableTextBlock } from 'sanity'
import SanityComponentImage from '../images/SanityComponentImage'
import { SimplePortableText } from '../portableText/SimplePortableText'
import { TrainerCardContainer } from './Card.styles'

export interface TrainerCardProps {
	name: string
	certs?: { portableTextBlock: PortableTextBlock[] }
	image: SanityImageProps
}

const TrainerCard: React.FC<TrainerCardProps> = ({ name, certs, image }: TrainerCardProps) => (
	<TrainerCardContainer>
		<SanityComponentImage {...image} />
		<div className="flex flex-col items-center px-10 pb-10 text-center">
			<h5 className="my-5 font-mono text-orange">{name}</h5>
			{certs && <SimplePortableText value={certs.portableTextBlock} />}
		</div>
	</TrainerCardContainer>
)

export default TrainerCard
