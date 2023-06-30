import React from 'react'
import { PanelContent } from 'types'

import SingleColumnRowContainer from './SingleColumnRow'
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
		<div className="z-10 flex w-full flex-row xl:max-w-7xl">
			{row === 'singleColumn' && <SingleColumnRowContainer panels={content} centerContent={centerContent!} />}
			{row === 'twoColumn' && <TwoColumnRow panels={content} />}
			{row === 'threeColumn' && <ThreeColumnRow panels={content} />}
		</div>
	)
}

export default RowContainer
