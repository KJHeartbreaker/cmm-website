import { device } from '@/styles/Breakpoints'
import { ContentContainer, Section } from '@/styles/Wrappers'
import styled from 'styled-components'
import { IconCardContainer } from '../cards/Card.styles'

// Trainers Page
export const TrainersPageContainer = styled(ContentContainer)``

export const TrainerRow = styled.div`
	display: grid;
	grid-template-columns: 100%;
	padding: 20px 0;

	@media ${device.sm} {
		grid-template-columns: 40% 60%;
		gap: 20px;
		padding: 50px 0;
	}
`

export const TrainerRowLeftSide = styled.div`
	display: flex;
	flex-direction: column;
	order: 2;

	img {
		width: 100%;
		height: auto;
	}

	@media ${device.sm} {
		order: 1;
	}
`

export const TrainerRowRightSide = styled.div`
	order: 1;

	@media ${device.sm} {
		order: 2;
	}
`

export const TrainerRowLSCopy = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;

	h3 {
		color: var(--blue-33);
	}

	@media ${device.sm} {
		margin-top: 30px;
	}
`

export const GroupClassesContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0;
`

export const GCContentBlock = styled(Section)`
	&:nth-child(odd) {
		background-color: var(--grey-22);
	}
`

export const GroupClassLinks = styled(ContentContainer)`
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;

	@media ${device.xs} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${device.md} {
		grid-template-columns: repeat(4, 1fr);
	}

	a {
		color: var(--blue-33);

		&:hover {
			color: var(--orange);
		}
	}
`

export const AboutUsSectionContainer = styled.div`
	display: flex;
	width: 100%;
`

export const AboutUsContentContainer = styled(ContentContainer)`
	display: grid;
	grid-template-columns: 100%;
	padding-top: 0;
	padding-bottom: 0;

	@media ${device.sm} {
		grid-template-columns: 40% 1fr;
		gap: 20px;
	}
`

export const IconCardColumn = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: auto;
	background-color: var(--grey-33);
	gap: 1px;

	@media ${device.xs} {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, auto);
	}

	${IconCardContainer} {
		background-color: var(--grey-22);
	}

	img {
		filter: invert(1);
	}
`
