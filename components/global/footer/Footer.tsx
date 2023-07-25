'use client'

import { MenuLink } from 'components/global/navigation/Navbar.styles'
import NavbarDropdown from 'components/global/navigation/NavbarDropdown'
import { useMediaQuery } from 'helpers/useMediaQuery'
import Link from 'next/link'
import { MenuItemProps } from 'types'

import { FooterContainer, FooterContent, FooterMenu } from './Footer.styles'
import FooterIcon from './FooterIcon'

interface FooterProps {
	menuItems?: MenuItemProps[]
}

export function Footer({ menuItems }: FooterProps) {
	const isMobile = useMediaQuery('(max-width: 576px)')

	const currentYr = new Date().getFullYear()

	return (
		<FooterContainer>
			<FooterContent>
				<FooterIcon extraClasses="footerIcon" />
				{!isMobile && isMobile !== null ? (
					<FooterMenu>
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
												menuItem.cta!.landingPageRoute!.slug.current
											}`}
										>
											{menuItem.cta!.title}
										</Link>
									</MenuLink>
								)
							})}
					</FooterMenu>
				) : null}
				<p>© {currentYr} Canine Minds and Manners. All Rights Reserved.</p>
			</FooterContent>
		</FooterContainer>
	)
}
