'use client'

import React from 'react'
import { PortableTextBlock } from 'sanity'
import { TrainingSession } from 'types'
import {
	TrainingContentContainer,
	TrainingCopyBlock,
	UpcomingTrainingBlock,
	TrainingImageBlock,
	TrainingTakeawayBlock,
	TrainingTakeaway,
} from './Training.styles'
import { SimplePortableText } from '../portableText/SimplePortableText'
import CTAButton from '../CTA/CTAButton'
import SanityComponentImage from '../images/SanityComponentImage'
import SanityIcon from '../images/SanityIcon'
import { IconContainer } from '../cards/Card.styles'
import CalendarIcon from './CalendarIcon'

const TrainingComponent: React.FC<TrainingSession> = ({
	name,
	description,
	upcoming,
	picture,
	price,
	takeaways,
	trainingType,
	slug,
	cta,
}: TrainingSession) => {
	const asset = {
		_id: `image-306cbb4b4f804bfbdcd75b8dd57c567f99f6313d-63x63-svg`,
		_type: 'reference',
	}

	const type = trainingType === 'group' ? 'Group Class' : 'Private Training'

	const formatStartDate = (startDate) => {
		const date = new Date(startDate)
		return date.toLocaleString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		})
	}

	return (
		<TrainingContentContainer id={slug.current} className="has-bg">
			<TrainingCopyBlock>
				<h5>{type}</h5>
				<h2>{name}</h2>
				<h4>{`$${price}`}</h4>
				<SimplePortableText value={description.portableTextBlock as PortableTextBlock[]} />
				<CTAButton
					title={cta.title}
					kind={cta.kind}
					landingPageRoute={cta.landingPageRoute}
					arrow={cta.arrow}
				/>
			</TrainingCopyBlock>
			<TrainingImageBlock>
				<SanityComponentImage
					alt={picture.alt}
					asset={picture.asset}
					crop={picture.crop}
					hotspot={picture.hotspot}
					width={picture.width}
				/>
			</TrainingImageBlock>
			<UpcomingTrainingBlock>
				<div>
					{upcoming !== null && upcoming.length > 0 ? (
						<>
							<h2>Upcoming Classes</h2>
							{upcoming.map((uC) => (
								<p key={uC._key}>
									{formatStartDate(uC.startDate)}
									{uC.availability === 'full' && (
										<span className="red">FULL</span>
									)}
									{uC.availability === 'nearlyFull' && (
										<span className="yellow">FEW SPOTS LEFT</span>
									)}
								</p>
							))}
						</>
					) : (
						<h2>{`${
							trainingType === 'group'
								? 'Check back for availability'
								: 'Contact for more information'
						} `}</h2>
					)}
				</div>
				<div className="calendar-container">
					<CalendarIcon />
				</div>
			</UpcomingTrainingBlock>
			{takeaways !== null && takeaways.length > 0 ? (
				<TrainingTakeawayBlock>
					<h2>You&apos;ll Learn</h2>
					<div className="takeaways">
						{takeaways.map((tA, i) => (
							<TrainingTakeaway key={i}>
								<IconContainer>
									<SanityIcon alt="Paw icon" asset={asset} />
								</IconContainer>
								<p>{tA}</p>
							</TrainingTakeaway>
						))}
					</div>
				</TrainingTakeawayBlock>
			) : null}
		</TrainingContentContainer>
	)
}

export default TrainingComponent
