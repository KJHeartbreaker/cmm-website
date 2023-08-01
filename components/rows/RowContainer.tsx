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
			/>
		)}
		{row === 'threeColumn' && (
			<ThreeColumnRow
				panels={content}
				title={title}
				hideTitle={hideTitle}
				centerTitle={centerTitle}
				titleColor={titleColor}
			/>
		)}
	</>
)

export default RowContainer
