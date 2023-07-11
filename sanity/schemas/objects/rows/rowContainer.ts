import { TbColumns2 as icon } from 'react-icons/tb'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'rowContainer',
	type: 'document',
	title: 'Multi Column Row',
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
		row: 'twoColumn',
		backgroundColor: 'White',
	},
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This field is only for the studio, and previewing content. It will not appear on your site.',
		}),
		defineField({
			title: 'Content Row',
			description: 'How many columns in this row?',
			type: 'string',
			name: 'row',
			options: {
				list: [
					{ title: 'Two Column', value: 'twoColumn' },
					{ title: 'Three Column', value: 'threeColumn' },
				],
				layout: 'radio',
				direction: 'horizontal',
			},
			fieldset: 'rowParams',
		}),
		defineField({
			name: 'image',
			type: 'mainImage',
			title: 'Optional Background Image',
			fieldset: 'rowParams',
		}),
		defineField({
			name: 'backgroundColor',
			title: 'Optional Background Colour',
			type: 'string',
			description:
				'If no background image is uploaded, you can choose a background colour. If no selection is made, the default is white.',
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
			name: 'rowContent',
			type: 'array',
			title: 'Row Content',
			// description: 'You can create custom cards, or reference items in the Tool Set.',
			of: [
				defineArrayMember({ type: 'mainPortableText' }),
				defineArrayMember({
					type: 'mainImage',
					options: { hotspot: true },
				}),
				defineArrayMember({ type: 'form' }),
				defineArrayMember({ type: 'acuityForm' }),
				defineArrayMember({ type: 'iconCard' }),
				defineArrayMember({ type: 'imageButtonCard' }),
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
			title: 'title',
			row: 'row',
			content: 'rowContent',
		},
		prepare({ title, row, ...rowContent }) {
			let rowType
			if (row === 'twoColumn') {
				rowType = 'Two Column Row'
			}
			if (row === 'threeColumn') {
				rowType = 'Three Column Row'
			}
			if (row === 'fourColumn') {
				rowType = 'Four Column Row'
			}

			const subs = Object.values(rowContent).filter(Boolean)

			const gatheredSubs = subs[0].map((sub: any) => {
				const conditionalSub =
					sub._type === 'mainPortableText'
						? sub.portableTextBlock[0].children[0].text
						: sub._type === 'mainImage'
						? sub.alt
						: sub._type === 'iconCard'
						? sub.heading
						: sub._type === 'imageButtonCard'
						? sub.heading
						: sub._type === 'form'
						? sub.title
						: 'Update this!'

				return conditionalSub
			})

			const subtitles = gatheredSubs.length > 0 ? `${gatheredSubs.join(', ')}` : ''

			return {
				title: title ? `${rowType}: ${title}` : `${rowType}`,
				subtitle: `${subtitles}`,
			}
		},
	},
})
