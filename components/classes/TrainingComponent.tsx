'use client'

import React from 'react'
import { PortableTextBlock } from 'sanity'
import { TrainingSession } from 'types'
import Link from 'next/link'
import moment from 'moment'
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
	upcoming22,
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

	const formatStartDate = (startDate) => moment(startDate).format('MMMM Do YYYY')

	return (
		<TrainingContentContainer id={slug.current} className="has-bg">
			<TrainingCopyBlock>
				<h5>{type}</h5>
				<h2>{name}</h2>
				{price ? (
					<h4>${price}</h4>
				) : (
					<Link href="/contact">
						<h4>Contact Us</h4>
					</Link>
				)}
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
					{upcoming22 !== null && upcoming22.length > 0 ? (
						<>
							<h2>Upcoming Classes</h2>
							{upcoming22.map((uC) => (
								<p key={uC._key}>
									{formatStartDate(uC.startDate)} at {uC.startTime}{' '}
									{uC.amPm.toUpperCase()}
									{uC.availability === 'full' && (
										<span className="red">FULL</span>
									)}
									{uC.availability === 'nearlyFull' && (
										<span className="yellow">FEW SPOTS LEFT</span>
									)}
								</p>
							))}
						</>
					) : trainingType === 'group' ? (
						<h2>Check back for availability</h2>
					) : (
						<Link href="/contact">
							<h2>Contact for more information</h2>
						</Link>
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
