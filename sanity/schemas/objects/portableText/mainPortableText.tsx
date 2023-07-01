/* eslint-disable react/destructuring-assignment */
import { BsCardText, BsCircleFill } from 'react-icons/bs'
import { defineArrayMember, defineField, defineType } from 'sanity'

const cmmYellowIcon = () => <BsCircleFill color="#feca2d" />
const cmmYellowDecorator = (props: any) => <span className="cmmYellow">{props.children}</span>

const cmmBlueIcon = () => <BsCircleFill color="#057198" />
const cmmBlueDecorator = (props: any) => <span className="cmmBlue">{props.children}</span>

const cmmOrangeIcon = () => <BsCircleFill color="#ee6d08" />
const cmmOrangeDecorator = (props: any) => <span className="cmmOrange">{props.children}</span>

const HighlightIcon = () => <span style={{ fontWeight: 'bold', color: 'yellow' }}> H </span>
const HighlightDecorator = (props: any) => <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>

export default defineType({
	type: 'object',
	name: 'mainPortableText',
	title: 'Portable Text Block',
	icon: BsCardText,
	fields: [
		defineField({
			name: 'portableTextBlock',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'block',
					title: 'Block',
					styles: [
						{ title: 'Paragraph', value: 'normal' },
						{ title: 'H1', value: 'h1' },
						{ title: 'H2', value: 'h2' },
						{ title: 'H3', value: 'h3' },
						{ title: 'H4', value: 'h4' },
						{ title: 'H5', value: 'h5' },
						{ title: 'Quote', value: 'blockquote' },
					],
					lists: [
						{ title: 'Bullet', value: 'bullet' },
						{ title: 'Number', value: 'number' },
					],
					marks: {
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' },
							{
								title: 'Yellow',
								value: 'cmmYellow',
								icon: cmmYellowIcon,
								component: cmmYellowDecorator,
							},
							{
								title: 'Blue',
								value: 'cmmBlue',
								icon: cmmBlueIcon,
								component: cmmBlueDecorator,
							},
							{
								title: 'Orange',
								value: 'cmmOrange',
								icon: cmmOrangeIcon,
								component: cmmOrangeDecorator,
							},
							{ title: 'Underline', value: 'underline' },
							{
								title: 'Highlight',
								value: 'highlight',
								icon: HighlightIcon,
								component: HighlightDecorator,
							},
							{ title: 'Strike', value: 'strike-through' },
						],
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
										validation: (Rule) =>
											Rule.uri({
												scheme: ['http', 'https', 'mailto', 'tel'],
											}),
									},
									{
										title: 'Open in new window',
										name: 'blank',
										type: 'boolean',
									},
								],
							},
							{
								name: 'internalLink',
								type: 'object',
								title: 'Internal Link',
								fields: [
									{
										name: 'item',
										type: 'reference',
										to: [{ type: 'page' }],
									},
								],
							},
						],
					},
				}),
				defineArrayMember({
					type: 'image',
					fields: [
						{
							name: 'alt',
							type: 'string',
							title: 'Alternative text',
							description: 'Important for SEO and accessiblity.',
							options: {
								isHighlighted: true,
							},
						},
					],
				}),
				defineArrayMember({
					name: 'hr',
					title: 'HR',
					type: 'object',
					fields: [
						defineField({
							name: 'hr',
							title: 'hr',
							type: 'string',
							readOnly: true,
							initialValue: '--- Horizontal Rule ---',
						}),
						defineField({
							name: 'size',
							type: 'string',
							description: 'This value determines the spacing above and below the line.',
							initialValue: '25',
						}),
						defineField({
							name: 'width',
							type: 'string',
							description: 'This value is a percentage of the container.',
							initialValue: '70',
						}),
					],
				}),
				defineArrayMember({
					title: 'CTA',
					name: 'cta',
					type: 'cta',
				}),
			],
		}),
	],
})
