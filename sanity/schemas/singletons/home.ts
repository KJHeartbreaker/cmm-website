import { GoHome } from 'react-icons/go'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'home',
	title: 'Home',
	type: 'document',
	icon: GoHome,
	// Uncomment below to have edits publish automatically as you type
	// liveEdit: true,
	fields: [
		defineField({
			name: 'title',
			description: 'This field is the title of your personal website.',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'overview',
			description:
				'Used both for the <meta> description tag for SEO, and the personal website subheader.',
			title: 'Description',
			type: 'array',
			of: [
				// Paragraphs
				defineArrayMember({
					lists: [],
					marks: {
						annotations: [
							{
								name: 'link',
								type: 'object',
								title: 'Link',
								fields: [
									{
										name: 'href',
										type: 'url',
										title: 'Url',
									},
								],
							},
						],
						decorators: [
							{
								title: 'Italic',
								value: 'em',
							},
							{
								title: 'Strong',
								value: 'strong',
							},
						],
					},
					styles: [],
					type: 'block',
				}),
			],
			validation: (rule) => rule.max(155).required(),
		}),
		defineField({
			name: 'content',
			type: 'array',
			title: 'Page sections',
			description: 'Add, edit, and reorder sections',
			of: [
				defineArrayMember({
					name: 'Hero Banner',
					type: 'heroBanner',
				}),
				defineArrayMember({
					name: 'Single Column Content Row',
					type: 'singleColumnRowContainer',
				}),
				defineArrayMember({
					name: 'Content Rows',
					type: 'rowContainer',
				}),
				defineArrayMember({
					name: 'Product Grid',
					type: 'productGridContainer',
				}),
				defineArrayMember({
					name: 'Programs Grid',
					type: 'programsGridContainer',
				}),
				defineArrayMember({
					name: 'Trainers Grid',
					type: 'trainersGridContainer',
				}),
				defineArrayMember({
					name: 'Testimonials',
					type: 'testimonialGridContainer',
				}),
				defineArrayMember({
					name: 'Custom Component',
					type: 'customComponent',
				}),
				defineArrayMember({
					name: 'Class Row',
					type: 'classRowsContainer',
				}),
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				subtitle: 'Home',
				title,
			}
		},
	},
})
