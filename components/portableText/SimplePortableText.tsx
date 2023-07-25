/* eslint-disable no-shadow */
import { PortableText, PortableTextComponents } from '@portabletext/react'
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
			link: ({ children, value }) => (
				<a
					className="underline transition hover:opacity-50"
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
