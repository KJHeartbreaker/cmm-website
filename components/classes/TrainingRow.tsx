'use client'

import React from 'react'
import { TrainingSession } from 'types'
import TrainingComponent from './TrainingComponent'

interface TrainingRowProps {
	classes: TrainingSession[]
}

const TrainingRow: React.FC<TrainingRowProps> = ({ classes }: TrainingRowProps) => (
	<>
		{classes.map((training) => (
			<TrainingComponent key={training._id} {...training} />
		))}
	</>
)

export default TrainingRow
