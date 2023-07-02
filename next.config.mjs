/** @type {import('next').NextConfig} */
const config = {
	experimental: {
		esmExternals: 'loose',
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
