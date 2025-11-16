import { SanityClient, createClient } from '@sanity/client'
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
// import { createClient, type SanityClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export function getClient(preview?: { token: string }): SanityClient {
	const client = createClient({
		projectId,
		dataset,
		apiVersion,
		useCdn,
		requestTagPrefix: 'cmm-website',
		// Add timeout to prevent hanging requests
		timeout: 30000, // 30 seconds
	})
	if (preview) {
		if (!preview.token) {
			throw new Error('You must provide a token to preview drafts')
		}
		return client.withConfig({
			token: preview.token,
			useCdn: false,
			ignoreBrowserTokenWarning: true,
			timeout: 30000, // 30 seconds
		})
	}
	return client
}
