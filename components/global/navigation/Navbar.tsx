'use client'

import { useMediaQuery } from 'helpers/useMediaQuery'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MenuItemProps } from 'types'
import { FaInstagram } from 'react-icons/fa'

import MobileHeaderDropdown from './MobileHeaderDropdown'
import {
	DarkFrozen,
	DropdownGroup,
	InstaLink,
	LogoContainer,
	LogoCopyContainer,
	MenuLink,
	MobileMenuDropdown,
	MobileMenuIcon,
	MockButton,
	Nav,
	PrimaryNav,
	StickyContainer,
	TopMenu,
} from './Navbar.styles'
import NavbarDropdown from './NavbarDropdown'

interface NavbarProps {
	menuItems?: MenuItemProps[]
}

export function Navbar({ menuItems }: NavbarProps) {
	const isMobile = useMediaQuery('(max-width: 768px)')
	const [menuOpen, setMenuOpen] = useState(false)
	const openMenu = () => {
		setMenuOpen(!menuOpen)
	}

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [menuOpen])

	return (
		<StickyContainer>
			<Nav>
				<PrimaryNav>
					<LogoContainer>
						<Link href="/" onClick={() => setMenuOpen(false)}>
							<Image
								src="/CMMPDT_Logo-type.png"
								alt="CMM Logo"
								width="75"
								height="75"
							/>
							<LogoCopyContainer>
								<h4>Canine Minds & Manners</h4>
								<h5>Professional Dog Training</h5>
							</LogoCopyContainer>
						</Link>
					</LogoContainer>
					{!isMobile && isMobile !== null ? (
						<TopMenu>
							{menuItems &&
								menuItems.map((menuItem: MenuItemProps) => {
									if (
										menuItem._type === 'navDropdownCTA' &&
										menuItem.subnav!.length > 0
									) {
										return (
											<MenuLink key={menuItem._key}>
												<NavbarDropdown
													title={menuItem.title}
													cta={menuItem.cta}
													subnav={menuItem.subnav}
												/>
											</MenuLink>
										)
									}
									return (
										<MenuLink key={menuItem._key}>
											<Link
												href={`/${
													menuItem.cta!.landingPageRoute
														? menuItem.cta!.landingPageRoute!.slug
																.current
														: menuItem.cta!.link
												}`}
											>
												{menuItem.cta!.title}
											</Link>
										</MenuLink>
									)
								})}
							<MenuLink>
								<InstaLink
									href="https://www.instagram.com/canine.minds.and.manners/"
									passHref
									target="_blank"
									rel="noopener noreferrer"
									className="insta"
								>
									Insta
									<FaInstagram size={24} />
								</InstaLink>
							</MenuLink>
						</TopMenu>
					) : (
						<MobileMenuIcon onClick={openMenu} menuopen={menuOpen}>
							<div />
							<div />
							<div />
						</MobileMenuIcon>
					)}
				</PrimaryNav>
				{isMobile && (
					<>
						{menuOpen && <DarkFrozen />}
						<MobileMenuDropdown
							style={menuOpen ? { display: 'flex' } : { display: 'none' }}
						>
							{menuItems &&
								menuItems.map((menuItem: MenuItemProps) => {
									if (
										menuItem._type === 'navDropdownCTA' &&
										menuItem.subnav!.length > 0
									) {
										return (
											<DropdownGroup key={menuItem._key}>
												<MobileHeaderDropdown
													item={menuItem}
													key={menuItem._key}
													setMenuOpen={setMenuOpen}
												/>
											</DropdownGroup>
										)
									}
									return (
										<Link
											key={menuItem._key}
											href={`/${
												menuItem.cta!.landingPageRoute!.slug.current
											}`}
											onClick={() => setMenuOpen(false)}
										>
											{menuItem.cta!.title}
										</Link>
									)
								})}
							<InstaLink
								href="https://www.instagram.com/canine.minds.and.manners/"
								passHref
								target="_blank"
								rel="noopener noreferrer"
								className="insta"
							>
								Insta
								<FaInstagram size={24} />
							</InstaLink>
							<Link href="tel:4038165629" passHref className="phone-button">
								<button type="button" className="contact">
									Kirsten Rose <br />
									(403) 816-5629
								</button>
							</Link>
							<MockButton>
								<p>Kirsten Rose</p>
								<p>(403) 816-5629</p>
							</MockButton>
						</MobileMenuDropdown>
					</>
				)}
			</Nav>
		</StickyContainer>
	)
}
