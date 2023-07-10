import { BsCalendarDate as icon } from 'react-icons/bs'
import { defineField, defineType } from 'sanity'
import moment from 'moment'

export default defineType({
	title: 'Date Range',
	name: 'dateRange',
	type: 'object',
	icon,
	options: { columns: 2 },
	initialValue: {
		availability: 'open',
	},
	fields: [
		defineField({
			title: 'Start date',
			name: 'startDate',
			type: 'datetime',
			options: {
				timeFormat: 'LT',
				timeStep: 15,
			},
		}),
		defineField({
			title: 'End date',
			name: 'endDate',
			type: 'datetime',
			options: {
				timeFormat: 'LT',
				timeStep: 15,
			},
		}),
		defineField({
			title: 'Availability',
			type: 'string',
			name: 'availability',
			options: {
				list: [
					{ title: 'Open', value: 'open' },
					{ title: 'Nearly Full', value: 'nearlyFull' },
					{ title: 'Full', value: 'full' },
				],
				layout: 'radio',
				direction: 'horizontal',
			},
		}),
	],
	preview: {
		select: {
			title: 'startDate',
			subtitle: 'availability',
		},
		prepare({ title, subtitle }) {
			return {
				title: moment(title).format('dddd, MMMM Do YYYY, h:mm a'),
				subtitle,
			}
		},
	},
})
