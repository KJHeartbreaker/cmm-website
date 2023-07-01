'use client'

import React from 'react'
import { PanelContent } from 'types'

import SingleColumnRowContainer from './SingleColumnRow'
import ThreeColumnRow from './ThreeColumnRow'
import TwoColumnRow from './TwoColumnRow'
import { StyledRowContainer } from './Row.styles'

interface RowContainerProps {
	row?: string
	content: PanelContent[]
	centerContent?: boolean
}

const RowContainer: React.FC<RowContainerProps> = (props) => {
	const { row, content, centerContent } = props

	return (
		<StyledRowContainer>
			{row === 'singleColumn' && <SingleColumnRowContainer panels={content} centerContent={centerContent!} />}
			{row === 'twoColumn' && <TwoColumnRow panels={content} />}
			{row === 'threeColumn' && <ThreeColumnRow panels={content} />}
		</StyledRowContainer>
	)
}

export default RowContainer
