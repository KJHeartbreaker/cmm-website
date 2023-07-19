'use client'

import { SimplePortableText } from 'components/portableText/SimplePortableText'
import { Trainer } from 'types'
import { PortableTextBlock } from 'sanity'
import {
	TrainerRow,
	TrainerRowLSCopy,
	TrainerRowLeftSide,
	TrainerRowRightSide,
	TrainersPageContainer,
} from './CustomComponent.styles'
import SanityComponentImage from '../images/SanityComponentImage'

interface TrainersCustomComponentProps {
	trainers: Trainer[]
}

export default async function TrainersCustomComponent({ trainers }: TrainersCustomComponentProps) {
	return (
		<TrainersPageContainer>
			{trainers.map((tr) => (
				<TrainerRow key={tr._id} id={tr.slug.current}>
					<TrainerRowLeftSide>
						<SanityComponentImage asset={tr.picture.asset} alt={tr.picture.alt} />
						<TrainerRowLSCopy>
							{tr.certifications && <h3>Certifications</h3>}
							<div className="mt-5">
								{tr.certifications ? (
									<SimplePortableText
										value={tr.certifications.portableTextBlock as PortableTextBlock[]}
									/>
								) : null}
							</div>
						</TrainerRowLSCopy>
					</TrainerRowLeftSide>
					<TrainerRowRightSide>
						<h2 className="text-grey33">{tr.name}</h2>
						<h3 className="text-orange">{tr.role}</h3>
						<div className="mt-5">
							{tr.bio ? (
								<SimplePortableText value={tr.bio.portableTextBlock as PortableTextBlock[]} />
							) : null}
						</div>
					</TrainerRowRightSide>
				</TrainerRow>
			))}
		</TrainersPageContainer>
	)
}
