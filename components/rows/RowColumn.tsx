import { PortableTextBlock } from 'sanity'
import { CustomPortableText } from 'components/portableText/CustomPortableText'
import { PanelContent } from 'types'

import IconCard from '../cards/IconCard'
import SanityComponentImage from '../images/SanityComponentImage'
import ImageButton from '../cards/ImageButtonCard'
import { RowColumnCopy, StyledRowColumn } from './Row.styles'
import ContactFormPanel from '../forms/ContactFormPanel'
import { Carousel } from '../carousel/Carousel'
import { CarouselContainer } from '../carousel/Carousel.styles'

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
		centerCopy,
		autoplay,
		carouselImages,
	} = panel

	return (
		<StyledRowColumn className={_type === 'carousel' ? 'carousel-wrapper' : ''}>
			{_type === 'acuityForm' && (
				<ContactFormPanel title={title} copy={copy} type="acuityForm" />
			)}
			{_type === 'carousel' && (
				<CarouselContainer>
					<Carousel autoTransition={autoplay} carouselImages={carouselImages} />
				</CarouselContainer>
			)}
			{_type === 'form' && <ContactFormPanel title={title} copy={copy} type="form" />}
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
			{_type === 'mainImage' && asset && (
				<div className="image-container">
					{/* @ts-ignore */}
					<SanityComponentImage asset={asset} alt={asset!.alt} />
				</div>
			)}
			{_type === 'mainPortableText' && (
				<RowColumnCopy>
					<div className={centerCopy ? 'copy-block centered' : 'copy-block'}>
						<CustomPortableText value={portableTextBlock! as PortableTextBlock[]} />
					</div>
				</RowColumnCopy>
			)}
		</StyledRowColumn>
	)
}
