import { useDetectOutsideClick } from 'helpers/useDetectOutsideClick'
import Link from 'next/link'
import { useRef } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MenuItemProps } from 'types'

import { MenuLink, NavbarDropdownContainer, NavMenuLink, SubMenu } from './Navbar.styles'

export default function HeaderDropdown(props: MenuItemProps) {
	const { subnav, cta } = props

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
					<Link href={`/${cta!.landingPageRoute!.slug.current}`}>{cta!.title}</Link>

				) : (
					<a className='no-hover'>{cta!.title}</a>
				)}
				<IoIosArrowDown fontSize="1.3em" />
			</NavMenuLink>
			<SubMenu style={subnavState ? { display: 'flex' } : { display: 'none' }}>
				{subnav!.map((l: any) => (
					<MenuLink key={l._id}>
						<Link href={`/${l.slug.current}`}>{l.title}</Link>
					</MenuLink>
				))}
			</SubMenu>
		</NavbarDropdownContainer>
	)
}
