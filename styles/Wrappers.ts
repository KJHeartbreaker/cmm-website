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

	&.even {
		padding-bottom: 40px;
	}

	&.short {
		padding-bottom: 0;
	}

	@media ${device.sm} {
		padding-top: 60px;
		padding-bottom: 80px;

		&.has-bg {
			padding-top: 80px;
			padding-bottom: 80px;
		}

		&.even {
			padding-bottom: 60px;
		}
	}

	@media ${device.md} {
		padding-top: 100px;
		padding-bottom: 140px;

		&.has-bg {
			padding-top: 140px;
			padding-bottom: 140px;
		}

		&.even {
			padding-bottom: 100px;
		}
	}
`

export const ContentContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding: 20px;

	@media ${device.sm} {
		max-width: 720px;
		padding: 35px 0;
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
