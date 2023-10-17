import React, { useState } from 'react'
import SwiperCore from 'swiper'
import { SanityImageProps } from '@/types'
import { GalleryCarousel } from '../customComponents/gallery/GalleryCarousel'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface CarouselProps {
	carouselImages: SanityImageProps[]
}

export const Carousel = ({ carouselImages }: CarouselProps) => {
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

	return (
		<GalleryCarousel
			images={carouselImages}
			selectedImageIndex={selectedImageIndex}
			thumbsSwiper={thumbsSwiper}
			setThumbsSwiper={setThumbsSwiper}
		/>
	)
}
