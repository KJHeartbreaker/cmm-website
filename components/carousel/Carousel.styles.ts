import styled from 'styled-components'

export const CarouselContainer = styled.div`
	width: 100%;
	border-radius: 8px;
	overflow: hidden;

	.swiper-button-prev,
	.swiper-button-next {
		color: var(--blue-33);

		&:hover {
			color: var(--blue-22);
		}
	}

	span.swiper-pagination-bullet.swiper-pagination-bullet-active {
		background: var(--orange);
	}

	span.swiper-pagination-bullet {
		background: var(--white);
		opacity: 1;
	}

	.mySwiper {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
