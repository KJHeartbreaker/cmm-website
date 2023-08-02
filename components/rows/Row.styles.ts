import styled from 'styled-components'
import { device } from 'styles/Breakpoints'
import { ContentContainer } from 'styles/Wrappers'

export const StyledRowColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	div.image-container {
		display: flex;
		width: 100%;
		max-height: 600px;

		img {
			width: 100%;
			object-fit: cover;
		}
	}

	@media ${device.lg} {
		div.image-container {
			max-height: 750px;
		}
	}
`

export const RowColumnCopy = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

	h2 {
		margin: 0 0 20px 0;
		font-size: var(--font-title1-mobile-size);
		line-height: var(--font-title1-line-height);
		font-weight: 600;

		@media ${device.sm} {
			font-size: var(--font-title1-size);
			line-height: var(--font-title1-line-height);
		}
	}

	&.condensed {
		align-items: center;
	}

	div.copy-block {
		&.centered {
			text-align: center;
		}
	}
`

export const SingleColumnRowContainer = styled(ContentContainer)`
	display: flex;
	justify-content: center;
	width: 100%;
`

export const TwoColumnRowContainer = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	width: 100%;

	div.title {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		z-index: 1;

		&.centered {
			justify-content: center;
		}
	}

	div.columns {
		display: grid;
		grid-template-columns: 1;
		justify-content: center;
		gap: 20px;
		z-index: 1;
		width: 100%;

		align-items: center;

		@media ${device.sm} {
			grid-template-columns: repeat(2, 1fr);
		}
	}
`

export const ThreeColumnRowContainer = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	width: 100%;

	div.title {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		z-index: 1;

		&.centered {
			justify-content: center;
		}
	}

	div.columns {
		display: grid;
		grid-template-columns: 1;
		justify-content: center;
		gap: 20px;
		z-index: 1;

		@media ${device.xs} {
			grid-template-columns: repeat(2, 1fr);
		}

		@media ${device.md} {
			grid-template-columns: repeat(3, 1fr);
		}
	}
`
