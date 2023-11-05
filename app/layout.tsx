/* eslint-disable camelcase */
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'

import { Montserrat, Paytone_One, Kalam } from 'next/font/google'
import React, { Suspense } from 'react'
import Script from 'next/script'
import StyledComponentsRegistry from 'lib/registry'
import { Providers } from 'lib/providers'
import GoogleAnalytics from 'components/utilityComponents/GoogleAnalytics'

export const montserrat = Montserrat({
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

const kalam = Kalam({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-kalam',
	weight: '400',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={`${paytone_one.variable} ${montserrat.variable} ${kalam.variable}`}
		>
			<head>
				<Script id="gtm-script" strategy="afterInteractive">
					{`
					(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-PQFQRB6');`}
				</Script>
			</head>
			<StyledComponentsRegistry>
				<Providers>
					<body>
						<noscript>
							<iframe
								title="gtm-container"
								src="https://www.googletagmanager.com/ns.html?id=GTM-PQFQRB6"
								height="0"
								width="0"
								style={{ display: 'none', visibility: 'hidden' }}
							/>
						</noscript>
						<Suspense fallback={<div>Loading...</div>}>
							<GoogleAnalytics GA_MEASUREMENT_ID="G-9S443J1SCB" />
						</Suspense>
						{children}
					</body>
				</Providers>
			</StyledComponentsRegistry>
		</html>
	)
}
