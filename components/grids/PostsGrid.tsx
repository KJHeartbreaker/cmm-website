'use client'

import React from 'react'

import { PostCardProps } from '@/types'
import { ProgramsGridContainer } from './Grid.styles'
import PostCard from '../cards/PostCard'

interface PostsGridProps {
	postsArr: PostCardProps[]
}

export default function PostsGrid(props: PostsGridProps) {
	const { postsArr } = props

	return (
		<ProgramsGridContainer>
			{postsArr.map((post) => (
				<PostCard
					key={post._id}
					title={post.title}
					slug={post.slug}
					author={post.author}
					image={post.image}
					_id={post._id}
					excerpt={post.excerpt}
				/>
			))}
		</ProgramsGridContainer>
	)
}
