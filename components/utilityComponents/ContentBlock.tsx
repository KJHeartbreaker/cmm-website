import React from 'react'
import { ImageAsset } from 'types'

import SanityBackgroundImage from '../images/SanityBackgroundImage'

interface ContentBlockProps {
	bgColor?: string
	bgImage?: ImageAsset | null
	removeBottomPadding: boolean
	children: React.JSX.Element
	classes: string
	id?: string
}

const ContentBlock: React.FC<ContentBlockProps> = (props) => {
	const { bgColor, bgImage, removeBottomPadding, children, classes, id } = props

	return (
		<section
			className={`relative flex flex-row items-center justify-center ${
				bgImage ? 'pb-40 pt-40' : removeBottomPadding ? 'pb-8 pt-16' : 'pb-32 pt-16'
			} ${classes || ''}`}
			id={id || ''}
			style={{ backgroundColor: bgColor }}
		>
			{bgImage && <SanityBackgroundImage image={bgImage} />}
			{children}
		</section>
	)
}

export default ContentBlock
