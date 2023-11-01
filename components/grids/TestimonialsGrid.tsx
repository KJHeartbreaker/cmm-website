'use client'

import TestimonialCard, { TestimonialCardProps } from '../cards/TestimonialCard'
import { StyledTitle, TestimonialsGridContainer, TestimonialsContainer } from './Grid.styles'

interface TestimonialsGridProps {
	title?: string
	titleColor: string
	panels: TestimonialCardProps[]
}

export default function TestimonialsGrid({ title, titleColor, panels }: TestimonialsGridProps) {
	return (
		<TestimonialsContainer>
			{title && <StyledTitle titleColor={titleColor}>{title}</StyledTitle>}
			<TestimonialsGridContainer>
				{panels.map((panel, i) => (
					<TestimonialCard key={i} heading={panel.heading} copy={panel.copy} />
				))}
			</TestimonialsGridContainer>
		</TestimonialsContainer>
	)
}
