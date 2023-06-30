'use client'

import styled from 'styled-components'
import { device } from 'styles/Breakpoints'

interface GridItemContainerProps {
	rowstart: number
}

export const GalleryGridContainer = styled.div`
	display: grid;
	gap: 10px;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	padding: 0 10px;

	@media ${device.sm} {
		grid-template-columns: repeat(3, 250px);
		grid-template-rows: repeat(5, 100px);
		padding: unset;
	}

	@media ${device.lg} {
		grid-template-columns: repeat(3, 380px);
		grid-template-rows: repeat(5, 150px);
		padding: unset;
	}
`

export const GridItemContainer = styled.div<GridItemContainerProps>`
	display: flex;

	img {
		height: 100%;
	}

	&.col-start-1,
	&.col-start-2,
	&.col-start-3 {
		grid-column-start: 1;
	}

	@media ${device.sm} {
		grid-row-start: ${(props) => props.rowstart};

		&.col-start-1 {
			grid-column-start: 1;
		}

		&.col-start-2 {
			grid-column-start: 2;
		}

		&.col-start-3 {
			grid-column-start: 3;
		}

		&.top-short {
			grid-row-end: span 2;
		}

		&.top-long {
			grid-row-end: span 3;
		}

		&.bottom-short {
			grid-row-end: span 2;
		}

		&.bottom-long {
			grid-row-end: span 3;
		}
	}
`
