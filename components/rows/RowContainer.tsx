'use client'

import React from 'react'
import { PanelContent } from 'types'

import ThreeColumnRow from './ThreeColumnRow'
import TwoColumnRow from './TwoColumnRow'

interface RowContainerProps {
	row?: string
	content: PanelContent[]
	condensedCopy: boolean
	centerCopy: boolean
	title: string
	hideTitle: boolean
	centerTitle: boolean
	titleColor: string
}

const RowContainer: React.FC<RowContainerProps> = ({
	row,
	content,
	title,
	hideTitle,
	centerTitle,
	titleColor,
	condensedCopy,
	centerCopy,
}: RowContainerProps) => (
	<>
		{row === 'twoColumn' && (
			<TwoColumnRow
				panels={content}
				title={title}
				hideTitle={hideTitle}
				centerTitle={centerTitle}
				titleColor={titleColor}
				condensedCopy={condensedCopy}
				centerCopy={centerCopy}
			/>
		)}
		{row === 'threeColumn' && (
			<ThreeColumnRow
				panels={content}
				title={title}
				hideTitle={hideTitle}
				centerTitle={centerTitle}
				titleColor={titleColor}
				condensedCopy={condensedCopy}
				centerCopy={centerCopy}
			/>
		)}
	</>
)

export default RowContainer
