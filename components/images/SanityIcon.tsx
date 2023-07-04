'use client'

import { SanityImage } from 'sanity-image'
import { SanityIconProps } from 'types'

const SanityIcon = (icon: SanityIconProps) => {
	const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
	const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

	const { alt, asset } = icon
	const iconId = asset._id

	return (
		<SanityImage
			id={iconId}
			baseUrl={`https://cdn.sanity.io/images/${projectId}/${dataset}/`}
			width={40}
			height={40}
			mode="cover"
			alt={alt}
			loading="eager"
		/>
	)
}

export default SanityIcon
