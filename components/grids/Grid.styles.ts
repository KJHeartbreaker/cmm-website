import { device } from '@/styles/Breakpoints'
import { ContentContainer } from '@/styles/Wrappers'
import styled from 'styled-components'

// z-10 grid w-full grid-cols-2 items-center justify-center gap-5 xl:max-w-7xl
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

export const ProgramsGridContainer = styled(TrainersGridContainer)``
