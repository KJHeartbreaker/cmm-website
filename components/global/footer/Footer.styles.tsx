import { SubMenu } from 'components/global/navigation/Navbar.styles'
import styled from 'styled-components'
import { ContentContainer } from 'styles/Wrappers'

export const FooterContainer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--grey-44);
`

export const FooterContent = styled(ContentContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 767px;
	width: 100%;
	min-height: 300px;

	svg.footerIcon {
		width: 40px;
		color: var(--white);
	}

	p {
		font-size: 12px;
		color: var(--grey-22);
		margin-top: 20px;
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
