import { SimplePortableText } from 'components/portableText/SimplePortableText'
import Link from 'next/link'
import React from 'react'
import { PortableTextBlock } from 'sanity'
import { CTAProps, SanityIconProps } from 'types'

import CTAButton from '../CTA/CTAButton'
import SanityIcon from '../images/SanityIcon'
import { IconCardContainer, IconContainer } from './Card.styles'

export type IconCardProps = {
	icon: SanityIconProps
	heading: string
	copy: {
		portableTextBlock: PortableTextBlock[]
	}
	cta?: CTAProps
}

const IconCard: React.FC<IconCardProps> = (props) => {
	const { icon, heading, copy, cta } = props

	return (
		<IconCardContainer>
			{cta?.landingPageRoute!.slug.current ? (
				<Link href={cta.landingPageRoute!.slug.current}>
					<SanityIcon {...icon} />
				</Link>
			) : (
				<IconContainer>
					<SanityIcon {...icon} />
				</IconContainer>
			)}
			<div className="flex flex-col items-center text-center">
				<h4 className="my-5 font-mono text-blue33">{heading}</h4>
				<SimplePortableText value={copy.portableTextBlock} />
				{cta?.landingPageRoute!.slug.current && (
					<CTAButton
						title={cta.title}
						kind={cta.kind}
						landingPageRoute={cta.landingPageRoute}
						arrow={cta.arrow}
					/>
				)}
			</div>
		</IconCardContainer>
	)
}

export default IconCard
