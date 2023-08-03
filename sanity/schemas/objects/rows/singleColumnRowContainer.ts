import { GiHamburgerMenu as icon } from 'react-icons/gi'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'singleColumnRowContainer',
	type: 'document',
	title: 'Single Column Row',
	icon,
	fieldsets: [
		{
			title: 'Row Parameters',
			name: 'rowParams',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
	],
	initialValue: {
		centerContent: false,
		removeBottomPadding: false,
		skinny: false,
		backgroundColor: 'White',
		row: 'singleColumn',
	},
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			description:
				'This field is only for the studio, and previewing content. It will not appear on your site.',
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
					{ title: 'Dark Blue', value: '#013b63' },
					{ title: 'Yellow', value: '#feca2d' },
				],
				layout: 'radio',
				direction: 'horizontal',
			},
			fieldset: 'rowParams',
		}),
		defineField({
			name: 'removeBottomPadding',
			title: 'Remove Bottom Padding',
			type: 'boolean',
			description:
				'Content Blocks have space by default, this option removes the extra space below the content if selected.',
			fieldset: 'rowParams',
		}),
		defineField({
			name: 'skinny',
			title: 'Skinny',
			type: 'boolean',
			description:
				'This option significantly reduces the top and bottom padding for all screen sizes.',
			fieldset: 'rowParams',
		}),
		defineField({
			name: 'centerContent',
			title: 'Center Content',
			type: 'boolean',
			description: 'This determines if the content is to be centered, or left aligned.',
			fieldset: 'rowParams',
		}),
		defineField({
			title: 'Content Row',
			description: 'How many columns in this row?',
			type: 'string',
			name: 'row',
			options: {
				list: [{ title: 'Single Column', value: 'singleColumn' }],
				layout: 'radio',
				direction: 'horizontal',
			},
			fieldset: 'rowParams',
		}),
		defineField({
			name: 'rowContent',
			type: 'array',
			title: 'Row Content',
			of: [defineArrayMember({ type: 'mainPortableText' })],
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
			content: 'rowContent',
		},
		prepare({ title, ...rowContent }) {
			const subs = Object.values(rowContent).filter(Boolean)

			const gatheredSubs = subs[0].map((sub: any) => {
				const conditionalSub =
					sub._type === 'mainPortableText'
						? sub.portableTextBlock[0].children[0].text
						: 'Update this!'

				return conditionalSub
			})

			const subtitles = gatheredSubs.length > 0 ? `${gatheredSubs.join(', ')}` : ''

			return {
				title: title ? `Single Column Row: ${title}` : `Single Column Row`,
				subtitle: `${subtitles}`,
			}
		},
	},
})
