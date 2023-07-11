import { GrFormEdit as icon } from 'react-icons/gr'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'acuityForm',
	type: 'object',
	title: 'Acuity Form',
	icon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: (Rule) => Rule.required().error('Title is required'),
		}),
		defineField({
			title: 'Copy',
			name: 'copy',
			type: 'simplePortableText',
		}),
	],
})
