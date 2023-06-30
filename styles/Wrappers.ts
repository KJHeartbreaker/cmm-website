import styled from 'styled-components'

import { device } from './Breakpoints'

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
