/* eslint-disable no-shadow */
import { getInternalSlug } from 'helpers/getInternalSlug'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'
import { PortableTextBlock } from 'sanity'

export function SimplePortableText({
	paragraphClasses,
	value,
}: {
	paragraphClasses?: string
	value: PortableTextBlock[]
}) {
	const components: PortableTextComponents = {
		types: {
			// @ts-ignore
			simplePortableTextBlock: ({ children }) => (
				<p className={paragraphClasses}>{children}</p>
			),
		},
		block: {
			normal: ({ children }) => <p className={paragraphClasses}>{children}</p>,
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
		},
	}

	return <PortableText components={components} value={value} />
}
