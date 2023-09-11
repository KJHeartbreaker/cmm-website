import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const LogoRowContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	flex-flow: row wrap;
	gap: 20px;
	margin: 20px 0;

	@media ${device.sm} {
		justify-content: space-between;
	}
`
