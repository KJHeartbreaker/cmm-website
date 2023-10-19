import { useDetectOutsideClick } from 'helpers/useDetectOutsideClick'
import Link from 'next/link'
import { useRef } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MenuItemProps } from 'types'

import { MenuLink, NavbarDropdownContainer, NavMenuLink, SubMenu } from './Navbar.styles'
import { usePathname } from 'next/navigation'

export default function NavbarDropdown(props: MenuItemProps) {
	const { subnav, cta } = props
	const pathname = usePathname()

	const dropdownRef = useRef(null)
	const [subnavState, setSubnavState] = useDetectOutsideClick(dropdownRef, false)

	const showSubnavState = () => {
		setSubnavState(!subnavState)
	}

	const mouseEnter = () => {
		setSubnavState(true)
	}
	const mouseLeave = () => {
		setSubnavState(false)
	}

	// Check if the link, or any link in the submenu is active
	const isNavMenuLinkActive =
		pathname === `/${cta!.landingPageRoute ? cta!.landingPageRoute!.slug.current : cta!.link}`
	const isSubMenuActive = subnav && subnav.some((l: any) => pathname === `/${l.slug.current}`)

	return (
		<NavbarDropdownContainer
			ref={dropdownRef}
			onClick={subnav && showSubnavState}
			onMouseEnter={subnav && mouseEnter}
			onMouseLeave={subnav && mouseLeave}
			className={subnavState ? 'dropdown active' : 'dropdown'}
		>
			<NavMenuLink>
				{cta!.landingPageRoute ? (
					<Link
						className={isNavMenuLinkActive || isSubMenuActive ? 'active' : ''}
						href={`/${cta!.landingPageRoute!.slug.current}`}
					>
						{cta!.title}
					</Link>
				) : (
					<a className="no-hover">{cta!.title}</a>
				)}
				<IoIosArrowDown fontSize="1.3em" className={isSubMenuActive ? 'active' : ''} />
			</NavMenuLink>
			<SubMenu style={subnavState ? { display: 'flex' } : { display: 'none' }}>
				{subnav!.map((l: any) => (
					<MenuLink key={l._id}>
						<Link
							className={`${pathname === `/${l.slug.current}` ? 'active' : ''}`}
							href={`/${l.slug.current}`}
						>
							{l.title}
						</Link>
					</MenuLink>
				))}
			</SubMenu>
		</NavbarDropdownContainer>
	)
}
