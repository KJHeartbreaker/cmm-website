'use client'

import { useMediaQuery } from 'helpers/useMediaQuery'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MenuItemProps } from 'types'

import MobileHeaderDropdown from './MobileHeaderDropdown'
import {
	DarkFrozen,
	DropdownGroup,
	LogoContainer,
	LogoCopyContainer,
	MenuLink,
	MobileMenuDropdown,
	MobileMenuIcon,
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
							<Image src="/CMMPDT_Logo-type.png" alt="CMM Logo" width="75" height="75" />
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
									if (menuItem._type === 'navDropdownCTA' && menuItem.subnav!.length > 0) {
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
											<Link href={`/${menuItem.cta!.landingPageRoute!.slug.current}`}>
												{menuItem.cta!.title}
											</Link>
										</MenuLink>
									)
								})}
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
						<MobileMenuDropdown style={menuOpen ? { display: 'flex' } : { display: 'none' }}>
							{menuItems &&
								menuItems.map((menuItem: MenuItemProps) => {
									if (menuItem._type === 'navDropdownCTA' && menuItem.subnav!.length > 0) {
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
											href={`/${menuItem.cta!.landingPageRoute!.slug.current}`}
											onClick={() => setMenuOpen(false)}
										>
											{menuItem.cta!.title}
										</Link>
									)
								})}
							<Link href="tel:(403) 816-5629" passHref>
								<button type="button" className="contact">
									Kirsten Rose <br />
									(403) 816-5629
								</button>
							</Link>
						</MobileMenuDropdown>
					</>
				)}
			</Nav>
		</StickyContainer>
	)
}
