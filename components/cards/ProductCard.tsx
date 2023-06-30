import Link from 'next/link'
import React from 'react'
import { CTAProps, SanityImageProps } from 'types'

import CTAButton from '../CTA/CTAButton'
import SanityComponentImage from '../images/SanityComponentImage'

export interface ProductCardProps {
	key: string
	image: SanityImageProps
	heading: string
	price: number
	cta: CTAProps
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
	const { image, heading, price, cta } = props

	return (
		<div className="flex h-full flex-col items-center bg-white px-20 py-20">
			<Link href={cta.landingPageRoute!.slug.current}>
				<SanityComponentImage {...image} />
			</Link>
			<div className="flex flex-col items-center text-center">
				<h4 className="my-5 font-mono text-blue33">{heading}</h4>
				<p>{`$${price.toFixed(2)}`}</p>
				<CTAButton
					title={cta.title}
					kind={cta.kind}
					landingPageRoute={cta.landingPageRoute}
					arrow={cta.arrow}
				/>
			</div>
		</div>
	)
}

export default ProductCard
