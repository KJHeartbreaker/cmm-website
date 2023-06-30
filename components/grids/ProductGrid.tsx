import ProductCard, { ProductCardProps } from '../cards/ProductCard'

interface ProductGridProps {
	panels: ProductCardProps[]
}

export default function ProductGrid(props: ProductGridProps) {
	const { panels } = props

	return (
		<div className="grid grid-cols-3 items-center justify-center gap-5">
			{panels.map((panel) => (
				<ProductCard
					key={panel.key}
					image={panel.image}
					heading={panel.heading}
					price={panel.price}
					cta={panel.cta}
				/>
			))}
		</div>
	)
}
