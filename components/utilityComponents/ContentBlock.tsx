'use client'

import React from 'react'
import { ImageAsset } from 'types'

import { Section } from 'styles/Wrappers'
import SanityBackgroundImage from '../images/SanityBackgroundImage'

interface ContentBlockProps {
	bgColor?: string
	bgImage?: ImageAsset | null
	overlay: 'noOverlay' | 'darkOverlay' | 'blueOverlay'
	removeBottomPadding: boolean
	skinny: boolean
	children: React.JSX.Element
	classes?: string
	id?: string
}

const ContentBlock: React.FC<ContentBlockProps> = (props) => {
	const { bgColor, bgImage, overlay, removeBottomPadding, skinny, children, classes, id } = props

	return (
		<Section
			className={`${removeBottomPadding ? 'short' : ''} ${skinny ? 'skinny' : ''} ${
				bgImage ? 'has-bg' : ''
			} ${classes || ''}`}
			id={id || ''}
			style={{ backgroundColor: bgColor }}
		>
			{bgImage && <SanityBackgroundImage image={bgImage} overlay={overlay} />}
			{children}
		</Section>
	)
}

export default ContentBlock
