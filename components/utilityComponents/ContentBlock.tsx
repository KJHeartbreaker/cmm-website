'use client'

import React from 'react'
import { SanityImageProps } from 'types'

import { Section } from 'styles/Wrappers'
import SanityBackgroundImage from '../images/SanityBackgroundImage'

interface ContentBlockProps {
	bgColor?: string
	bgImage?: SanityImageProps | null
	overlay: 'noOverlay' | 'darkOverlay' | 'blueOverlay'
	removeBottomPadding: boolean
	skinny: boolean
	children: React.JSX.Element
	classes?: string
	id?: string
}

const ContentBlock: React.FC<ContentBlockProps> = (props) => {
	const { bgColor, bgImage, overlay, removeBottomPadding, skinny, children, classes, id } = props

	const hasBg = bgImage?.asset

	return (
		<Section
			className={`${removeBottomPadding ? 'short' : ''} ${skinny ? 'skinny' : ''} ${hasBg ? 'has-bg' : ''} ${
				classes || ''
			}`}
			id={id || ''}
			style={{ backgroundColor: bgColor }}
		>
			{hasBg && <SanityBackgroundImage image={bgImage} overlay={overlay} />}
			{children}
		</Section>
	)
}

export default ContentBlock
