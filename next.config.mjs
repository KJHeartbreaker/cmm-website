/** @type {import('next').NextConfig} */
const config = {
	experimental: {
		esmExternals: 'loose',
	},
	async redirects() {
		return [
      {
        source: '/dog-training-classes.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/puppy-training-classes.html',
        destination: '/group-training#polite-puppies',
        permanent: true,
      },
      {
        source: '/obedience-dog-training-classes.html',
        destination: '/group-training#good-dogs-have-more-fun',
        permanent: true,
      },
      {
        source: '/reactive-dog-training.html',
        destination: '/group-training#reactive-rescue',
        permanent: true,
      },
      {
        source: '/outdoor-and-advanced-dog-training.html',
        destination: '/group-training#tails-on-the-trails',
        permanent: true,
      },
      {
        source: '/on-demand-puppy-class.html',
        destination: '/group-training#polite-puppies',
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
        destination: '/training',
        permanent: false,
      },
      {
        source: '/store.html',
        destination: '/',
        permanent: false,
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
