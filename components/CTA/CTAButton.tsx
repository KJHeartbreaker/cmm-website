import Link from 'next/link'
import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { MdFileDownload } from 'react-icons/md'
import { CTAProps } from 'types'

const CTAButton: React.FC<CTAProps> = ({ title, kind, landingPageRoute, link, fileDownload, arrow }) => {
	if (fileDownload) {
		if (kind === 'button') {
			return (
				<Link href={fileDownload.asset.url} passHref target="_blank" rel="noopener noreferrer">
					<button
						type="button"
						className="flex flex-row items-center justify-center rounded bg-orange px-4 py-2 font-bold text-white transition-colors hover:bg-grey33"
					>
						{title} <MdFileDownload />
					</button>
				</Link>
			)
		}

		return (
			<Link
				href={fileDownload.asset.url}
				target="_blank"
				rel="noopener noreferrer"
				className="flex flex-row items-center justify-center"
			>
				{title} <MdFileDownload />
			</Link>
		)
	}

	if (landingPageRoute) {
		if (kind === 'button') {
			return (
				<Link href={landingPageRoute.slug.current} passHref rel="noopener noreferrer">
					<button
						type="button"
						className="items-center justify-center rounded bg-orange px-4 py-2 font-bold text-white transition-colors hover:bg-grey33"
					>
						{title} {arrow ? <HiOutlineArrowNarrowRight className="ml-2" /> : null}
					</button>
				</Link>
			)
		}

		return (
			<Link
				href={landingPageRoute.slug.current}
				rel="noopener noreferrer"
				className="flex flex-row items-center justify-center"
			>
				{title} {arrow ? <HiOutlineArrowNarrowRight className="ml-2" /> : null}
			</Link>
		)
	}

	if (kind === 'button') {
		return (
			<Link href={link || '#'} passHref>
				<button
					type="button"
					className="flex flex-row items-center justify-center rounded bg-orange px-4 py-2 font-bold text-white transition-colors hover:bg-grey33"
				>
					{title} {arrow ? <HiOutlineArrowNarrowRight className="ml-2" /> : null}
				</button>
			</Link>
		)
	}

	return (
		<Link href={link || '#'} passHref target="_blank" rel="noopener noreferrer">
			<button
				type="button"
				className="flex flex-row items-center justify-center rounded bg-orange px-4 py-2 font-bold text-white transition-colors hover:bg-grey33"
			>
				{title} {arrow ? <HiOutlineArrowNarrowRight className="ml-2" /> : null}
			</button>
		</Link>
	)
}

export default CTAButton
