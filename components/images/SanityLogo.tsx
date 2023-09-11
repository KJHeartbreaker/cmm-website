'use client'

import { useMediaQuery } from '@/helpers/useMediaQuery'
import { SanityImage } from 'sanity-image'
import { SanityLogoProps } from 'types'

const SanityLogo = (l: SanityLogoProps) => {
	const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
	const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
	const isMobile = useMediaQuery('(max-width: 768px)')

	const { alt, logo } = l

	if (!logo) return null

	const logoId = logo._id

	const width = isMobile ? 75 : 100
	const height = isMobile ? 50 : 70

	return (
		<SanityImage
			id={logoId}
			baseUrl={`https://cdn.sanity.io/images/${projectId}/${dataset}/`}
			width={width}
			height={height}
			mode="contain"
			alt={alt}
			loading="lazy"
		/>
	)
}

export default SanityLogo
