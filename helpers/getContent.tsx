/* eslint-disable no-case-declarations */
import TrainersGrid from 'components/grids/TrainersGrid'
import HeroBanner from 'components/banners/HeroBanner'
import CustomComponentContainer from 'components/customComponents/CustomComponentContainer'
import ProductGrid from 'components/grids/ProductGrid'
import TestimonialsGrid from 'components/grids/TestimonialsGrid'
import RowContainer from 'components/rows/RowContainer'
import ContentBlock from 'components/utilityComponents/ContentBlock'
import React from 'react'
import { GroupClass, PanelContent, ProductCardProps, TestimonialCardProps, Trainer } from 'types'
import ClassRow from 'components/classes/ClassRow'

interface PageContent {
	_key: string
	_type: string
	disabled?: boolean
	rows?: PanelContent[]
	rowContent?: PanelContent[]
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
	removeBottomPadding: boolean
	productsArr: ProductCardProps[]
	testimonialsArr: TestimonialCardProps[]
	trainers: Trainer[]
	classRefs: GroupClass[]
}

export function getContent(content: PageContent[]) {
	if (!content) return null

	const elements = content
		.filter((c) => !c.disabled)
		.map((c) => {
			let el
			switch (c._type) {
				case 'Hero Banner':
					el = <HeroBanner key={c._key} {...c} />
					break
				case 'Single Column Content Row':
					el = (
						<ContentBlock bgColor={c.backgroundColor} removeBottomPadding={c.removeBottomPadding}>
							<RowContainer
								key={c._key}
								content={c.rowContent!}
								row={c.row}
								centerContent={c.centerContent}
							/>
						</ContentBlock>
					)
					break
				case 'Content Rows':
					el = (
						<ContentBlock
							bgImage={c.image ? c.image : null}
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
						>
							<RowContainer
								key={c._key}
								content={c.rowContent!}
								row={c.row}
								centerContent={c.centerContent ? c.centerContent : false}
							/>
						</ContentBlock>
					)
					break
				case 'Product Grid':
					el = (
						<ContentBlock
							bgImage={c.image ? c.image : null}
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
						>
							<ProductGrid panels={c.productsArr} />
						</ContentBlock>
					)
					break
				case 'Trainers Grid':
					el = (
						<ContentBlock
							bgImage={null}
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
						>
							<TrainersGrid trainers={c.trainers} />
						</ContentBlock>
					)
					break
				case 'Class Row':
					console.log('c: ', c)

					el = (
						<ContentBlock
							bgImage={null}
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
						>
							<ClassRow classes={c.classRefs} />
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
							bgImage={c.image ? c.image : null}
							bgColor={c.backgroundColor}
							removeBottomPadding={c.removeBottomPadding}
						>
							<TestimonialsGrid panels={transformedTestimonials} />
						</ContentBlock>
					)
					break
				case 'Custom Component':
					el = (
						<CustomComponentContainer
							key={c._key}
							rows={c.rows!}
							bgImage={c.image || null}
							bgColor={c.backgroundColor || undefined}
							removeBottomPadding={c.removeBottomPadding || false}
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
