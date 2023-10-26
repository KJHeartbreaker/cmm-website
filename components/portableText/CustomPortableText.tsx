/* eslint-disable no-shadow */
import { getInternalSlug } from 'helpers/getInternalSlug'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { TextAlign } from '@sanity/ui'
import CTAButton from 'components/CTA/CTAButton'
import SanityComponentImage from 'components/images/SanityComponentImage'
import HorizontalRule from 'components/utilityComponents/HorizontalRule'
import Link from 'next/link'
import { PortableTextBlock } from 'sanity'
import { SanityImageProps } from 'types'
import getYouTubeID from 'get-youtube-id'
import YouTubePlayer from '../video/YouTubePlayer'
import LogoRow from '../logoRow/LogoRow'

export function CustomPortableText({
	paragraphClasses,
	value,
}: {
	paragraphClasses?: string
	value: PortableTextBlock[]
}) {
	const components: PortableTextComponents = {
		block: {
			normal: ({ children }) => {
				// Check if children is an array with a single empty string
				if (Array.isArray(children) && children.length === 1 && children[0] === '') {
					return <br />
				}

				// Render the <p> element with the specified paragraphClasses
				return <p className={paragraphClasses}>{children}</p>
			},
		},
		marks: {
			internalLink: ({ children, value }) => {
				const internalSlug = getInternalSlug(value.item)
				return <Link href={internalSlug}>{children}</Link>
			},
			link: ({ children, value }) => (
				<a
					className="transition hover:opacity-50"
					href={value?.href}
					rel="noreferrer noopener"
				>
					{children}
				</a>
			),
			cmmYellow: ({ children }) => <span className="text-yellow">{children}</span>,
			cmmBlue: ({ children }) => <span className="text-blue">{children}</span>,
			cmmOrange: ({ children }) => <span className="text-orange">{children}</span>,
			cmmWhite: ({ children }) => <span className="text-white">{children}</span>,
		},
		types: {
			image: ({ value }: { value: SanityImageProps }) => (
				<div className="my-6 space-y-2">
					<SanityComponentImage asset={value.asset} alt={value.alt} />
				</div>
			),
			hr: ({ value }: { value: { width: string; size: string; align: TextAlign } }) => (
				<HorizontalRule width={value.width} size={value.size} align={value.align} />
			),
			cta: ({
				value,
			}: {
				value: { title: string; href: string; kind: string; arrow: boolean }
			}) => <CTAButton {...value} />,
			youtube: ({ value }: { value: { url: string } }) => {
				const { url } = value
				if (!url) {
					return <div>Missing YouTube URL</div>
				}

				const id = getYouTubeID(url)

				if (!id) {
					return <div>Missing YouTube URL</div>
				}

				return <YouTubePlayer videoId={id} />
			},
			logoRow: ({ value }) => <LogoRow logos={value.logoRow} />,
		},
	}

	return <PortableText components={components} value={value} />
}
