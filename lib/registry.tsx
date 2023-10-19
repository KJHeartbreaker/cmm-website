'use client'

/* eslint-disable react/jsx-no-useless-fragment */

import { useServerInsertedHTML } from 'next/navigation'
import React, { useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
	// Only create stylesheet once with lazy initial state
	// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement()
		// @ts-ignore
		styledComponentsStyleSheet.instance.clearTag()
		return styles
	})

	// This implements the default behavior from styled-components v5
	const shouldForwardProp = (propName, target) => {
		if (typeof target === 'string') {
			// For HTML elements, forward the prop if it is a valid HTML attribute
			return isPropValid(propName)
		}
		// For other elements, forward all props
		return true
	}

	if (typeof window !== 'undefined') return <>{children}</>

	return (
		<StyleSheetManager
			sheet={styledComponentsStyleSheet.instance}
			shouldForwardProp={shouldForwardProp}
		>
			{children}
		</StyleSheetManager>
	)
}
