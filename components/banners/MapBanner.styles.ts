import { device } from 'styles/Breakpoints'
import styled from 'styled-components'
import { IconCardContainer } from '../cards/Card.styles'

export const ContactPageContainer = styled.div`
	display: flex;
	flex-direction: column;
`
export const FindUsButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;

	@media ${device.sm} {
		display: none;
	}
`

export const MapContainer = styled.div`
	position: relative;

	iframe {
		display: none;

		@media ${device.sm} {
			display: block;
		}
	}

	@media ${device.sm} {
		height: 750px;
	}
`

export const ContactFormIconCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-around;
	padding: 20px;

	@media ${device.sm} {
		flex-direction: row;
	}

	${IconCardContainer} {
		border-radius: 0;
		/* width: 400px; */
		flex: 1;
		height: 100%;

		p {
			margin: 0;
		}

		@media ${device.sm} {
			border-right: 1px solid var(--grey-22);

			&:last-child {
				border-right: 0;
			}
		}
	}
`

export const MapFormPanel = styled.div`
	width: 100%;
	background-color: var(--white);
	padding: 10px;
	z-index: 2;
	opacity: 0.9;

	@media ${device.sm} {
		position: absolute;
		width: 320px;
		top: 125px;
		left: 20px;
		border-radius: 5px;
		border: 2px solid var(--blue-22);
	}

	@media ${device.md} {
		width: 450px;
	}

	@media ${device.lg} {
		width: 600px;
		padding: 20px;
	}

	@media ${device.xl} {
		left: 10%;
	}
`
