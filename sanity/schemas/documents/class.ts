import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'class',
	title: 'Class',
	type: 'document',
	fieldsets: [
		{
			title: 'Text Fields',
			name: 'textFields',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			title: 'Class Image',
			name: 'classImage',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			title: 'CTA',
			name: 'cta',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			title: 'On Demand',
			name: 'onDemand',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
	],
	initialValue: {
		trainingType: 'group',
	},
	fields: [
		defineField({
			name: 'name',
			title: 'Class Name',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			type: 'slug',
			name: 'slug',
			title: 'Slug',
			options: {
				source: 'name',
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: 'Which type of training is this?',
			type: 'string',
			name: 'trainingType',
			options: {
				list: [
					{ title: 'Group', value: 'group' },
					{ title: 'Private', value: 'private' },
					{ title: 'On Demand', value: 'onDemand' },
				],
				layout: 'radio',
				direction: 'horizontal',
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'price',
			title: 'Price',
			type: 'string',
			validation: (rule) => rule.required(),
			fieldset: 'textFields',
		}),
		defineField({
			name: 'upcoming',
			type: 'array',
			title: 'Upcoming Classes',
			of: [defineArrayMember({ type: 'dateRange' })],
			validation: (rule) => rule.max(8),
		}),
		defineField({
			title: 'Key Takeaways',
			name: 'takeaways',
			type: 'array',
			of: [{ type: 'string' }],
			validation: (Rule) => Rule.max(4),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'simplePortableText',
			fieldset: 'textFields',
		}),
		defineField({
			name: 'picture',
			title: 'Picture',
			type: 'mainImage',
			options: { hotspot: true },
			fieldset: 'classImage',
		}),
		defineField({
			name: 'cta',
			title: 'CTA',
			type: 'cta',
			fieldset: 'cta',
		}),
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'trainingType',
			photo: 'picture',
		},
		prepare({ title, subtitle, photo }) {
			return {
				title,
				subtitle,
				media: photo,
			}
		},
	},
})
