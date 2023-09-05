import { VideoWrapper } from '@/styles/Wrappers'
import React from 'react'
import YouTube from 'react-youtube'

const YouTubePlayer = ({ videoId }) => {
	// Set up event handlers
	const onReady = (event) => {
		// Access the player instance
		// eslint-disable-next-line no-unused-vars
		const player = event.target

		// For example, you can automatically play the video
		// player.playVideo()
	}

	const onError = (error) => {
		console.error('YouTube Player Error:', error)
	}

	return (
		<VideoWrapper>
			<YouTube videoId={videoId} onReady={onReady} onError={onError} />
		</VideoWrapper>
	)
}

export default YouTubePlayer
