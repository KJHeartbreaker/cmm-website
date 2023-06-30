/* eslint-disable @next/next/no-html-link-for-pages */

'use client'

import { PreviewBannerContainer } from './PreviewBanner.styles'

export function PreviewBanner() {
	return (
		<PreviewBannerContainer>
			<p>Previewing draft content.</p>
			<a href="/api/exit-preview">Exit preview mode</a>
		</PreviewBannerContainer>
	)
}
