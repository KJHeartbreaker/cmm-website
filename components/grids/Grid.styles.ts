import styled from 'styled-components'
import { device } from '@/styles/Breakpoints'
import { ContentContainer } from '@/styles/Wrappers'

export const TestimonialGridContainer = styled.div`
	display: grid;
	grid-template-columns: 1;
	padding: 20px;
	gap: 10px;

	@media ${device.sm} {
		gap: 20px;
		grid-template-columns: repeat(2, 50%);
		width: 70%;
	}
`

export const TrainersGridContainer = styled(ContentContainer)`
	display: grid;
	grid-template-columns: auto;
	padding: 20px;
	gap: 20px;
	width: 100%;

	@media ${device.xs} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${device.md} {
		grid-template-columns: repeat(3, 1fr);
	}
`

export const ProgramsGridContainer = styled(TrainersGridContainer)`
	gap: 10px;

	@media ${device.md} {
		gap: 20px;
	}
`
