import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	type: 'object',
	name: 'simplePortableText',
	title: 'Simple Portable Text Block',
	fields: [
		defineField({
			name: 'portableTextBlock',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'block',
					title: 'Block',
					lists: [
						{ title: 'Bullet', value: 'bullet' },
						{ title: 'Number', value: 'number' },
					],
					marks: {
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' },
						],
						// Annotations can be any object structure – e.g. a link or a footnote.
						annotations: [
							{
								name: 'link',
								type: 'object',
								title: 'URL',
								fields: [
									{
										title: 'URL',
										name: 'href',
										type: 'url',
									},
									{
										title: 'Open in new window',
										name: 'blank',
										type: 'boolean',
									},
								],
							},
						],
					},
				}),
			],
		}),
	],
})
