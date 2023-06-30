import { BiBone as icon } from 'react-icons/bi'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'classRows',
	type: 'object',
	title: 'Class Rows',
	icon,
	description: 'Select the trainers that you would like to display in this section.',
	fields: [
		defineField({
			title: 'Classes',
			name: 'classesArr',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'classes' }],
				}),
			],
		}),
	],
	preview: {
		select: {
			class0: 'classes.0.name',
			class1: 'classes.1.name',
			class2: 'classes.2.name',
			class3: 'classes.3.name',
		},
		prepare: ({ class0, class1, class2, class3 }) => {
			const classes = [class0, class1, class2].filter(Boolean)
			const subtitle = classes.length > 0 ? `${classes.join(', ')}` : ''
			const hasMoreClasses = Boolean(class3)

			return {
				title: 'Classes',
				subtitle: hasMoreClasses ? `${subtitle}…` : subtitle,
			}
		},
	},
})
