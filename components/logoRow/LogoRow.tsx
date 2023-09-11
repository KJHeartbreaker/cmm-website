'use client'

import React from 'react'
import { SanityLogoProps } from 'types'
import SanityLogo from '../images/SanityLogo'
import { LogoRowContainer } from './LogoRow.styles'

interface LogoRowProps {
	logos: SanityLogoProps[]
}

const LogoRow: React.FC<LogoRowProps> = ({ logos }: LogoRowProps) => (
	<LogoRowContainer>
		{logos.map((Logo) => (
			<SanityLogo key={Logo._key} {...Logo} />
		))}
	</LogoRowContainer>
)

export default LogoRow
