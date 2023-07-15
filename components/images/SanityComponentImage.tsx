'use client'

import { SanityImage } from 'sanity-image'
import { SanityImageProps } from 'types'

const SanityComponentImage = (props: SanityImageProps) => {
	const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
	const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

	const { alt, crop, hotspot, asset, width, height, image } = props

	let imageId
	let preview

	if (image && !asset) {
		imageId = image._id
		preview = image.metadata.lqip
	}

	if (asset && !image) {
		imageId = asset._id
		preview = asset.metadata.lqip
	}

	return (
		// <div className="image-container">
		<>
			{imageId && (
				<SanityImage
					id={imageId}
					baseUrl={`https://cdn.sanity.io/images/${projectId}/${dataset}/`}
					width={width}
					height={height}
					mode="cover"
					hotspot={hotspot}
					crop={crop}
					preview={preview}
					alt={alt}
					loading="lazy"
				/>
			)}
		</>
	)
}

export default SanityComponentImage
