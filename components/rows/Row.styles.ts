import styled from 'styled-components'
import { device } from 'styles/Breakpoints'
import { ContentContainer, VideoWrapper } from 'styles/Wrappers'

export const StyledRowColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	&.carousel-wrapper {
		overflow: hidden;
		height: 450px;

		@media ${device.md} {
			height: 650px;
		}
	}

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
	/* margin-bottom: 20px; */

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
	flex-direction: column;
	width: 100%;

	&.centered {
		text-align: center;
	}

	${VideoWrapper} {
		display: flex;
		justify-content: center;

		div {
			display: flex;
			justify-content: center;
			align-items: center;
			max-width: 1200px;

			iframe {
				top: 0;
				left: 0;
				right: 0;
			}
		}
	}
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
		grid-template-rows: max-content;
		grid-template-columns: 1fr;
		justify-content: center;
		gap: 20px;
		z-index: 1;
		width: 100%;
		overflow: hidden;

		@media ${device.sm} {
			align-items: flex-start;
			grid-template-columns: repeat(2, 1fr);
		}

		&.condensed {
			${StyledRowColumn} {
				height: fit-content;
			}

			@media ${device.sm} {
				${StyledRowColumn} {
					${RowColumnCopy} {
						align-items: center;
					}
				}
			}

			@media ${device.md} {
				grid-template-columns: repeat(2, 400px);
			}
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
		grid-template-rows: max-content;
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
