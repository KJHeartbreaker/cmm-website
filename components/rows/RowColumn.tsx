import { CustomPortableText } from 'components/portableText/CustomPortableText'
import { PanelContent } from 'types'

import { PortableTextBlock } from 'sanity'
import IconCard from '../cards/IconCard'
import SanityComponentImage from '../images/SanityComponentImage'
import ImageButton from '../cards/ImageButtonCard'
import { RowColumnCopy, StyledRowColumn } from './Row.styles'

export default function RowColumn(panel: PanelContent) {
	const { _type, icon, heading, copy, portableTextBlock, asset, cta, landingPageRoute, image } = panel

	return (
		<StyledRowColumn>
			{_type === 'mainPortableText' && (
				<RowColumnCopy>
					<CustomPortableText value={portableTextBlock! as PortableTextBlock[]} />
				</RowColumnCopy>
			)}
			{_type === 'mainImage' && <SanityComponentImage asset={asset} alt={asset!.alt} />}
			{_type === 'iconCard' && (
				// @ts-ignore
				<IconCard icon={icon!} heading={heading!} copy={copy!} cta={cta!} />
			)}
			{_type === 'imageButtonCard' && (
				// @ts-ignore
				<ImageButton image={image!} heading={heading!} copy={copy!} landingPageRoute={landingPageRoute!} />
			)}
		</StyledRowColumn>
	)
}
