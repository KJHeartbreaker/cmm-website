'use client'

import { SanityImage } from 'sanity-image'

const SanityBackgroundImage = ({ image }: any) => {
	const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
	const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

	const { alt, crop, hotspot, asset } = image
	const imageId = asset._id

	return (
		<SanityImage
			id={imageId}
			baseUrl={`https://cdn.sanity.io/images/${projectId}/${dataset}/`}
			width={1920}
			hotspot={hotspot}
			crop={crop}
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				objectFit: 'cover',
				zIndex: '0',
			}}
			alt={alt}
			loading="eager"
		/>
	)
}

export default SanityBackgroundImage
