'use client'

import { PropsWithChildren } from 'react'

import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

export function Providers({ children }: PropsWithChildren) {
	return (
		<>
			{/* @ts-ignore */}
			<GlobalStyles />
			<Typography />
			{children}
		</>
	)
}
