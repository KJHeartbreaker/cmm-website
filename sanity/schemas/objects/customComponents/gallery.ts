import { BiBone as icon } from 'react-icons/bi'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'galleryGrid',
	type: 'object',
	title: 'Gallery',
	icon,
	// description: 'Select the trainers that you would like to display in this section.',
	fields: [
		defineField({
			title: 'Gallery',
			name: 'galleryArr',
			type: 'array',
			of: [{ type: 'mainImage' }],
		}),
	],
	preview: {
		select: {
			image0: 'galleryArr.0.alt',
			image1: 'galleryArr.1.alt',
			image2: 'galleryArr.2.alt',
			image3: 'galleryArr.3.alt',
		},
		prepare: ({ image0, image1, image2, image3 }) => {
			const images = [image0, image1, image2].filter(Boolean)
			const subtitle = images.length > 0 ? `${images.join(', ')}` : ''
			const hasMoreimages = Boolean(image3)

			return {
				title: 'Gallery',
				subtitle: hasMoreimages ? `${subtitle}…` : subtitle,
			}
		},
	},
})
