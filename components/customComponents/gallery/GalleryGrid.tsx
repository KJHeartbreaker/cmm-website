import { SanityImageProps } from 'types'

import SanityComponentImage from '../../images/SanityComponentImage'
import { GalleryGridContainer, GridItemContainer } from './Gallery.styles'

interface GalleryGridProps {
	images: SanityImageProps[]
}

export default function GalleryGrid(props: GalleryGridProps) {
	const { images } = props

	const generateImagePositions = (index: number) => {
		const imagePositions = [
			{ col: 1, rowStart: 1, height: 300, classes: 'top-short' },
			{ col: 2, rowStart: 1, height: 500, classes: 'top-long' },
			{ col: 3, rowStart: 1, height: 300, classes: 'top-short' },
			{ col: 1, rowStart: 3, height: 500, classes: 'bottom-long' },
			{ col: 2, rowStart: 4, height: 300, classes: 'bottom-short' },
			{ col: 3, rowStart: 3, height: 500, classes: 'bottom-long' },
		]

		const setIndex = Math.floor(index / 6) // Index of the set of six

		return {
			...imagePositions[index % imagePositions.length],
			rowStart: imagePositions[index % imagePositions.length].rowStart + setIndex * 5,
		}
	}

	return (
		<GalleryGridContainer className="max-w-screen-xl">
			{images.map((image, index) => {
				const { col, rowStart, height, classes } = generateImagePositions(index)

				return (
					<GridItemContainer
						key={image.asset._id}
						className={`col-start-${col} ${classes}`}
						rowstart={rowStart}
					>
						<SanityComponentImage alt={image.alt} asset={image.asset} width={400} height={height} />
					</GridItemContainer>
				)
			})}
		</GalleryGridContainer>
	)
}
