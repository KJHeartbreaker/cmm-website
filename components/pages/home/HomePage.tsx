import { Header } from 'components/shared/Header'
import ScrollUp from 'components/shared/ScrollUp'
import type { HomePagePayload } from 'types'

export interface HomePageProps {
	data: HomePagePayload | null
}

export function HomePage({ data }: HomePageProps) {
	// Default to an empty object to allow previews on non-existent documents
	const { overview = [], title = '' } = data ?? {}

	return (
		<div className="space-y-20">
			{/* Header */}
			{title && <Header centered title={title} description={overview} />}

			{/* Workaround: scroll to top on route change */}
			<ScrollUp />
		</div>
	)
}
