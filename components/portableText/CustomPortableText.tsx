/* eslint-disable no-shadow */
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { TextAlign } from '@sanity/ui'
import CTAButton from 'components/CTA/CTAButton'
import SanityComponentImage from 'components/images/SanityComponentImage'
import HorizontalRule from 'components/utilityComponents/HorizontalRule'
import { PortableTextBlock } from 'sanity'
import { SanityImageProps } from 'types'

export function CustomPortableText({
	paragraphClasses,
	value,
}: {
	paragraphClasses?: string
	value: PortableTextBlock[]
}) {
	const components: PortableTextComponents = {
		block: {
			normal: ({ children }) => <p className={paragraphClasses}>{children}</p>,
		},
		marks: {
			link: ({ children, value }) => (
				<a className="transition hover:opacity-50" href={value?.href} rel="noreferrer noopener">
					{children}
				</a>
			),
			cmmYellow: ({ children }) => <span className="text-yellow">{children}</span>,
			cmmBlue: ({ children }) => <span className="text-blue">{children}</span>,
			cmmOrange: ({ children }) => <span className="text-orange">{children}</span>,
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
			cta: ({ value }: { value: { title: string; href: string; kind: string; arrow: boolean } }) => (
				<CTAButton {...value} />
			),
		},
	}

	return <PortableText components={components} value={value} />
}
