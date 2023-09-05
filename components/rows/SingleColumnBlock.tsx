'use client'

import { CustomPortableText } from 'components/portableText/CustomPortableText'
import { PortableTextBlock } from 'sanity'
import { SingleColumnRowContainer } from './Row.styles'

interface SingleColumnContentBlockProps {
	centerContent: boolean
	content: {
		portableTextBlock: PortableTextBlock[]
	}
}

export default function SingleColumnContentBlock(props: SingleColumnContentBlockProps) {
	const { centerContent, content } = props
	const { portableTextBlock } = content

	return (
		<SingleColumnRowContainer className={centerContent ? 'centered' : ''}>
			{portableTextBlock && <CustomPortableText value={portableTextBlock} />}
		</SingleColumnRowContainer>
	)
}
