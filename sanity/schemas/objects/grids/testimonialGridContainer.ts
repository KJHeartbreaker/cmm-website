import { SlSpeech as icon } from 'react-icons/sl'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'testimonialGridContainer',
	type: 'document',
	title: 'Testimonials',
	icon,
	fieldsets: [
		{
			title: 'Row Parameters',
			name: 'rowParams',
			options: {
				collapsible: true,
				collapsed: false,
			},
		},
	],
	initialValue: {
		backgroundColor: '#ffffff',
	},
	fields: [
		defineField({
			name: 'backgroundColor',
			title: 'Optional Background Colour',
			type: 'string',
			description: 'If no selection is made, the default is white.',
			options: {
				list: [
					{ title: 'White', value: '#ffffff' },
					{ title: 'Grey', value: '#e2e2e2' },
					{ title: 'Blue', value: '#61c8e9' },
					{ title: 'Yellow', value: '#feca2d' },
				],
				layout: 'radio',
				direction: 'horizontal',
			},
			fieldset: 'rowParams',
		}),
		defineField({
			name: 'testimonialsArr',
			type: 'array',
			title: 'Testimonials',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'testimonial' }],
				}),
			],
		}),

		defineField({
			name: 'disabled',
			title: 'Disabled',
			description: 'Setting this to true will disable the component, but not delete it.',
			type: 'boolean',
		}),
	],
	preview: {
		select: {
			testimonial0: 'testimonialsArr.0.heading',
			testimonial1: 'testimonialsArr.1.heading',
			testimonial2: 'testimonialsArr.2.heading',
			testimonial3: 'testimonialsArr.3.heading',
		},
		prepare: ({ testimonial0, testimonial1, testimonial2, testimonial3 }) => {
			const testimonials = [testimonial0, testimonial1, testimonial2].filter(Boolean)
			const subtitles = testimonials.length > 0 ? `${testimonials.join(', ')}` : ''

			return {
				title: 'Testimonials',
				subtitle: `${subtitles}`,
			}
		},
	},
})
