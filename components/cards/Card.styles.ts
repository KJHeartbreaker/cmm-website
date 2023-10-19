import styled from 'styled-components'
import { device } from '@/styles/Breakpoints'

export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 65px;
	height: 65px;
	border-radius: 50%;
	background-color: var(--yellow);

	a {
		background-color: var(--yellow);
	}

	img {
		width: 40px;
		height: auto;
	}

	@media ${device.md} {
		width: 85px;
		height: 85px;

		img {
			width: 50px;
		}
	}
`

export const IconCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: 100%;
	background-color: var(--white);
	padding: 40px 12px;
	border-radius: 20px;

	@media ${device.lg} {
		padding: 60px 20px;
	}
`

export const TestimonialCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: var(--white);
	padding: 20px;
	height: 100%;

	p {
		font-size: 0.8rem;
		text-align: left;
	}
`

export const ImageButtonCardContainer = styled.div`
	position: relative;
	width: 100%;
	height: 220px;

	a {
		height: 100%;
		color: var(--grey-44);
	}

	img {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
	}
`

export const ImageButtonCardContainerCopyBlock = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 20px;
	position: relative;
	width: 60%;
	z-index: 10;

	h3 {
		font-size: var(--font-title3-mobile-size);
		line-height: var(--font-title3-line-height);

		@media ${device.lg} {
			font-size: var(--font-title3-size);
			line-height: var(--font-title3-line-height);
		}
	}

	p {
		font-size: var(--font-small-size);
		line-height: var(--font-base-line-height);

		@media ${device.lg} {
			font-size: var(--font-base-size);
		}
	}
`

export const TrainerCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: var(--white);
	border-radius: 20px;
	overflow: hidden;

	p {
		margin-bottom: 5px;
	}

	h4 {
		margin-bottom: 20px;
	}

	div.copy-block {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		text-align: center;
		padding: 20px;
		overflow: hidden;
	}

	a {
		&:hover {
			overflow: hidden;
			h4 {
				color: var(--blue-33);
			}

			img {
				transform: scale(1.05);
				transition: all 0.2s ease-in-out;
			}
		}
	}

	img {
		width: 100%;
		max-height: 200px;
		object-fit: cover;
	}

	@media ${device.lg} {
		img {
			max-height: 300px;
		}
	}
`

export const PostCardContainer = styled(TrainerCardContainer)`
	div.copy-block {
		text-align: left;
		align-items: flex-start;

		a {
			h4 {
				margin-bottom: 10px;
			}

			&:hover {
				color: var(--orange-hover);
				h4 {
					color: var(--orange-hover);
				}
			}
		}
	}
`

export const AuthorContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	margin-bottom: 20px;

	img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 1px solid var(--grey-44);
	}

	h5 {
		font-size: 14px;
		color: var(--blue-33);

		&:hover {
			color: var(--blue-22);
		}
	}
`

export const ProgramCardContainer = styled(TrainerCardContainer)`
	div.copy-block {
		h4 {
			margin-bottom: unset;
		}
	}

	a {
		position: relative;

		h4.dog-name {
			position: absolute;
			z-index: 10;
			margin-bottom: 0;
			color: var(--white);

			&.topLeft {
				top: 20px;
				left: 20px;
			}

			&.topRight {
				top: 20px;
				right: 20px;
			}

			&.bottomLeft {
				bottom: 20px;
				left: 20px;
			}

			&.bottomRight {
				bottom: 20px;
				right: 20px;
			}
		}
	}

	&:hover {
		.copy-block a {
			color: var(--blue-33);
		}
	}
`
