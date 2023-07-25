'use client'

import { SimplePortableText } from 'components/portableText/SimplePortableText'
import Link from 'next/link'
import { GroupClass } from 'types'
import { PortableTextBlock } from 'sanity'
import CTAButton from '../CTA/CTAButton'
import SanityComponentImage from '../images/SanityComponentImage'
import { GCContentBlock, GroupClassesContainer, GroupClassLinks } from './CustomComponent.styles'
import { TwoColumnRowContainer } from '../rows/Row.styles'

interface GroupClassCustomComponentProps {
	groupClasses: GroupClass[]
}

export default function GroupClassCustomComponent({
	groupClasses,
}: GroupClassCustomComponentProps) {
	return (
		<GroupClassesContainer>
			<GroupClassLinks>
				{groupClasses.map((groupClass) => (
					<Link
						key={`link-${groupClass._id}`}
						href={`/group-training#${groupClass.slug.current}`}
					>
						{groupClass.subMenuTitle}
					</Link>
				))}
			</GroupClassLinks>
			{groupClasses.map((gc) => (
				<GCContentBlock key={gc._id} id={gc.slug.current}>
					<TwoColumnRowContainer>
						<div>
							<h3 className="text-orange">{gc.subheadline}</h3>
							<h2 className="py-4 pt-1">{gc.name}</h2>
							<h4 className="font-sans font-bold text-orange">{`$${gc.price} (includes GST)`}</h4>
							<SimplePortableText
								value={gc.description.portableTextBlock as PortableTextBlock[]}
							/>
							<CTAButton
								title={gc.cta.title}
								kind={gc.cta.kind}
								landingPageRoute={gc.cta.landingPageRoute}
								arrow={gc.cta.arrow}
							/>
						</div>
						<div>
							<SanityComponentImage asset={gc.picture.asset} alt={gc.picture.alt} />
						</div>
					</TwoColumnRowContainer>
				</GCContentBlock>
			))}
		</GroupClassesContainer>
	)
}
