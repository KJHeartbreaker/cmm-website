'use client'

import { SimplePortableText } from 'components/portableText/SimplePortableText'
import React from 'react'
import { PortableTextBlock } from 'sanity'

import SanityIcon from '../images/SanityIcon'
import { IconContainer, TestimonialCardContainer } from './Card.styles'

export interface TestimonialCardProps {
	heading: string
	copy: { portableTextBlock: PortableTextBlock[] }
}

const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
	const { heading, copy } = props

	return (
		<TestimonialCardContainer>
			<IconContainer>
				<SanityIcon
					alt="quotation icon"
					asset={{
						_id: 'image-1a5362e99c83130e95a5cfc3fe6ca7d9dcc4a75d-32x23-svg',
					}}
				/>
			</IconContainer>
			<div className="mt-8 flex flex-col items-center text-center">
				<SimplePortableText value={copy.portableTextBlock as PortableTextBlock[]} />
				<h5 className="my-5">{heading}</h5>
			</div>
		</TestimonialCardContainer>
	)
}

export default TestimonialCard
