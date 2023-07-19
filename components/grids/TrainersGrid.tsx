'use client'

import { Trainer } from '@/types'
import TrainerCard from '../cards/TrainerCard'
import { TrainersGridContainer } from './Grid.styles'

interface TrainersGridProps {
	trainers: Trainer[]
}

export default function TrainersGrid(props: TrainersGridProps) {
	const { trainers } = props

	return (
		<TrainersGridContainer>
			{trainers.map((trainer) => (
				<TrainerCard
					key={trainer._id}
					name={trainer.name}
					slug={trainer.slug}
					// @ts-ignore
					certs={trainer.certifications}
					image={trainer.picture}
				/>
			))}
		</TrainersGridContainer>
	)
}
