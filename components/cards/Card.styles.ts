import styled from 'styled-components'

export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 85px;
	height: 85px;
	border-radius: 50%;
	background-color: var(--yellow);

	img {
		filter: invert(1);
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
