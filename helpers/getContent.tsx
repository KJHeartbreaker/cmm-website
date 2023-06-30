import HeroBanner from 'components/banners/HeroBanner'
import CustomComponentContainer from 'components/customComponents/CustomComponentContainer'
import ProductGrid from 'components/grids/ProductGrid'
import TestimonialsGrid from 'components/grids/TestimonialsGrid'
import RowContainer from 'components/rows/RowContainer'
import ContentBlock from 'components/utilityComponents/ContentBlock'
import React from 'react'
import { PanelContent, ProductCardProps, TestimonialCardProps } from 'types'

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
	bottomPadding: boolean
	productsArr: ProductCardProps[]
	testimonialsArr: TestimonialCardProps[]
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
						<ContentBlock
							classes="border-2 border-[#ff0000]"
							bgColor={c.backgroundColor}
							removeBottomPadding={c.bottomPadding}
						>
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
							classes="border-2 border-[#ff0077]"
							bgImage={c.image ? c.image : null}
							bgColor={c.backgroundColor}
							removeBottomPadding={c.bottomPadding}
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
							classes="border-2 border-[#0077ff]"
							bgImage={c.image ? c.image : null}
							bgColor={c.backgroundColor}
							removeBottomPadding={c.bottomPadding}
						>
							<ProductGrid panels={c.productsArr} />
						</ContentBlock>
					)
					break
				case 'Testimonials':
					el = (
						<ContentBlock
							classes="border-2 border-[#0077ff]"
							bgImage={c.image ? c.image : null}
							bgColor={c.backgroundColor}
							removeBottomPadding={c.bottomPadding}
						>
							<TestimonialsGrid panels={c.testimonialsArr} />
						</ContentBlock>
					)
					break
				case 'Custom Component':
					el = (
						<ContentBlock
							classes="border-2 border-[#7777ff]"
							bgColor={c.backgroundColor}
							removeBottomPadding={c.bottomPadding}
						>
							<CustomComponentContainer key={c._key} rows={c.rows!} />
						</ContentBlock>
					)
					break
				default:
					el = null
			}

			return el
		})

	return elements
}
