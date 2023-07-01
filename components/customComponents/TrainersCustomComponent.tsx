'use client'

import { SimplePortableText } from 'components/portableText/SimplePortableText'
import { getTrainers } from 'lib/sanity.queries'
import { useEffect, useState } from 'react'
import { Refs, Trainer } from 'types'

import { PortableTextBlock } from 'sanity'
import SanityComponentImage from '../images/SanityComponentImage'
import {
	TrainerRow,
	TrainerRowLSCopy,
	TrainerRowLeftSide,
	TrainerRowRightSide,
	TrainersPageContainer,
} from './CustomComponent.styles'

interface TrainersCustomComponentProps {
	trainerRefs: Refs[]
}

export default function TrainersCustomComponent({ trainerRefs }: TrainersCustomComponentProps) {
	const [loading, setLoading] = useState<boolean>(true)
	const [trainers, setTrainers] = useState<Trainer[]>([])

	useEffect(() => {
		const fetchTrainers = async () => {
			const trainersData: Trainer[] = await Promise.all(trainerRefs.map(async (tr) => getTrainers(tr._ref)))
			setLoading(false)
			setTrainers(trainersData)
		}

		fetchTrainers()
	}, [trainerRefs])

	return (
		<TrainersPageContainer>
			{loading ? (
				<h1>Content is loading...</h1>
			) : (
				<>
					{trainers.map((tr) => (
						<TrainerRow key={tr._id}>
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
				</>
			)}
		</TrainersPageContainer>
	)
}
