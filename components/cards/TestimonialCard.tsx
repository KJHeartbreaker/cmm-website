import { SimplePortableText } from 'components/portableText/SimplePortableText'
import React from 'react'
import { PortableTextBlock } from 'sanity'

import SanityIcon from '../images/SanityIcon'

export interface TestimonialCardProps {
	heading: string
	copy: { portableTextBlock: PortableTextBlock[] }
}

const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
	const { heading, copy } = props

	return (
		<div className="flex h-full flex-col items-center bg-white px-20 py-20">
			<div className="h-10 w-10">
				<SanityIcon
					alt="quotation icon"
					asset={{
						_id: 'image-74bf22c191c423627b181dcaa62d11f9d7e970c9-92x92-svg',
					}}
				/>
			</div>
			<div className="mt-8 flex flex-col items-center text-center">
				<SimplePortableText value={copy.portableTextBlock} />
				<h5 className="my-5">{heading}</h5>
			</div>
		</div>
	)
}

export default TestimonialCard
