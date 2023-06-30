import { GrDocumentPdf as icon } from 'react-icons/gr'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'pdf',
	type: 'object',
	title: 'PDF',
	icon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: (Rule) => Rule.required().error('Title is required'),
		}),
		defineField({
			name: 'pdf',
			type: 'file',
			title: 'File',
			description: 'Description text goes here',
			validation: (Rule) => Rule.required().error('PDF file is required'),
			options: {
				accept: '.pdf',
			},
		}),
	],
})
