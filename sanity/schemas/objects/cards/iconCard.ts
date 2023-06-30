import { FcFlashOn as icon } from 'react-icons/fc'
import { defineArrayMember, defineConfig, defineField, defineType } from 'sanity'

export default defineType({
	title: 'Icon Card',
	name: 'iconCard',
	type: 'object',
	icon,
	fields: [
		defineField({
			name: 'icon',
			type: 'icon',
			title: 'Icon',
		}),
		defineField({
			name: 'heading',
			type: 'string',
			title: 'Heading',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Copy',
			name: 'copy',
			type: 'simplePortableText',
		}),
		defineField({
			name: 'cta',
			title: 'CTA',
			type: 'cta',
		}),
	],
	preview: {
		select: {
			title: 'heading',
			subtitle: 'subheading',
			photo: 'icon',
			content: 'content.0.children',
		},
		prepare({ title, photo, content }) {
			return {
				title: `Icon Card: ${title}`,
				subtitle: content && content[0]?.text,
				media: photo,
			}
		},
	},
})
