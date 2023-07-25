'use client'

import React from 'react'
import { PanelContent } from 'types'

import SingleColumnRowComponent from './SingleColumnRow'
import ThreeColumnRow from './ThreeColumnRow'
import TwoColumnRow from './TwoColumnRow'

interface RowContainerProps {
	row?: string
	content: PanelContent[]
	centerContent?: boolean
}

const RowContainer: React.FC<RowContainerProps> = (props) => {
	const { row, content, centerContent } = props

	return (
		<>
			{row === 'singleColumn' && (
				<SingleColumnRowComponent panels={content} centerContent={centerContent!} />
			)}
			{row === 'twoColumn' && <TwoColumnRow panels={content} />}
			{row === 'threeColumn' && <ThreeColumnRow panels={content} />}
		</>
	)
}

export default RowContainer
