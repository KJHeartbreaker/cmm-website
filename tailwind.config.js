/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
				mono: ['var(--font-paytone-one)'],
				paytone: ['var(--font-paytone-one)'],
			},
		},
		colors: {
			blue22: '#61c8e9',
			blue33: '#16abcc',
			blue44: '#057198',
			blue55: '#013b63',
			grey22: '#e2e2e2',
			grey33: '#454d5a',
			grey44: '#323943',
			grey55: '#333333',
			orange: '#ee6d08',
			orangeHover: '#f39852',
			red: '#ff001c',
			white: '#ffffff',
			yellow: '#feca2d',
		},
		gridTemplateRows: {
			5: 'repeat(5, 150px)',
		},
		screens: {
			xs: '576px',
			sm: '768px',
			md: '992px',
			lg: '1366px',
			xl: '1600px',
			xxl: '1920px',
		},
	},
	plugins: [],
}
