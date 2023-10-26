'use client'

import { SanityImage } from 'sanity-image'
import { SanityImageProps } from 'types'

const SanityComponentImage = ({
	alt,
	crop,
	hotspot,
	asset,
	width,
	height,
	image,
	className,
	loading,
}: SanityImageProps) => {
	const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
	const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

	let imageId
	let preview

	if (!image && !asset) return null

	if (image && !asset) {
		imageId = image._id
		preview = image.metadata.lqip
	}

	if (asset && !image) {
		imageId = asset._id
		preview = asset.metadata.lqip
	}

	if (!imageId) return null

	return (
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
			loading={loading || 'lazy'}
			className={className || ''}
		/>
	)
}

export default SanityComponentImage
