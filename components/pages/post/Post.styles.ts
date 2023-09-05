import { AuthorContainer } from '@/components/cards/Card.styles'
import { device } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const BlogGuts = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;

	@media ${device.sm} {
		flex-direction: row;
	}
`

export const ShareButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	justify-content: flex-end;
	gap: 10px;

	h5 {
		margin: 0;
		color: var(--orange);
		font-size: 14px;
	}

	.buttons-container {
		display: flex;
		flex-direction: row;
	}
`

export const PostContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	h1.title {
		margin-bottom: 40px;
	}

	img.post-image {
		width: 100%;
		margin-bottom: 20px;
	}

	h3.subheader {
		margin-bottom: 20px;
	}

	${AuthorContainer} {
		flex: 1;
		width: 100%;
		margin-bottom: 0;

		img {
			width: 40px;
			height: 40px;
		}
	}

	${ShareButtonsContainer} {
		flex: 1;
	}

	@media ${device.sm} {
		max-width: 720px;
		padding: 35px 0;
	}

	@media ${device.md} {
		max-width: 960px;
	}
`
