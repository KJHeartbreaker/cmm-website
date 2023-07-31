'use client'

import { ProgramCardProps } from '@/types'
import { ProgramsGridContainer } from './Grid.styles'
import ProgramCard from '../cards/ProgramCard'

interface ProgramsGridProps {
	programsArr: ProgramCardProps[]
}

export default function ProgramsGrid(props: ProgramsGridProps) {
	const { programsArr } = props

	return (
		<ProgramsGridContainer>
			{programsArr.map((program) => (
				<ProgramCard
					key={program._id}
					name={program.name}
					parent={program.parent}
					slug={program.slug}
					dogName={program.dogName}
					cardImage={program.cardImage}
					_id={program._id}
					trainingType={program.trainingType}
					namePlacement={program.namePlacement}
				/>
			))}
		</ProgramsGridContainer>
	)
}
