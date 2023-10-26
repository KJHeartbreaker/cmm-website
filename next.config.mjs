/** @type {import('next').NextConfig} */
const config = {
	experimental: {
		esmExternals: 'loose',
	},
	async redirects() {
		return [
			{
				source: '/dog-training-classes.html',
				destination: '/dog-and-puppy-training',
				permanent: true,
			},
			{
				source: '/puppy-training-classes.html',
				destination: '/puppy-training-classes',
				permanent: true,
			},
			{
				source: '/obedience-dog-training-classes.html',
				destination: '/dog-obedience-training',
				permanent: true,
			},
			{
				source: '/reactive-dog-training.html',
				destination: '/reactivity',
				permanent: true,
			},
			{
				source: '/outdoor-and-advanced-dog-training.html',
				destination: '/outdoor-and-advanced-dog-training',
				permanent: true,
			},
			{
				source: '/on-demand-puppy-class.html',
				destination: '/puppy-training-classes',
				permanent: true,
			},
			{
				source: '/private-dog-training.html',
				destination: '/private-training',
				permanent: true,
			},
			{
				source: '/our-team.html',
				destination: '/our-team',
				permanent: true,
			},
			{
				source: '/sign-up.html',
				destination: '/registration',
				permanent: true,
			},
			{
				source: '/contact.html',
				destination: '/contact',
				permanent: true,
			},
			{
				source: '/fun-stuff.html',
				destination: '/resources',
				permanent: true,
			},
			{
				source: '/home.html',
				destination: '/',
				permanent: true,
			},
			{
				source: '/documents.html',
				destination: '/resources',
				permanent: true,
			},
			{
				source: '/test.html',
				destination: '/',
				permanent: true,
			},
			{
				source: '/what-we-do.html',
				destination: '/',
				permanent: true,
			},
			{
				source: '/services',
				destination: '/dog-and-puppy-training',
				permanent: false,
			},
			{
				source: '/store.html',
				destination: '/',
				permanent: false,
			},
			{
				source: '/training',
				destination: '/dog-and-puppy-training',
				permanent: true,
			},
			{
				source: '/puppy-training',
				destination: '/puppy-training-classes',
				permanent: true,
			},
			{
				source: '/basic-manners-and-obedience',
				destination: '/dog-obedience-training',
				permanent: true,
			},
			{
				source: '/advanced-classes',
				destination: '/outdoor-and-advanced-dog-training',
				permanent: true,
			},
			{
				source: '/group-training',
				destination: '/dog-and-puppy-training',
				permanent: true,
			},
			{
				source: '/payment-options.html',
				destination: '/contact',
				permanent: true,
			},
			{
				source: '/outdoor-dog-training.html',
				destination: '/outdoor-and-advanced-dog-training',
				permanent: true,
			},
			{
				source: '/think-leaving-your-dog-in-the-back-yard-all-day-is-a-good-thing-think-again',
				destination: '/',
				permanent: true,
			},
			{
				source: '/new-training-alternatives.html',
				destination: '/dog-and-puppy-training',
				permanent: true,
			},
			{
				source: '/frdqvsr/link.php',
				destination: '/',
				permanent: true,
			},
			{
				source: '/missing_page.html',
				destination: '/',
				permanent: true,
			},
			{
				source: '/the-dangers-of-treat-training',
				destination: '/',
				permanent: true,
			},
		]
	},
	images: {
		remotePatterns: [{ hostname: 'cdn.sanity.io' }],
	},
	typescript: {
		// Set this to false if you want production builds to abort if there's type errors
		ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
	},
	eslint: {
		/// Set this to false if you want production builds to abort if there's lint errors
		ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
	},
	compiler: {
		// see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
		styledComponents: {
			displayName: true,
			ssr: true,
			fileName: true,
		},
	},
}

export default config
