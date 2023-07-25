import { CustomPortableText } from 'components/portableText/CustomPortableText'
import { PanelContent } from 'types'

import { PortableTextBlock } from 'sanity'
import IconCard from '../cards/IconCard'
import SanityComponentImage from '../images/SanityComponentImage'
import ImageButton from '../cards/ImageButtonCard'
import { RowColumnCopy, StyledRowColumn } from './Row.styles'
import ContactFormPanel from '../forms/ContactFormPanel'

export default function RowColumn(panel: PanelContent) {
	const {
		_type,
		title,
		icon,
		heading,
		copy,
		portableTextBlock,
		asset,
		cta,
		landingPageRoute,
		image,
	} = panel

	return (
		<StyledRowColumn>
			{_type === 'mainPortableText' && (
				<RowColumnCopy>
					<CustomPortableText value={portableTextBlock! as PortableTextBlock[]} />
				</RowColumnCopy>
			)}
			{_type === 'mainImage' && (
				<div className="image-container">
					<SanityComponentImage asset={asset} alt={asset!.alt} />
				</div>
			)}
			{_type === 'iconCard' && (
				// @ts-ignore
				<IconCard icon={icon!} heading={heading!} copy={copy!} cta={cta!} />
			)}
			{_type === 'imageButtonCard' && (
				// @ts-ignore
				<ImageButton
					image={image!}
					heading={heading!}
					copy={copy!}
					landingPageRoute={landingPageRoute!}
				/>
			)}
			{_type === 'form' && <ContactFormPanel title={title} copy={copy} type="form" />}
			{_type === 'acuityForm' && (
				<ContactFormPanel title={title} copy={copy} type="acuityForm" />
			)}
		</StyledRowColumn>
	)
}
