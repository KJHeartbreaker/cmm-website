'use client'

import Link from 'next/link'
import React from 'react'
import { LandingPageRouteProps, SanityImageProps } from 'types'

import { PortableTextBlock } from 'sanity'
import SanityComponentImage from '../images/SanityComponentImage'
import { CustomPortableText } from '../portableText/CustomPortableText'
import { ImageButtonCardContainer, ImageButtonCardContainerCopyBlock } from './Card.styles'

export interface ImageButtonProps {
	key: string
	image: SanityImageProps
	heading: string
	copy: { portableTextBlock: PortableTextBlock[] }
	landingPageRoute: LandingPageRouteProps
}

const ImageButton: React.FC<ImageButtonProps> = (props) => {
	const { image, heading, copy, landingPageRoute } = props

	return (
		<ImageButtonCardContainer>
			<Link href={landingPageRoute!.slug.current}>
				<SanityComponentImage {...image} />
				<ImageButtonCardContainerCopyBlock>
					<h3 className="my-5 font-mono text-blue33">{heading}</h3>
					<CustomPortableText value={copy.portableTextBlock} />
				</ImageButtonCardContainerCopyBlock>
			</Link>
		</ImageButtonCardContainer>
	)
}

export default ImageButton
