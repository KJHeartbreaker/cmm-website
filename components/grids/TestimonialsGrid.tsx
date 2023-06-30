'use client'

import TestimonialCard, { TestimonialCardProps } from '../cards/TestimonialCard'
import { TestimonialGridContainer } from './Grid.styles'

interface TestimonialsGridProps {
	panels: TestimonialCardProps[]
}

export default function TestimonialsGrid({ panels }: TestimonialsGridProps) {
	return (
		<TestimonialGridContainer>
			{panels.map((panel, i) => (
				<TestimonialCard key={i} heading={panel.heading} copy={panel.copy} />
			))}
		</TestimonialGridContainer>
	)
}
