/* eslint-disable camelcase */

// import '../../styles/globals.css'

import React from 'react'

import { Footer } from 'components/global/footer/Footer'
import { Navbar } from 'components/global/navigation/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import PreviewProvider from 'components/preview/PreviewProvider'
import IntroTemplate from 'intro-template'
import { Providers } from 'lib/providers'
import StyledComponentsRegistry from 'lib/registry'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { settingsQuery } from 'lib/sanity.queries'
import { draftMode } from 'next/headers'
import { SettingsPayload } from 'types'
import { Montserrat, Paytone_One } from 'next/font/google'

const fallbackSettings: SettingsPayload = {
	menuItems: [],
}

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
})

const paytone_one = Paytone_One({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-paytone-one',
	weight: '400',
})

export default async function IndexRoute({ children }: { children: React.ReactNode }) {
	const preview = draftMode().isEnabled ? { token: readToken! } : undefined
	const client = getClient(preview)
	const settings = (await client.fetch<SettingsPayload | null>(settingsQuery)) ?? fallbackSettings

	const layout = (
		<html lang="en" className={`${paytone_one.variable} ${montserrat.variable}`}>
			<body>
				<StyledComponentsRegistry>
					<Providers>
						{preview && <PreviewBanner />}
						<Navbar menuItems={settings.menuItems} />
						<main>{children}</main>
						<Footer menuItems={settings.menuItems} />
						<IntroTemplate />
					</Providers>
				</StyledComponentsRegistry>
			</body>
		</html>
	)

	if (preview) {
		return <PreviewProvider token={preview.token}>{layout}</PreviewProvider>
	}

	return layout
}
