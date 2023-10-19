'use client'

import React from 'react'
import { PostCardProps, DownloadCardProps } from '@/types'
import {
	RelatedResourcesGridContainer,
	RelatedResourcesRowContainer,
	StyledTitle,
} from './Grid.styles'
import PostCard from '../cards/PostCard'
import DownloadCard from '../cards/DownloadCard'

interface RelatedResourcesGridProps {
	relatedResourcesArr: (PostCardProps | DownloadCardProps)[]
	title: string
	titleColor: string
	backgroundColor: string
}

export default function RelatedResourcesGrid({
	title,
	titleColor,
	backgroundColor,
	relatedResourcesArr,
}: RelatedResourcesGridProps) {
	return (
		<RelatedResourcesRowContainer style={{ backgroundColor }}>
			<StyledTitle titleColor={titleColor}>{title}</StyledTitle>
			<RelatedResourcesGridContainer>
				{relatedResourcesArr.map((rr, i) => (
					<div key={`${rr._id}-${i}`}>
						{rr._type === 'post' ? (
							<PostCard
								title={rr.title}
								slug={(rr as PostCardProps).slug}
								author={(rr as PostCardProps).author}
								image={rr.image}
								_id={rr._id}
								excerpt={rr.excerpt}
								_type={rr._type}
							/>
						) : (
							<DownloadCard
								title={rr.title}
								image={rr.image}
								_id={rr._id}
								excerpt={rr.excerpt}
								file={(rr as DownloadCardProps).file}
								_type={rr._type}
							/>
						)}
					</div>
				))}
			</RelatedResourcesGridContainer>
		</RelatedResourcesRowContainer>
	)
}
