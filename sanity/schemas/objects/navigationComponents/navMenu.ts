import { FiMenu } from 'react-icons/fi'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	title: 'Menu',
	name: 'navMenu',
	type: 'document',
	icon: FiMenu,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Nav Items',
			name: 'items',
			type: 'array',
			of: [{ type: 'navCTA' }, { type: 'navDropdownCTA' }],
		},
	],
	preview: {
		select: {
			title: 'title',
			items: 'items',
		},
		prepare(selection) {
			const { title } = selection
			return {
				title,
			}
		},
	},
})
