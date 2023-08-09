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
	centerContent,
	title,
	hideTitle,
	centerTitle,
	titleColor,
	condensedCopy,
	centerCopy,
}: RowContainerProps) => (
	<>
		{row === 'singleColumn' && (
			<SingleColumnRowComponent panels={content} centerContent={centerContent!} />
		)}
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
