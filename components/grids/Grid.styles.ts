import styled from 'styled-components'
import { device } from '@/styles/Breakpoints'
import { ContentContainer } from '@/styles/Wrappers'
import { PostCardContainer } from '../cards/Card.styles'

export const TestimonialsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
`

export const TestimonialsGridContainer = styled.div`
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

export const RelatedResourcesRowContainer = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	padding-bottom: 40px;
`

export const StyledTitle = styled.h2<{ titleColor: string }>`
	color: ${(props) => props.titleColor};
	margin-bottom: 20px;
`

export const RelatedResourcesGridContainer = styled.div`
	display: grid;
	grid-template-columns: auto;
	gap: 20px;
	width: 100%;
	gap: 10px;

	@media ${device.xs} {
		gap: 20px;
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${device.lg} {
		grid-template-columns: repeat(4, 1fr);
	}

	${PostCardContainer} {
		height: 100%;

		img.cardImage {
			height: 200px;
		}
	}
`
