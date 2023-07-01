import { device } from '@/styles/Breakpoints'
import { ContentContainer } from '@/styles/Wrappers'
import styled from 'styled-components'

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
