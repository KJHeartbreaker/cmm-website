import Link from 'next/link'
import React from 'react'
import styled, { css } from 'styled-components'
import { device } from 'styles/Breakpoints'

export const StickyContainer = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
`

export const Nav = styled.nav`
	display: grid;
	grid-template-rows: 75px;
	grid-template-columns: 1fr;
	background-color: var(--blue-44);

	a.phone-button {
		display: block;

		@media ${device.xs} {
			display: none;
		}
	}

	button.contact {
		background-color: var(--blue-22);
		padding: 5px 10px;
		border-radius: 5px;

		&:hover {
			background-color: var(--orange);
		}
	}
`

export const InstaLink = styled(Link)`
	display: flex;
	flex-direction: row;

	svg {
		margin-left: 12px;
	}
`

export const MockButton = styled.div`
	display: none;
	flex-direction: row;
	color: var(--white);
	min-width: 100px;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	padding: 5px;

	@media ${device.xs} {
		display: flex;
		min-width: 150px;
	}

	@media ${device.sm} {
		display: flex;
		min-width: 100px;
	}

	@media ${device.lg} {
		display: flex;
		min-width: 150px;
	}

	p {
		font-weight: 700;
		margin: 0;

		@media ${device.sm} {
			font-size: 12px;
		}

		@media ${device.lg} {
			font-size: unset;
		}
	}
`

export const PrimaryNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 100%;
	width: 100%;
	margin: 0 auto;
	padding-left: 12px;
	padding-right: 12px;
	z-index: 100;

	@media ${device.lg} {
		max-width: 1280px;
	}

	@media ${device.xl} {
		max-width: 1440px;
	}

	@media ${device.xxl} {
		max-width: 1600px;
	}
`

export const LogoContainer = styled.div`
	display: flex;
	max-width: 120px;

	@media ${device.lg} {
		padding-left: unset;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			height: 100%;
			width: 100%;
		}
	}
`

export const LogoCopyContainer = styled.div`
	display: none;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 250px;

	h4 {
		font-size: 14px;
		color: var(--white);
	}

	h5 {
		font-size: 11px;
		color: var(--white);
	}

	@media ${device.md} {
		display: flex;
	}
`

export const MenuLink = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	list-style: none;
	margin: 0;
	transition: background-color 0.25s;

	a {
		display: flex;
		height: 100%;
		font-weight: 400;
		font-family: var(--font-paytone-one), sans-serif;
		color: var(--white);

		&.no-hover {
			cursor: default;
			&:hover {
				color: var(--white);
			}
		}
	}

	&:hover,
	&.active,
	&[aria-current='page'] {
		color: springgreen;
	}

	a.button {
		&:hover,
		&.active,
		&[aria-current='page'] {
			color: #fff;
		}
	}
`

export const TopMenu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 0;
	padding: 0 20px;
	width: 100%;

	@media ${device.md} {
		width: 70%;
	}

	button.kr-contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--blue-22);
		/* padding: 5px 20px; */
		width: 150px;
		border-radius: 5px;
	}
`

export const NavMenuLink = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const NavbarDropdownContainer = styled.div`
	cursor: pointer;
	position: relative;
	display: flex;

	svg {
		vertical-align: middle;
		transition: transform 0.05s;
		color: var(--white);
		margin-left: 8px;
	}

	&.active {
		svg {
			transform: rotate(-180deg);
		}
	}

	@media screen and (prefers-reduced-motion: reduce) {
		svg {
			transition: none;
		}
	}
`

export const SubMenu = styled.ul`
	display: none;
	flex-direction: column;
	align-items: flex-start;
	box-shadow: rgb(0 0 0 / 20%) 0px 3px 7px, rgb(0 0 0 / 30%) 0px 0.6px 2px;
	border-radius: 5px;
	position: absolute;
	top: 20px;
	width: 200px;
	padding: 6px 0;
	background-color: var(--white);
	z-index: 2;
	margin: 0;

	${MenuLink} {
		display: flex;
		height: 100%;
		width: 100%;
		transition: background-color 0.25s;

		a {
			color: var(--grey-44);
			padding: 8px 0 8px 15px;
			display: flex;
			height: 100%;
			width: 100%;
		}

		&:hover {
			background-color: var(--white);
			background-color: var(--grey-44);

			a {
				color: #fff;
			}
		}
	}
`

// Mobile Styling //

interface MobileMenuIconProps {
	children?: React.ReactNode
	menuopen: boolean
	onClick: () => void
}

const hamburger = ({ menuopen }: { menuopen: boolean }) => {
	if (menuopen) {
		return css`
			> div {
				transition: all 0.35s linear;
				transform: rotate(0deg);
				transform-origin: 0% 50%;
				margin: 7px 0;

				&:first-child {
					transform: rotate(45deg);
				}

				&:nth-child(2) {
					width: 0;
					opacity: 0;
				}

				&:last-child {
					transform: rotate(-45deg);
				}
			}
		`
	}

	return null // Return null when menuopen is false
}

export const MobileMenuIcon: React.FC<MobileMenuIconProps> = styled.div<MobileMenuIconProps>`
	width: 25px;
	min-width: 25px;
	display: block;

	> div {
		height: 2px;
		background: #000;
		margin: 5px 0;
		width: 100%;
	}

	// Conditionally apply the hamburger style when menuopen is true
	${(props) => (props.menuopen ? hamburger(props) : null)}
`

export const DropdownGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	/* min-height: 40px; */
	width: 100%;

	ul {
		width: 100%;
		margin: 9px 0;
	}

	button {
		margin: 0;
		padding: 0;
		background-color: transparent;
		color: var(--dark-grey);
		display: flex;
		align-items: center;

		&:hover {
			background-color: transparent;
		}
	}
`

export const MobileMenuDropdown = styled.div`
	display: none;
	box-sizing: border-box;
	position: absolute;
	top: 75px;
	left: 0;
	right: 0;
	padding: 20px 30px;
	height: calc(100vh - 75px);
	overflow-y: scroll;
	background-color: var(--grey-44);
	align-items: center;
	flex-direction: column;
	text-align: center;
	z-index: 100;

	@media ${device.xs} {
		width: 375px;
		left: unset;
	}

	li {
		display: block;
		padding: 10px 0;
		min-height: 40px;
		line-height: 40px;
		margin: 0;
		background-color: var(--orange);
	}

	& > span {
		display: block;
		padding: 10px 0;
		min-height: 40px;
		line-height: 40px;
	}

	a {
		text-decoration: none;
		color: var(--white);
		padding: 10px 0;

		&.active {
			color: var(--green);
		}
	}

	svg {
		color: var(--white);

		&.rotate {
			transform: rotate(180deg);
		}
	}
`

export const MobileMenuDropdownLink = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	text-align: center;
	justify-content: center;

	a {
		margin-right: 10px;
	}
`

export const DarkFrozen = styled.div`
	position: fixed;
	top: 75px;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 10;
`
