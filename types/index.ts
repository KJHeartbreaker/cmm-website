import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export interface TestimonialCardProps {
	heading: string
	copy: { portableTextBlock: PortableTextBlock[] }
}

export interface ProductCardProps {
	key: string
	image: SanityImageProps
	heading: string
	price: number
	cta: CTAProps
}

export interface ProgramCardProps {
	_id: string
	name: string
	parent: { slug: { current: string } }
	slug: { current: string }
	trainingType: 'private' | 'group' | 'onDemand'
	dogName: string
	namePlacement: string
	cardImage: SanityImageProps
}

export type Refs = {
	_key: string
	_ref: string
	_type: string
}

export type Trainer = {
	_id: string
	name: string
	slug: { current: string }
	role: string
	bio: { portableTextBlock: PortableTextBlock[] }
	certifications: { portableTextBlock: PortableTextBlock[] }
	picture: SanityImageProps
}

export type GroupClass = {
	_id: string
	name: string
	slug: { current: string }
	subheadline: string
	price: number
	subMenuTitle: string
	description: { portableTextBlock: PortableTextBlock[] }
	picture: SanityImageProps
	cta: CTAProps
}

export type UpcomingTraining = {
	_key: string
	availability: string
	startDate: Date
}

export type TrainingSession = {
	_id: string
	name: string
	slug: { current: string }
	price?: string
	description: { portableTextBlock: PortableTextBlock[] }
	picture: SanityImageProps
	cta: CTAProps
	takeaways: string[]
	upcoming: UpcomingTraining[]
	trainingType: string
}

export type PanelContent = {
	_type: string
	_key: string
	_id?: string
	title?: string
	heading?: string
	subheading?: string
	disabled?: boolean
	condensedCopy?: boolean
	centerCopy?: boolean
	copy?: any
	portableTextBlock?: PortableTextBlock[]
	icon?: SanityIconProps
	cta?: CTAProps
	asset?: SanityImageProps
	image?: SanityImageProps
	landingPageRoute?: LandingPageRouteProps
	autoplay: boolean
	carouselImages: SanityImageProps[]
}

export interface SanityIconProps {
	alt: string
	asset: {
		_id: string
	}
}

export type ImageAsset = {
	_id: string
	metadata: {
		lqip: string
	}
}

export type SanityImageProps = {
	alt: string
	mode?: 'cover' | 'contain'
	width?: number
	height?: number
	hotspot?: { x: number; y: number }
	crop?: { top: number; bottom: number; left: number; right: number }
	asset: ImageAsset
	image?: any
}

export interface HeroBannerProps {
	heading: string
	subheading: string
	image?: SanityImageProps
	copy: {
		portableTextBlock: PortableTextBlock[]
	}
	size: 'standard' | 'x-large'
	cta: CTAProps
	copyColor: string
	subHeadingColor: string
	headingColor: string
	imageOverlay: 'noOverlay' | 'darkOverlay' | 'blueOverlay'
}

export interface LandingPageRouteProps {
	_id: string
	title: string
	slug: {
		current: string
	}
}

export interface FileDownloadProps {
	_type: 'file'
	asset: {
		url: string
	}
}

export type CTAProps = {
	title: string
	kind: string
	landingPageRoute?: LandingPageRouteProps
	fileDownload?: FileDownloadProps
	link?: string
	arrow: boolean
}

export interface MenuItemProps {
	_key?: string
	_type?: string
	title: string
	subnav?: LandingPageRouteProps[]
	cta?: CTAProps
}

export interface MenuItem {
	_type: string
	slug?: string
	title?: string
}

// Page payloads

export interface HomePagePayload {
	footer?: PortableTextBlock[]
	overview?: PortableTextBlock[]
	title?: string
}

export interface PagePayload {
	name?: string
	overview?: PortableTextBlock[]
	title?: string
	slug?: string
	content?: any
}

export interface SettingsPayload {
	menuItems?: MenuItemProps[]
	ogImage?: Image
}
