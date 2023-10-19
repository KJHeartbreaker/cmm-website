import { device } from '@/styles/Breakpoints'
import { SubMenu } from 'components/global/navigation/Navbar.styles'
import styled from 'styled-components'
import { ContentContainer } from 'styles/Wrappers'

export const FooterContainer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--grey-44);
`

export const FooterIconRow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	place-items: center;
	width: 100%;

	svg {
		order: 0;
	}

	h5 {
		margin: 5px 0;
		color: var(--white);
		font-size: 16px;

		&:first-of-type {
			order: 1;
			margin-top: 10px;
		}

		&:last-of-type {
			order: 2;
		}
	}

	@media ${device.sm} {
		display: grid;
		grid-template-columns: 40% 20% 40%;

		svg {
			order: unset;
		}

		h5 {
			&:first-of-type {
				order: unset;
				margin-top: unset;
			}

			&:last-of-type {
				order: unset;
			}
		}
	}
`

export const FooterContent = styled(ContentContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 767px;
	width: 100%;
	min-height: 300px;
	padding: 35px 20px;

	svg.footerIcon {
		width: 40px;
		color: var(--white);
	}

	p {
		font-size: 12px;
		color: var(--grey-22);
		margin-top: 20px;
	}

	@media ${device.sm} {
		padding: 35px 0;
	}
`

export const FooterMenu = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin: 25px 0;

	a {
		font-family: unset;
	}

	${SubMenu} {
		a {
			padding: 4px 0 4px 8px;
			font-size: 12px;
		}
	}
`
