import ScrollUp from 'components/shared/ScrollUp'
import { getContent } from 'helpers/getContent'
import type { PagePayload } from 'types'

export interface PageProps {
	data: PagePayload | null
}

export function Page({ data }: PageProps) {
	// Default to an empty object to allow previews on non-existent documents
	const { content, overview, title } = data ?? {}

	const bodyContent = getContent(content)

	return (
		<div>
			{/* Body */}
			{bodyContent}

			{/* Workaround: scroll to top on route change */}
			<ScrollUp />
		</div>
	)
}
