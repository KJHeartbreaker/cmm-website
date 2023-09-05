import { getContent } from 'helpers/getContent'
import type { PagePayload } from 'types'

export interface PageProps {
	data: PagePayload | null
}

export function Page({ data }: PageProps) {
	// Default to an empty object to allow previews on non-existent documents
	const { content } = data ?? {}

	const bodyContent = getContent(content)

	return <div>{bodyContent}</div>
}
