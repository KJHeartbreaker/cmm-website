/* eslint-disable camelcase */
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'

import { Montserrat, Paytone_One } from 'next/font/google'
import React from 'react'
import StyledComponentsRegistry from 'lib/registry'
import { Providers } from 'lib/providers'

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${paytone_one.variable} ${montserrat.variable}`}>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				{/* @ts-ignore */}
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Paytone+One&display=swap"
					rel="stylesheet"
				/>
			</head>
			<StyledComponentsRegistry>
				<Providers>
					<body>{children}</body>
				</Providers>
			</StyledComponentsRegistry>
		</html>
	)
}
