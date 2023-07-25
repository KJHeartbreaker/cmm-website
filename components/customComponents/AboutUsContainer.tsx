'use client'

import { PortableTextBlock } from 'sanity'
import IconCard, { IconCardProps } from '../cards/IconCard'
import { CustomPortableText } from '../portableText/CustomPortableText'
import { RowColumnCopy } from '../rows/Row.styles'
import {
	AboutUsContentContainer,
	AboutUsSectionContainer,
	IconCardColumn,
} from './CustomComponent.styles'

export interface AboutUsSectionProps {
	iconCards: IterableIconCardProps[]
	copy: { portableTextBlock: PortableTextBlock[] }
}

export interface IterableIconCardProps extends IconCardProps {
	iconCards: IconCardProps[]
	_key: string
}

export default function AboutUsSection(props: AboutUsSectionProps) {
	const { copy, iconCards } = props

	return (
		<AboutUsSectionContainer>
			<AboutUsContentContainer>
				<RowColumnCopy>
					<CustomPortableText value={copy.portableTextBlock! as PortableTextBlock[]} />
				</RowColumnCopy>
				<IconCardColumn>
					<>
						{iconCards.map((iC, i) => (
							<IconCard
								key={`${iC.icon.asset._id}+${i}`}
								icon={iC.icon}
								heading={iC.heading}
								copy={iC.copy}
							/>
						))}
					</>
				</IconCardColumn>
			</AboutUsContentContainer>
		</AboutUsSectionContainer>
	)
}
