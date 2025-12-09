import { useDetectOutsideClick } from 'helpers/useDetectOutsideClick'
import Link from 'next/link'
import React, { useRef } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { MenuItemProps } from 'types'

import { MobileMenuDropdownLink } from './Navbar.styles'
import { usePathname } from 'next/navigation'

interface MobileHeaderDropdownProps {
	item: MenuItemProps
	// eslint-disable-next-line no-unused-vars
	setMenuOpen: (open: boolean) => void
}

export default function MobileHeaderDropdown({ item, setMenuOpen }: MobileHeaderDropdownProps) {
	const dropdownRef = useRef(null)
	const pathname = usePathname()
	const [mobileSubnavOpen, setMobileSubnavOpen] = useDetectOutsideClick(dropdownRef, false)

	const showMobileSubnav = () => {
		setMobileSubnavOpen(!mobileSubnavOpen)
	}

	// Check if the link, or any link in the submenu is active
	const isNavMenuLinkActive =
		pathname === `/${item.cta!.landingPageRoute ? item.cta!.landingPageRoute!.slug.current : item.cta!.link}`
	const isSubMenuActive = item.subnav && item.subnav.some((l: any) => pathname === `/${l.slug.current}`)

	return (
		<>
			<MobileMenuDropdownLink>
				{item.cta!.landingPageRoute && (
					<Link
						href={`/${item.cta!.landingPageRoute!.slug.current}`}
						onClick={() => setMenuOpen(false)}
						className={isNavMenuLinkActive || isSubMenuActive ? 'active' : ''}
					>
						{item.cta!.title}
					</Link>
				)}
				<button type="button" ref={dropdownRef} onClick={showMobileSubnav}>
					{!item.cta!.landingPageRoute && <a>{item.cta!.title}</a>}
					<MdKeyboardArrowDown className={`arrowDown ${mobileSubnavOpen ? 'rotate' : ''}`} />
				</button>
			</MobileMenuDropdownLink>
			<ul style={mobileSubnavOpen ? { display: 'block' } : { display: 'none' }}>
				{item.subnav!.map((l: any) => (
					<li key={l._id}>
						<Link href={`/${l.slug.current}`} onClick={() => setMenuOpen(false)}>
							{l.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
