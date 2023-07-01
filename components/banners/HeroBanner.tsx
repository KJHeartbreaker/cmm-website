import React from 'react'
import { HeroBannerProps } from 'types'

import { PortableTextBlock } from 'sanity'
import SanityBackgroundImage from '../images/SanityBackgroundImage'
import { SimplePortableText } from '../portableText/SimplePortableText'

const HeroBanner: React.FC<HeroBannerProps> = (props) => {
	const { size, image, heading, subheading, copy, copyColor, subHeadingColor, headingColor } = props

	let bgSize
	let copyBlock

	if (size === 'standard') {
		bgSize = 'h-[300px] lg:h-[400px]'
		copyBlock = ''
	} else if (size === 'x-large') {
		bgSize = 'h-[500px] lg:h-[600px]'
		copyBlock = 'mt-[100px] lg:mt-[300px]'
	} else {
		bgSize = ''
		copyBlock = ''
	}

	return (
		<section className={`relative flex w-screen items-center justify-center bg-grey44 ${bgSize}`}>
			{image && <SanityBackgroundImage image={image} />}
			<div className={`absolute z-10 flex w-8/12 flex-col items-center justify-center text-center ${copyBlock}`}>
				<h2 className={`text-${subHeadingColor} font-mono`}>{subheading}</h2>
				<h1 className={`text-${headingColor} pb-8 font-mono leading-[1] lg:leading-[0.8]`}>{heading}</h1>
				{copy && (
					<SimplePortableText
						value={copy.portableTextBlock as PortableTextBlock[]}
						paragraphClasses={`text-${copyColor}`}
					/>
				)}
			</div>
		</section>
	)
}

export default HeroBanner
