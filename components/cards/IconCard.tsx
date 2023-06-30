import { SimplePortableText } from 'components/portableText/SimplePortableText'
import Link from 'next/link'
import React from 'react'
import { PortableTextBlock } from 'sanity'
import { CTAProps, SanityIconProps } from 'types'

import CTAButton from '../CTA/CTAButton'
import SanityIcon from '../images/SanityIcon'

interface IconCardProps {
	icon: SanityIconProps
	heading: string
	copy: {
		portableTextBlock: PortableTextBlock[]
	}
	cta: CTAProps
}

const IconCard: React.FC<IconCardProps> = (props) => {
	const { icon, heading, copy, cta } = props

	return (
		<div className="flex h-full flex-col items-center bg-white px-20 py-20">
			<Link href={cta.landingPageRoute!.slug.current}>
				<SanityIcon {...icon} />
			</Link>
			<div className="flex flex-col items-center text-center">
				<h4 className="my-5 font-mono text-blue33">{heading}</h4>
				<SimplePortableText value={copy.portableTextBlock} />
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

export default IconCard
