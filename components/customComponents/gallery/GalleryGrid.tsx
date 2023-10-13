'use client'

import React, { useState, useEffect } from 'react'
import { SanityImageProps } from 'types'
import SwiperCore from 'swiper'
import Modal from 'components/modal/Modal'
import SanityComponentImage from '../../images/SanityComponentImage'
import { GalleryGridContainer, GridItemContainer } from './Gallery.styles'
import { GalleryCarousel } from './GalleryCarousel'

interface GalleryGridProps {
	images: SanityImageProps[]
}

export default function GalleryGrid(props: GalleryGridProps) {
	const { images } = props

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

	const openModal = (index: number) => {
		setSelectedImageIndex(index)
		setIsModalOpen(true)

		if (thumbsSwiper) {
			thumbsSwiper.destroy(true, true)
			setThumbsSwiper(null)
		}
	}

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		// Cleanup function to reset overflow when component unmounts
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isModalOpen])

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
						onClick={() => openModal(index)}
					>
						<SanityComponentImage
							alt={image.alt}
							asset={image.asset}
							width={400}
							height={height}
						/>
					</GridItemContainer>
				)
			})}
			{isModalOpen && (
				<Modal
					closeModal={() => {
						setIsModalOpen(false)
						setSelectedImageIndex(0)
					}}
				>
					<GalleryCarousel
						key={isModalOpen ? 'open' : 'closed'}
						images={images}
						selectedImageIndex={selectedImageIndex}
						thumbsSwiper={thumbsSwiper}
						setThumbsSwiper={setThumbsSwiper}
					/>
				</Modal>
			)}
		</GalleryGridContainer>
	)
}
