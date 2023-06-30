import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'classes',
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
			name: 'subheadline',
			title: 'Sub Headline',
			type: 'string',
			validation: (rule) => rule.required(),
			fieldset: 'textFields',
		}),
		defineField({
			name: 'price',
			title: 'Price',
			type: 'number',
			validation: (rule) => rule.required(),
			fieldset: 'textFields',
		}),
		defineField({
			name: 'subMenuTitle',
			title: 'Submenu Title',
			type: 'string',
			description: 'This is for the submenu on the classes page.',
			fieldset: 'textFields',
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
		defineField({
			name: 'oDName',
			title: 'On Demand Class Name',
			type: 'string',
			fieldset: 'onDemand',
		}),
		defineField({
			name: 'oDDescription',
			title: 'Description',
			type: 'simplePortableText',
			fieldset: 'onDemand',
		}),
		defineField({
			name: 'oDCTA',
			title: 'CTA',
			type: 'cta',
			fieldset: 'onDemand',
		}),
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'role',
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
