import { defineType } from 'sanity'

export default defineType({
	title: 'Call to action',
	name: 'cta',
	type: 'object',
	fieldsets: [
		{
			title: 'Link',
			name: 'link',
			options: { collapsible: true, collapsed: true },
		},
		{
			title: 'CTA Options',
			name: 'options',
			options: { collapsible: true, collapsed: true },
		},
	],
	initialValue: {
		kind: 'button',
		arrow: false,
	},
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Kind',
			name: 'kind',
			type: 'string',
			options: {
				layout: 'radio',
				list: ['button', 'link'],
				direction: 'horizontal',
			},
			fieldset: 'options',
		},
		{
			title: 'Arrow Icon',
			name: 'arrow',
			type: 'boolean',
			fieldset: 'options',
		},
		{
			title: 'Landing page',
			name: 'landingPageRoute',
			type: 'reference',
			description: 'This links to another page within the site',
			fieldset: 'link',
			to: [{ type: 'page' }, { type: 'blogLandingPage' }],
		},
		{
			title: 'External link',
			name: 'link',
			type: 'string',
			description: 'Example: https://www.sanity.io',
			fieldset: 'link',
		},
		{
			title: 'Anchor link',
			name: 'anchor',
			type: 'string',
			description:
				'Example: #my-link for same page linking, or https://www.caninemindsandmanners.ca/#my-link for linking to anchors on other pages',
			fieldset: 'link',
		},
		{
			title: 'Downloadable file',
			name: 'fileDownload',
			type: 'file',
			fieldset: 'link',
		},
	],
	preview: {
		select: {
			title: 'title',
			landingPage: 'landingPageRoute.slug.current',
			file: 'file',
			link: 'link',
			anchor: 'anchor',
		},
		prepare({ title, landingPage, file, link, anchor }) {
			let subtitle = 'Not set'
			if (landingPage) {
				subtitle = `Route: /${landingPage}`
			}
			if (file) {
				subtitle = `File: ${file}`
			}
			if (link) {
				subtitle = `External: ${link}`
			}
			if (anchor) {
				subtitle = `Anchor: ${anchor}`
			}
			return {
				title,
				subtitle,
			}
		},
	},
})
