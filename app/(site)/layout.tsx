/* eslint-disable camelcase */

import React from 'react'

import { Footer } from 'components/global/footer/Footer'
import { Navbar } from 'components/global/navigation/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import PreviewProvider from 'components/preview/PreviewProvider'
import { Providers } from 'lib/providers'
import StyledComponentsRegistry from 'lib/registry'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { settingsQuery } from 'lib/sanity.queries'
import { draftMode } from 'next/headers'
import { SettingsPayload } from 'types'

const fallbackSettings: SettingsPayload = {
	menuItems: [],
	logos: [],
}

export default async function IndexRoute({ children }: { children: React.ReactNode }) {
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)
	const settings = (await client.fetch<SettingsPayload | null>(settingsQuery)) ?? fallbackSettings

	const layout = (
		<StyledComponentsRegistry>
			<Providers>
				{preview && <PreviewBanner />}
				<Navbar menuItems={settings.menuItems} />
				<main>{children}</main>
				<Footer menuItems={settings.menuItems} logos={settings.logos} />
			</Providers>
		</StyledComponentsRegistry>
	)

	if (preview) {
		return <PreviewProvider token={preview.token}>{layout}</PreviewProvider>
	}

	return layout
}
