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
		{
			title: 'Title Options',
			name: 'titleOptions',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
	],
	initialValue: {
		row: 'twoColumn',
		backgroundColor: '#ffffff',
		overlay: 'noOverlay',
		centerTitle: false,
		hideTitle: false,
		titleColor: 'Dark Grey',
		condensedCopy: false,
		centerCopy: false,
	},
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'hideTitle',
			title: 'Hide Title',
			description:
				'If selected, the title will appear in the CMS, but not on the website. This is useful for identifying page sections.',
			type: 'boolean',
			fieldset: 'titleOptions',
		}),
		defineField({
			name: 'centerTitle',
			title: 'Center Title',
			description: 'If not seleted, the title will be left aligned.',
			type: 'boolean',
			fieldset: 'titleOptions',
		}),
		defineField({
			name: 'titleColor',
			title: 'Title Colour',
			type: 'string',
			description: 'Default is Dark Grey.',
			options: {
				list: [
					{ title: 'Dark Grey', value: '#333333' },
					{ title: 'Blue', value: '#16abcc' },
					{ title: 'Orange', value: '#ee6d08' },
					{ title: 'Yellow', value: '#feca2d' },
					{ title: 'White', value: '#ffffff' },
				],
				layout: 'radio',
				direction: 'horizontal',
			},
			fieldset: 'titleOptions',
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
			name: 'condensedCopy',
			type: 'boolean',
			title: 'Condensed Copy',
			description:
				'Selecting this checkbox will reduce the width of the copy block within the container, and center it within the container.',
			fieldset: 'rowParams',
		}),
		defineField({
			name: 'centerCopy',
			type: 'boolean',
			title: 'Centered Copy',
			description:
				'Selecting this checkbox will center align the text within the copy block.',
			fieldset: 'rowParams',
		}),
		defineField({
			name: 'image',
			type: 'mainImage',
			title: 'Optional Background Image',
			fieldset: 'rowParams',
		}),
		defineField({
			name: 'overlay',
			type: 'string',
			title: 'Overlay',
			description: 'This value will only be applied if a background image has been selected.',
			options: {
				list: [
					{ title: 'None', value: 'noOverlay' },
					{ title: 'Dark', value: 'darkOverlay' },
					{ title: 'Blue', value: 'blueOverlay' },
				],
				layout: 'radio',
				direction: 'horizontal',
			},
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
					{ title: 'Blue', value: '#16abcc' },
					{ title: 'Orange', value: '#ee6d08' },
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
				defineArrayMember({ type: 'acuityForm' }),
				defineArrayMember({ type: 'carousel' }),
				defineArrayMember({ type: 'form' }),
				defineArrayMember({ type: 'iconCard' }),
				defineArrayMember({
					type: 'mainImage',
					options: { hotspot: true },
				}),
				defineArrayMember({ type: 'imageButtonCard' }),
				defineArrayMember({ type: 'mainPortableText' }),
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

			const gatheredSubs = subs[0].map((sub) => {
				let conditionalSub

				switch (sub._type) {
					case 'mainPortableText':
						if (sub.portableTextBlock[0]._type === 'youtube') {
							conditionalSub = 'YouTube Embed'
						} else {
							conditionalSub = sub.portableTextBlock[0]?.children[0]?.text
						}
						break

					case 'mainImage':
						conditionalSub = sub.alt ? `Alt Text: ${sub.alt}` : 'Update this!'
						break

					case 'iconCard':
						conditionalSub = sub.heading ? `Heading: ${sub.heading}` : 'Update this!'
						break

					case 'imageButtonCard':
						conditionalSub = sub.heading
							? `Button Heading: ${sub.heading}`
							: 'Update this!'
						break

					case 'form':
						conditionalSub = sub.title ? `Form Title: ${sub.title}` : 'Update this!'
						break

					default:
						conditionalSub = 'Update this!'
						break
				}

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
