'use client'

import React from 'react'
import { ImageAsset } from 'types'

import { Section } from 'styles/Wrappers'
import SanityBackgroundImage from '../images/SanityBackgroundImage'

interface ContentBlockProps {
	bgColor?: string
	bgImage?: ImageAsset | null
	removeBottomPadding: boolean
	children: React.JSX.Element
	classes?: string
	id?: string
}

const ContentBlock: React.FC<ContentBlockProps> = (props) => {
	const { bgColor, bgImage, removeBottomPadding, children, classes, id } = props

	return (
		<Section
			className={`${removeBottomPadding ? 'short' : ''} ${bgImage ? 'has-bg' : ''} ${
				bgColor === '#013b63' ? 'even' : ''
			} ${classes || ''}`}
			id={id || ''}
			style={{ backgroundColor: bgColor }}
		>
			{bgImage && <SanityBackgroundImage image={bgImage} />}
			{children}
		</Section>
	)
}

export default ContentBlock
