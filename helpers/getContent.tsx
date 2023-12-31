/* eslint-disable no-case-declarations */
import React from 'react'
import TrainersGrid from 'components/grids/TrainersGrid'
import HeroBanner from 'components/banners/HeroBanner'
import MapBanner from 'components/banners/MapBanner'
import CustomComponentContainer from 'components/customComponents/CustomComponentContainer'
import ProductGrid from 'components/grids/ProductGrid'
import TestimonialsGrid from 'components/grids/TestimonialsGrid'
import RowContainer from 'components/rows/RowContainer'
import ContentBlock from 'components/utilityComponents/ContentBlock'
import {
	PanelContent,
	ProductCardProps,
	ProgramCardProps,
	TestimonialCardProps,
	Trainer,
	TrainingSession,
} from 'types'
import TrainingRow from 'components/classes/TrainingRow'
import ProgramsGrid from 'components/grids/ProgramsGrid'
import SingleColumnContentBlock from 'components/rows/SingleColumnBlock'
import { PortableTextBlock } from 'sanity'
import PostsGrid from 'components/grids/PostsGrid'
import { IconCardProps } from 'components/cards/IconCard'
import RelatedResourcesGrid from '@/components/grids/RelatedResourcesGrid'

interface PageContent {
	_key: string
	_type: string
	disabled?: boolean
	rows?: PanelContent[]
	rowContent?: PanelContent[]
	contentBlock: {
		portableTextBlock: PortableTextBlock[]
	}
	row?: string
	heading: string
	subheading: any
	copy: any
	size: 'standard' | 'x-large'
	cta: any
	copyColor: any
	subHeadingColor: any
	headingColor: any
	image: any
	backgroundColor: string | undefined
	centerContent: boolean
	centerTitle: boolean
	removeBottomPadding: boolean
	skinny: boolean
	posts: any
	productsArr: ProductCardProps[]
	programs: ProgramCardProps[]
	testimonialsArr: TestimonialCardProps[]
	trainers: Trainer[]
	classRefs: TrainingSession[]
	title: string
	titleColor: string
	hideTitle: boolean
	condensedCopy: boolean
	centerCopy: boolean
	overlay: 'noOverlay' | 'darkOverlay' | 'blueOverlay'
	map: string
	mapLink: string
	iconCards: IconCardProps[]
	relatedResources: any
}

export function getContent(content: PageContent[]) {
	if (!content) return null

	const elements = content
		.filter((c) => !c.disabled)
		.map((c) => {
			let el
			switch (c._type) {
				case 'Hero Banner':
					el = <HeroBanner key={c._key} imageOverlay={c.overlay} {...c} />
					break
				case 'Single Column Content Block':
					el = (
						<ContentBlock
							key={c._key}
							bgColor={c.backgroundColor}
							overlay="noOverlay"
							removeBottomPadding={c.removeBottomPadding}
							skinny={c.skinny}
						>
							<SingleColumnContentBlock
								key={c._key}
								content={c.contentBlock!}
								centerContent={c.centerContent}
							/>
						</ContentBlock>
					)
					break
				case 'Content Rows':
					el = (
						<ContentBlock
							key={c._key}
							bgImage={c.image ? c.image : null}
							overlay={c.overlay}
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
							skinny={false}
						>
							<RowContainer
								key={c._key}
								content={c.rowContent!}
								row={c.row}
								title={c.title}
								titleColor={c.titleColor}
								hideTitle={c.hideTitle}
								centerTitle={c.centerTitle}
								condensedCopy={c.condensedCopy}
								centerCopy={c.centerCopy}
							/>
						</ContentBlock>
					)
					break
				case 'Product Grid':
					el = (
						<ContentBlock
							key={c._key}
							bgImage={c.image ? c.image : null}
							overlay={c.overlay}
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
							skinny={false}
						>
							<ProductGrid panels={c.productsArr} />
						</ContentBlock>
					)
					break
				case 'Trainers Grid':
					el = (
						<ContentBlock
							key={c._key}
							bgImage={null}
							overlay="noOverlay"
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
							skinny={false}
						>
							<TrainersGrid trainers={c.trainers} />
						</ContentBlock>
					)
					break
				case 'Programs Grid':
					el = (
						<ContentBlock
							key={c._key}
							bgImage={null}
							overlay="noOverlay"
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
							skinny={false}
						>
							<ProgramsGrid programsArr={c.programs} />
						</ContentBlock>
					)
					break
				case 'Posts Grid':
					el = (
						<ContentBlock
							key={c._key}
							bgImage={null}
							overlay="noOverlay"
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
							skinny={false}
						>
							<PostsGrid postsArr={c.posts} />
						</ContentBlock>
					)
					break
				case 'Related Resources':
					el = (
						<ContentBlock
							key={c._key}
							bgImage={null}
							overlay="noOverlay"
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
							skinny
						>
							<RelatedResourcesGrid
								title={c.title}
								titleColor={c.titleColor}
								backgroundColor={c.backgroundColor!}
								relatedResourcesArr={c.relatedResources}
							/>
						</ContentBlock>
					)
					break
				case 'Class Row':
					el = (
						<ContentBlock
							key={c._key}
							bgImage={null}
							overlay="noOverlay"
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
							skinny={false}
						>
							<TrainingRow classes={c.classRefs} />
						</ContentBlock>
					)
					break
				case 'Testimonials':
					const transformedTestimonials = c.testimonialsArr.map((testimonial) => ({
						...testimonial,
						copy: {
							portableTextBlock: testimonial.copy.portableTextBlock.map((block) => ({
								...block,
								_key: block._key || '',
							})),
						},
					}))

					el = (
						<ContentBlock
							key={c._key}
							bgImage={c.image ? c.image : null}
							overlay={c.overlay}
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
							skinny={c.skinny}
						>
							<TestimonialsGrid
								panels={transformedTestimonials}
								title={c.title}
								titleColor={c.titleColor}
							/>
						</ContentBlock>
					)
					break
				case 'Custom Component':
					el = (
						<CustomComponentContainer
							key={c._key}
							rows={c.rows!}
							bgImage={c.image || null}
							overlay={c.overlay}
							bgColor={c.backgroundColor || undefined}
							removeBottomPadding={c.removeBottomPadding || false}
						/>
					)
					break
				case 'Contact Page Map':
					el = (
						<MapBanner
							map={c.map}
							mapLink={c.mapLink}
							copy={c.copy}
							iconCards={c.iconCards}
						/>
					)
					break
				default:
					el = null
			}

			return el
		})

	return elements
}
