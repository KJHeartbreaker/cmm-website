'use client'

import React from 'react'
import { PortableTextBlock } from 'sanity'
import { SimplePortableText } from '../portableText/SimplePortableText'
import ContactForm from '../forms/ContactForm'
import {
	ContactFormIconCardsContainer,
	ContactPageContainer,
	FindUsButtonContainer,
	MapContainer,
	MapFormPanel,
} from './MapBanner.styles'
import CTAButton from '../CTA/CTAButton'
import IconCard, { IconCardProps } from '../cards/IconCard'

interface MapBannerProps {
	map: string
	mapLink: string
	copy: {
		portableTextBlock: PortableTextBlock[]
	}
	iconCards: IconCardProps[]
}

const parseEmbedCode = (embedCode) => {
	const srcMatch = embedCode.match(/src="([^"]*)/)
	const widthMatch = embedCode.match(/width="([^"]*)/)
	const heightMatch = embedCode.match(/height="([^"]*)/)

	return {
		src: srcMatch ? srcMatch[1] : '',
		width: widthMatch ? widthMatch[1] : '600', // default width if not found
		height: heightMatch ? heightMatch[1] : '450', // default height if not found
	}
}

const MapBanner: React.FC<MapBannerProps> = (props: MapBannerProps) => {
	const { map, mapLink, copy, iconCards } = props
	const { src } = parseEmbedCode(map)
	const style = { border: 0, width: '100%', height: '100%' }
	const allowFullScreen = true
	const loading = 'lazy'
	const referrerPolicy = 'no-referrer-when-downgrade'

	return (
		<ContactPageContainer>
			<MapContainer>
				<FindUsButtonContainer>
					<CTAButton title="Find Us" kind="button" link={mapLink} arrow={false} />
				</FindUsButtonContainer>
				<iframe
					src={src}
					style={style}
					allowFullScreen={allowFullScreen}
					loading={loading}
					referrerPolicy={referrerPolicy}
					title="Canine Minds & Manners Google Map"
				/>
				<MapFormPanel>
					{copy && (
						<div className="copyBlock">
							<SimplePortableText value={copy.portableTextBlock} />
						</div>
					)}
					<ContactForm />
				</MapFormPanel>
			</MapContainer>
			<ContactFormIconCardsContainer>
				{iconCards.map((iC, i) => (
					<IconCard key={`${iC.icon.asset._id}+${i}`} icon={iC.icon} heading={iC.heading} copy={iC.copy} />
				))}
			</ContactFormIconCardsContainer>
		</ContactPageContainer>
	)
}

export default MapBanner
