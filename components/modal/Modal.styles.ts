import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const Overlay = styled.div`
	position: fixed;
	top: 50px;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
`

export const ModalContentBackground = styled.div`
	background-color: var(--white);
	padding: 10px;
	border-radius: 5px;
	width: 90%;
	height: fit-content;
	position: relative;

	@media ${device.md} {
		width: 800px;
	}

	@media ${device.lg} {
		width: 1000px;
	}
`

export const ModalClose = styled.div`
	position: absolute;
	width: 25px;
	height: 25px;
	background-color: var(--white);
	border-radius: 50%;
	top: -15px;
	right: -15px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid var(--orange);
`
