/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { productionUrl } from 'plugins/productionUrl'
import { pageStructure, singletonPlugin } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { media } from 'sanity-plugin-media'
import { dashboardTool, projectInfoWidget, projectUsersWidget } from '@sanity/dashboard'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'

import * as documents from './sanity/schemas/documents'
import page from './sanity/schemas/documents/page'
import post from './sanity/schemas/documents/post'
import * as objects from './sanity/schemas/objects'
import home from './sanity/schemas/singletons/home'
import blogLandingPage from './sanity/schemas/singletons/blog'
import settings from './sanity/schemas/singletons/settings'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'CMM v2.0'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
	home.name,
	page.name,
	blogLandingPage.name,
	post.name,
]

export default defineConfig({
	basePath: '/studio',
	projectId: projectId || '',
	dataset: dataset || '',
	title,
	schema: {
		// If you want more content types, you can add them to this array
		types: [
			// Singletons
			home,
			blogLandingPage,
			settings,
			// Documents
			...Object.values(documents),
			// Objects
			...Object.values(objects),
		],
	},
	plugins: [
		deskTool({
			structure: pageStructure([home, blogLandingPage, settings]),
			// `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
			defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
		}),
		dashboardTool({
			widgets: [
				// sanityTutorialsWidget(),
				vercelWidget(),
				projectInfoWidget(),
				projectUsersWidget(),
			],
		}),
		// Configures the global "new document" button, and document actions, to suit the Settings document singleton
		singletonPlugin([home.name, settings.name, blogLandingPage.name]),
		// Add the "Open preview" action
		productionUrl({
			apiVersion,
			previewSecretId,
			types: PREVIEWABLE_DOCUMENT_TYPES,
		}),
		// Vision lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: apiVersion }),
		media(),
	],
})
