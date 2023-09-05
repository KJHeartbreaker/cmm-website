import { GiSettingsKnobs as icon } from 'react-icons/gi'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'settings',
	title: 'Settings',
	type: 'document',
	icon,
	// Uncomment below to have edits publish automatically as you type
	// liveEdit: true,
	fields: [
		defineField({
			name: 'menuItems',
			title: 'Menu Item list',
			description: 'Links displayed on the header of your site.',
			type: 'array',
			of: [{ type: 'navCTA' }, { type: 'navDropdownCTA' }],
		}),
		defineField({
			name: 'ogImage',
			title: 'Open Graph Image',
			type: 'image',
			description: 'Displayed on social cards and search engine results.',
			options: {
				hotspot: true,
			},
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Menu Items',
			}
		},
	},
})
