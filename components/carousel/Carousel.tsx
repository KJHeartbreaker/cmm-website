import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { SanityImageProps } from '@/types'
import SanityComponentImage from '../images/SanityComponentImage'

interface CarouselProps {
	autoTransition: boolean
	carouselImages: SanityImageProps[]
}

export const Carousel = ({ carouselImages, autoTransition }: CarouselProps) => {
	const autoTransProps = {
		delay: 2500,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	}

	return (
		<Swiper
			pagination={{
				dynamicBullets: true,
				clickable: true,
			}}
			className="mySwiper"
			autoplay={autoTransition ? autoTransProps : false}
			loop
			modules={[Autoplay, Navigation, Pagination]}
			navigation
		>
			{carouselImages.map((image) => (
				<SwiperSlide key={image.asset._id}>
					<SanityComponentImage alt={image.alt} asset={image.asset} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
