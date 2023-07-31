'use client'

import React from 'react'
import Link from 'next/link'
import { ProgramCardProps } from 'types'
import SanityComponentImage from '../images/SanityComponentImage'
import { ProgramCardContainer } from './Card.styles'

const ProgramCard: React.FC<ProgramCardProps> = ({
	name,
	parent,
	slug,
	trainingType,
	dogName,
	namePlacement,
	cardImage,
}: ProgramCardProps) => {
	const method =
		trainingType === 'group'
			? 'Group Class'
			: trainingType === 'private'
			? 'Private One-on-One Training'
			: trainingType === 'onDemand'
			? 'On Demand'
			: null

	const hrefSlug = parent ? `/${parent.slug.current}#${slug.current}` : `/${slug.current}`

	return (
		<ProgramCardContainer>
			<Link href={hrefSlug} passHref>
				<h4 className={`dog-name ${namePlacement}`}>{dogName}</h4>
				<SanityComponentImage {...cardImage} />
			</Link>
			<div className="copy-block">
				<Link href={hrefSlug} passHref>
					<h4>{name}</h4>
				</Link>
				<p>{method}</p>
			</div>
		</ProgramCardContainer>
	)
}

export default ProgramCard
