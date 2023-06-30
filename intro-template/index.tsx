'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { memo, useEffect, useState } from 'react'

import cover from './cover.png'

export default memo(() => {
	const [studioURL, setStudioURL] = useState<string | null>(null)
	const [isLocalHost, setIsLocalhost] = useState(false)
	const pathname = usePathname()

	const hasEnvFile = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
	const hasRepoEnvVars =
		process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER &&
		process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER &&
		process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG
	const repoURL = `https://${process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER}.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}`
	const removeBlockURL = hasRepoEnvVars
		? `https://${process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER}.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}/blob/main/README.md#how-can-i-remove-the-next-steps-block-from-my-app`
		: `https://github.com/sanity-io/template-nextjs-clean#how-can-i-remove-the-next-steps-block-from-my-app`

	const [hasUTMtags, setHasUTMtags] = useState(false)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setStudioURL(`${window.location.origin}/studio`)
			setIsLocalhost(window.location.hostname === 'localhost')
			setHasUTMtags(window.location.search.includes('utm'))
		}
	}, [])

	// Only display this on the home page
	if (pathname !== '/') {
		return null
	}

	if (hasUTMtags || !studioURL) {
		return null
	}

	return (
		<div className="border-gray-100 bg-gray-50/50 flex justify-center border-t">
			<div className="mb-4 mt-20 grid max-w-screen-2xl grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32 ">
				<div className="self-center">
					<Image
						alt="An illustration of a browser window, a terminal window, the Sanity.io logo and the NextJS logo"
						src={cover}
					/>
					<div className="text-gray-700 mt-10 hidden px-14 text-xs md:block">
						<RemoveBlock url={removeBlockURL} />
					</div>
				</div>

				<div className="mx-6 md:mx-0 md:mr-24">
					<h2 className="mb-5 text-xl font-bold tracking-tight md:text-5xl">Next steps</h2>

					{!hasEnvFile && (
						<div className="bg-yellow-100 text-yellow-700 mb-6 rounded-lg p-4 text-sm" role="alert">
							{`It looks like you haven't set up the local environment variables.`}
							<p>
								<a
									href="https://github.com/sanity-io/template-nextjs-clean#step-2-set-up-the-project-locally"
									className="hover:text-blue-800 mx-1 underline"
									target="_blank"
									rel="noreferrer"
								>
									{`Here's how to set them up locally`}
								</a>
							</p>
						</div>
					)}

					<ol>
						<Box
							circleTitle="1"
							element={
								<div>
									<div className="col-span-2 mb-2 mt-1 font-semibold">Create a schema</div>

									{isLocalHost ? (
										<div className="text-gray-700 text-xs">
											Start editing your content structure in
											<div className="bg-slate-200 w-fit px-2">
												<pre>sanity.config.ts</pre>
											</div>
										</div>
									) : (
										<>
											<div className="text-gray-700 text-xs">
												Your code can be found at
												<a
													className="hover:text-blue-800 mx-1 underline"
													href={repoURL}
													target="_blank"
													rel="noreferrer"
												>
													{repoURL}
												</a>
											</div>

											<div className="mt-3">
												<a
													className="bg-blue-500 hover:bg-blue-800 inline-flex rounded px-4 py-2 text-white"
													href={repoURL}
													target="_blank"
													rel="noopener noreferrer"
												>
													Go to {getGitProvider()} repo
												</a>
											</div>
										</>
									)}
								</div>
							}
						/>

						<Box
							circleTitle="2"
							element={
								<div>
									<div className="col-span-2 mb-2 mt-1 font-semibold">
										Create content with Sanity Studio
									</div>
									<div className="text-gray-700 text-xs">
										Your Sanity Studio is deployed at
										<Link className="hover:text-blue-800 mx-1 underline" href={studioURL}>
											{studioURL}
										</Link>
									</div>

									<div className="mt-3">
										<Link
											className="bg-blue-500 hover:bg-blue-800 inline-flex rounded px-4 py-2 text-white"
											href={studioURL}
										>
											Go to Sanity Studio
										</Link>
									</div>
								</div>
							}
						/>

						<Box
							circleTitle="3"
							element={
								<div>
									<div className="col-span-2 mb-3 mt-1 font-semibold">Learn more and get help</div>
									<ul>
										<li className="mb-2">
											<BlueLink
												href="https://www.sanity.io/docs"
												text="Documentation for Sanity"
											/>
										</li>
										<li className="mb-2">
											<BlueLink href="https://nextjs.org/docs" text="Documentation for Next.js" />
										</li>
										<li className="mb-2">
											<BlueLink
												href="https://slack.sanity.io/"
												text="Join the Sanity Community"
											/>
										</li>
									</ul>
								</div>
							}
						/>
					</ol>
					<div className="text-gray-700 text-center text-xs md:invisible">
						<RemoveBlock url={removeBlockURL} />
					</div>
				</div>
			</div>
		</div>
	)
})

function Box({ circleTitle, element }: { circleTitle: string; element: JSX.Element }) {
	return (
		<li className="grid-rows-1 mt-2 grid grid-flow-col place-content-start gap-3">
			<div className="row-span-3 select-none">
				<div className="bg-gray-200 relative flex h-5 w-5 select-none items-center justify-center rounded-full p-3 text-center">
					{circleTitle}
				</div>
			</div>
			{element}
		</li>
	)
}

function BlueLink({ href, text }: { href: string; text: string }) {
	return (
		<a href={href} className="text-blue-500 hover:text-blue-800 underline" target="_blank" rel="noreferrer">
			{text}
		</a>
	)
}

const RemoveBlock = ({ url }: { url: string }) => (
	<a className="hover:text-blue-800" href={url} target="_blank" rel="noreferrer">
		How to remove this block?
	</a>
)

function getGitProvider() {
	switch (process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER) {
		case 'gitlab':
			return 'GitLab'
		case 'bitbucket':
			return 'Bitbucket'
		default:
			return 'GitHub'
	}
}
