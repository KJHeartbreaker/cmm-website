import { TextAlign } from '@sanity/ui'
import React from 'react'

interface HorizontalRuleProps {
	width: string
	size: string
	align: TextAlign
}

const HorizontalRule: React.FC<HorizontalRuleProps> = (props) => {
	const { width, size, align } = props

	return (
		<hr
			style={{
				margin: `${size}px 0`,
				width: `${width}`,
				textAlign: align,
			}}
		/>
	)
}

export default HorizontalRule
