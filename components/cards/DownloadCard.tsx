'use client'

import React from 'react'
import { DownloadCardProps } from 'types'
import { PortableTextBlock } from 'sanity'
import SanityComponentImage from '../images/SanityComponentImage'
import { PostCardContainer } from './Card.styles'
import { SimplePortableText } from '../portableText/SimplePortableText'
import CTAButton from '../CTA/CTAButton'

const DownloadCard: React.FC<DownloadCardProps> = ({ title, excerpt, image, file }: DownloadCardProps) => (
	<PostCardContainer>
		<SanityComponentImage {...image} className="cardImage" />
		<div className="copy-block">
			<h4>{title}</h4>
			<SimplePortableText value={excerpt.portableTextBlock as PortableTextBlock[]} />
			<CTAButton title="Download PDF" kind="link" arrow={false} fileDownload={file} />
		</div>
	</PostCardContainer>
)

export default DownloadCard
