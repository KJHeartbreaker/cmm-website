import React from 'react'
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	LinkedinShareButton,
	LinkedinIcon,
	EmailShareButton,
	EmailIcon,
} from 'next-share'
import { ShareButtonsContainer } from '../pages/post/Post.styles'

const ShareButtons = ({ shareUrl, title }) => {
	const url = `https://www.caninemindsandmanners.ca/${shareUrl}`
	return (
		<ShareButtonsContainer>
			<h5>Share via:</h5>
			<FacebookShareButton url={url}>
				<FacebookIcon size={32} round />
			</FacebookShareButton>
			<TwitterShareButton url={url} title={title}>
				<TwitterIcon size={32} round />
			</TwitterShareButton>
			<LinkedinShareButton url={url}>
				<LinkedinIcon size={32} round />
			</LinkedinShareButton>
			<EmailShareButton
				url={url}
				subject={title}
				body={`Check out this blog post on Canine Minds & Manners: ${title}`}
			>
				<EmailIcon size={32} round />
			</EmailShareButton>
		</ShareButtonsContainer>
	)
}

export default ShareButtons
