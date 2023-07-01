import { device } from '@/styles/Breakpoints'
import { ContentContainer } from '@/styles/Wrappers'
import styled from 'styled-components'

export const StyledRowContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	align-items: center;
	z-index: 1;

	/* @media ${device.xs} {
		width: 70%;
	} */
`

export const StyledRowColumn = styled.div`
	display: flex;
	width: 100%;
	height: 100%;

	img {
		width: 100%;
	}
`

export const RowColumnCopy = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

	h2 {
		font-size: var(--font-title1-size);
		line-height: var(--font-title1-line-height);
		margin: 0 0 20px 0;
	}
`

export const ThreeColumnRowContainer = styled(ContentContainer)`
	display: grid;
	grid-template-columns: 1;
	justify-content: center;
	gap: 20px;

	@media ${device.xs} {
		grid-template-columns: repeat(3, 1fr);
	}
`
