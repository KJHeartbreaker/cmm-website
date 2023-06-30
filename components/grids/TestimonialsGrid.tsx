import TestimonialCard, { TestimonialCardProps } from '../cards/TestimonialCard'

interface TestimonialsGridProps {
	panels: TestimonialCardProps[]
}

export default function TestimonialsGrid({ panels }: TestimonialsGridProps) {
	return (
		<div className="z-10 grid w-full grid-cols-2 items-center justify-center gap-5 xl:max-w-7xl">
			{panels.map((panel, i) => (
				<TestimonialCard key={i} heading={panel.heading} copy={panel.copy} />
			))}
		</div>
	)
}
