'use client'

import { SimplePortableText } from 'components/portableText/SimplePortableText'
import ContentBlock from 'components/utilityComponents/ContentBlock'
import { getGroupClasses } from 'lib/sanity.queries'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GroupClass, Refs } from 'types'

import CTAButton from '../CTA/CTAButton'
import SanityComponentImage from '../images/SanityComponentImage'

interface GroupClassCustomComponentProps {
	classRefs: Refs[]
}

export default function GroupClassCustomComponent(props: GroupClassCustomComponentProps) {
	const { classRefs } = props
	const [loading, setLoading] = useState<boolean>(true)
	const [groupClasses, setGroupClasses] = useState<GroupClass[]>([])

	useEffect(() => {
		const fetchGroupClasses = async () => {
			try {
				const groupClassesData: GroupClass[] = await Promise.all(
					classRefs.map(async (gC) => getGroupClasses(gC._ref))
				)
				setGroupClasses(groupClassesData)
			} catch (error) {
				console.error('Error fetching group classes:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchGroupClasses()
	}, [classRefs])

	return (
		<article className="flex w-screen flex-col items-center justify-center px-12">
			{loading ? (
				<h1>Content is loading...</h1>
			) : (
				<>
					<section className="flex w-full flex-row justify-between xl:max-w-7xl">
						{groupClasses.map((link) => (
							<Link key={`link-${link._id}`} href={`/group-training-classes#${link.slug.current}`}>
								{link.subMenuTitle}
							</Link>
						))}
					</section>
					{groupClasses.map((gc) => (
						<ContentBlock
							classes="w-screen justify-center odd:bg-grey22 even:bg-white"
							key={gc._id}
							id={gc.slug.current}
							removeBottomPadding={false}
						>
							<div className="grid w-full grid-cols-2 border-2 border-[#7700ff] xl:max-w-7xl">
								<div>
									<h3 className="text-orange">{gc.subheadline}</h3>
									<h2 className="py-4 pt-1">{gc.name}</h2>
									<h4 className="font-sans font-bold text-orange">{`$${gc.price.toFixed(
										2
									)} (includes GST)`}</h4>
									<SimplePortableText value={gc.description.portableTextBlock} />
									<CTAButton
										title={gc.cta.title}
										kind={gc.cta.kind}
										landingPageRoute={gc.cta.landingPageRoute}
										arrow={gc.cta.arrow}
									/>
									{gc.oDName && (
										<>
											<hr />
											<div className="flex flex-row justify-start space-x-3">
												<h2>{gc.oDName}:</h2>
												<h4>On Demand</h4>
											</div>
											<SimplePortableText value={gc.description.portableTextBlock} />
											<CTAButton
												title={gc.cta.title}
												kind={gc.oDCTA.kind}
												landingPageRoute={gc.cta.landingPageRoute}
												arrow={gc.cta.arrow}
											/>
										</>
									)}
								</div>
								<div>
									<SanityComponentImage asset={gc.picture.asset} alt={gc.picture.alt} />
								</div>
							</div>
						</ContentBlock>
					))}
				</>
			)}
		</article>
	)
}
