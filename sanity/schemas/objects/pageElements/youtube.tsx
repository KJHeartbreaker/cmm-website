import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { defineField, defineType } from 'sanity'

const Preview = (props) => {
	const { url, renderDefault } = props
	if (!url) {
		return <div>Missing YouTube URL</div>
	}
	const id = getYouTubeId(url)
	return (
		<div>
			{/* 👇 Renders the default preview UI */}
			{renderDefault({ ...props, title: 'YouTube Embed' })}
			{/* 👇 Renders the video preview below */}
			<LiteYouTubeEmbed id={id!} title="YouTube Embed" />
		</div>
	)
}

export default defineType({
	name: 'youtube',
	type: 'object',
	title: 'YouTube Embed',
	fields: [
		defineField({
			name: 'url',
			type: 'url',
			title: 'YouTube video URL',
		}),
	],
	preview: {
		select: {
			url: 'url',
		},
	},
	components: {
		preview: Preview,
	},
})
