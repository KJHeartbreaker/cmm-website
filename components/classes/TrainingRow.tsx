'use client'

import React from 'react'
import { TrainingSession } from 'types'
import TrainingComponent from './TrainingComponent'

interface TrainingRowProps {
    classes: TrainingSession[]
}

const TrainingRow: React.FC<TrainingRowProps> = ({classes} : TrainingRowProps) => {
    return (
        <>
            {classes.map(training => (
                <TrainingComponent {...training} />
            ))}
        </>
    )
}

export default TrainingRow
