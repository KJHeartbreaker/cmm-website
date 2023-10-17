import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { SanityImageProps } from 'types'
import { MainSwiper, NavSwiper } from './Gallery.styles'
import SanityComponentImage from '../../images/SanityComponentImage'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './swiperStyles.css'

interface GalleryCarouselProps {
	images: SanityImageProps[]
	selectedImageIndex: number
	thumbsSwiper: SwiperCore | null
	setThumbsSwiper: (swiper: SwiperCore) => void
}

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({
	images,
	selectedImageIndex,
	thumbsSwiper,
	setThumbsSwiper,
}) => (
	<>
		<MainSwiper
			as={Swiper}
			initialSlide={selectedImageIndex}
			loop
			spaceBetween={10}
			navigation
			thumbs={{ swiper: thumbsSwiper }}
			modules={[FreeMode, Navigation, Thumbs]}
		>
			{images.map((im, i) => (
				<SwiperSlide key={i}>
					<SanityComponentImage
						alt={im.alt}
						asset={im.asset}
						width={800}
						height={500}
						hotspot={im.hotspot}
					/>
				</SwiperSlide>
			))}
		</MainSwiper>
		<NavSwiper
			as={Swiper}
			onSwiper={setThumbsSwiper}
			loop
			spaceBetween={10}
			slidesPerView={4}
			freeMode
			watchSlidesProgress
			className="navSwipe"
			modules={[FreeMode, Navigation, Thumbs]}
		>
			{images.map((im, i) => (
				<SwiperSlide key={i}>
					<SanityComponentImage
						alt={im.alt}
						asset={im.asset}
						width={400}
						height={300}
						hotspot={im.hotspot}
						crop={im.crop}
					/>
				</SwiperSlide>
			))}
		</NavSwiper>
	</>
)
