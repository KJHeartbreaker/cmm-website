import styled from 'styled-components'
import { device } from './Breakpoints'

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	position: relative;
	justify-content: center;
	align-items: center;
	padding-top: 40px;
	padding-bottom: 60px;

	&.has-bg {
		padding-top: 40px;
		padding-bottom: 40px;
	}

	&.short {
		padding-bottom: 0;
	}

	&.skinny {
		padding-top: 20px;
		padding-bottom: 20px;
	}

	@media ${device.sm} {
		padding-top: 60px;
		padding-bottom: 80px;

		&.has-bg {
			padding-top: 80px;
			padding-bottom: 80px;
		}
	}

	@media ${device.md} {
		padding-top: 100px;
		padding-bottom: 140px;

		&.has-bg {
			padding-top: 140px;
			padding-bottom: 140px;
		}
	}
`

export const ContentContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding: 0;
	padding: 0 20px;

	@media ${device.sm} {
		max-width: 720px;
		padding: 0;
	}

	@media ${device.md} {
		max-width: 960px;
	}

	@media ${device.lg} {
		max-width: 1280px;
	}

	@media ${device.xl} {
		max-width: 1440px;
	}

	@media ${device.xxl} {
		max-width: 1600px;
	}
`

export const VideoWrapper = styled.div`
	div {
		width: 100%;
		max-width: 800px; /* Adjust as needed */
		height: 0;
		padding-bottom: 56.25%; /* 16:9 aspect ratio (9 / 16 * 100) */
		position: relative;

		iframe {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
`
