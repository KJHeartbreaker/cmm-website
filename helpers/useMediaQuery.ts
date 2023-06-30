import { useEffect, useState } from 'react'

export function useMediaQuery(query: any) {
	const [matches, setMatches] = useState(false)
	const [isInitialized, setIsInitialized] = useState(false)

	useEffect(() => {
		const media = window.matchMedia(query)

		const handleMatch = (e: MediaQueryListEvent) => {
			setMatches(e.matches)
		}

		const initialMatch = media.matches

		// Check the initial match on component mount
		if (initialMatch) {
			setMatches(true)
		}
		setIsInitialized(true)

		// Attach the event listener for future changes
		media.addEventListener('change', handleMatch)

		return () => {
			media.removeEventListener('change', handleMatch)
		}
	}, [query])

	return isInitialized ? matches : false
}
