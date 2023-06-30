import { CustomPortableText } from 'components/portableText/CustomPortableText'
import { PanelContent } from 'types'

import { PortableTextBlock } from 'sanity'
import IconCard from '../cards/IconCard'
import SanityComponentImage from '../images/SanityComponentImage'

export default function RowColumn(panel: PanelContent) {
	const { _type, icon, heading, copy, portableTextBlock, asset, cta } = panel

	return (
		<>
			{_type === 'mainPortableText' && (
				<div className="flex flex-col justify-center">
					<CustomPortableText value={portableTextBlock! as PortableTextBlock[]} />
				</div>
			)}
			{_type === 'mainImage' && <SanityComponentImage asset={asset} alt={asset!.alt} />}
			{_type === 'iconCard' && (
				// @ts-ignore
				<IconCard icon={icon!} heading={heading!} copy={copy!} cta={cta!} />
			)}
		</>
	)
}
