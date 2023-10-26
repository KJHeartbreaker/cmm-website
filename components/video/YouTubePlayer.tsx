'use client'

import { VideoWrapper } from '@/styles/Wrappers'
import React, { useRef, useState, useEffect } from 'react'
import YouTube, { YouTubeEvent } from 'react-youtube'

interface LazyYouTubePlayerProps {
	videoId: string
}

const LazyYouTubePlayer: React.FC<LazyYouTubePlayerProps> = ({ videoId }) => {
	const [loadVideo, setLoadVideo] = useState(false)
	const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const currentRef = containerRef.current // Capture the current ref value

		const observer = new IntersectionObserver(
			(entries, observerInstance) => {
				if (entries[0].isIntersecting) {
					setLoadVideo(true)
					observerInstance.unobserve(currentRef as Element)
				}
			},
			{
				rootMargin: '100px 0px',
			}
		)

		if (currentRef) {
			observer.observe(currentRef)
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef)
			}
		}
	}, [])

	// Set up event handlers
	const onReady = (event: { target: YT.Player }) => {
		// Access the player instance
		const player = event.target

		// For example, you can automatically play the video
		// player.playVideo()
	}

	const onError = (event: YouTubeEvent<number>) => {
		console.error('YouTube Player Error:', event)
	}

	return (
		<VideoWrapper ref={containerRef}>
			{loadVideo && <YouTube videoId={videoId} onReady={onReady} onError={onError} />}
		</VideoWrapper>
	)
}

export default LazyYouTubePlayer
