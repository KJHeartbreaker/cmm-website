'use client'

import { PortableTextBlock } from 'sanity'
import { CustomPortableText } from 'components/portableText/CustomPortableText'
import { PanelContent } from 'types'
import { SingleColumnRowContainer } from './Row.styles'

interface SingleColumnRowComponentProps {
	panels: PanelContent[]
	centerContent: boolean
}

export default function SingleColumnRowComponent(props: SingleColumnRowComponentProps) {
	const { centerContent, panels } = props
	const { portableTextBlock } = panels[0]

	return (
		<SingleColumnRowContainer>
			<div
				className={`flex flex-col ${
					centerContent ? 'justify-center text-center' : 'justify-start'
				}`}
			>
				{/* @ts-ignore */}
				<CustomPortableText value={portableTextBlock! as PortableTextBlock[]} />
			</div>
		</SingleColumnRowContainer>
	)
}
