'use client'

import { MenuLink } from 'components/global/navigation/Navbar.styles'
import NavbarDropdown from 'components/global/navigation/NavbarDropdown'
import { useMediaQuery } from 'helpers/useMediaQuery'
import Link from 'next/link'
import { MenuItemProps, SanityLogoProps } from 'types'

import LogoRow from 'components/logoRow/LogoRow'
import { FooterContainer, FooterContent, FooterIconRow, FooterMenu } from './Footer.styles'
import FooterIcon from './FooterIcon'
import { usePathname } from 'next/navigation'

interface FooterProps {
	menuItems?: MenuItemProps[]
	logos?: SanityLogoProps[]
}

export function Footer({ menuItems, logos }: FooterProps) {
	const isMobile = useMediaQuery('(max-width: 576px)')
	const currentYr = new Date().getFullYear()
	const pathname = usePathname()

	return (
		<FooterContainer>
			<FooterContent>
				<FooterIconRow>
					<h5>
						Phone: <Link href="tel:4038165629">Kirsten Rose (403) 816-5629</Link>
					</h5>

					<FooterIcon extraClasses="footerIcon" />
					<h5>
						Email: <Link href="mailto:cmm_info@shaw.ca">cmm_info@shaw.ca</Link>
					</h5>
				</FooterIconRow>
				{!isMobile && isMobile !== null ? (
					<FooterMenu>
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
										<Link
											href={`/${
												menuItem.cta!.landingPageRoute
													? menuItem.cta!.landingPageRoute!.slug.current
													: menuItem.cta!.link
											}`}
											className={`${
												pathname ===
												`/${
													menuItem.cta!.landingPageRoute
														? menuItem.cta!.landingPageRoute!.slug.current
														: menuItem.cta!.link
												}`
													? 'active'
													: ''
											}`}
										>
											{menuItem.cta!.title}
										</Link>
									</MenuLink>
								)
							})}
					</FooterMenu>
				) : null}
				<LogoRow logos={logos!} />
				<p>© {currentYr} Canine Minds and Manners. All Rights Reserved.</p>
			</FooterContent>
		</FooterContainer>
	)
}
