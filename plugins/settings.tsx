/**
 * This plugin contains all the logic for setting up the singletons
 */

import { apiVersion, previewSecretId } from 'lib/sanity.api'
import { CgShoppingCart } from 'react-icons/cg'
import { GiCobweb, GiGraduateCap, GiSittingDog } from 'react-icons/gi'
import { SlSpeech } from 'react-icons/sl'
import { type DocumentDefinition } from 'sanity'
import { type StructureResolver } from 'sanity/desk'

import { PREVIEWABLE_DOCUMENT_TYPES } from '../sanity.config'
import { PreviewPane } from './previewPane/PreviewPane'

export const singletonPlugin = (types: string[]) => ({
	name: 'singletonPlugin',
	document: {
		// Hide 'Singletons (such as Home)' from new document options
		// https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
		newDocumentOptions: (prev, { creationContext }) => {
			if (creationContext.type === 'global') {
				return prev.filter((templateItem) => !types.includes(templateItem.templateId))
			}

			return prev
		},
		// Removes the "duplicate" action on the Singletons (such as Home)
		actions: (prev, { schemaType }) => {
			if (types.includes(schemaType)) {
				return prev.filter(({ action }) => action !== 'duplicate')
			}

			return prev
		},
	},
})

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure =
	(typeDefArray: DocumentDefinition[]): StructureResolver =>
	(S) => {
		// Goes through all of the singletons that were provided and translates them into something the
		// Desktool can understand
		const singletonItems = typeDefArray.map((typeDef) =>
			S.listItem()
				.title(typeDef.title!)
				.icon(typeDef.icon)
				.child(
					S.editor()
						.id(typeDef.name)
						.schemaType(typeDef.name)
						.documentId(typeDef.name)
						.views([
							// @todo: consider DRYing with `plugins/previewPane/index.tsx`
							// Default form view
							S.view.form(),
							// Preview
							...(PREVIEWABLE_DOCUMENT_TYPES.includes(typeDef.name)
								? [
										S.view
											.component((props) => (
												<PreviewPane
													previewSecretId={previewSecretId}
													apiVersion={apiVersion}
													{...props}
												/>
											))
											.title('Preview'),
								  ]
								: []),
						])
				)
		)

		return S.list()
			.title('Content')
			.items([
				...singletonItems,
				S.listItem()
					.title('Pages')
					.icon(GiCobweb)
					.child(S.documentTypeList('page').title('Pages').filter('_type == "page" && (_id != "homepage")')),
				S.divider(),
				S.listItem()
					.title('Our Team')
					.icon(GiSittingDog)
					.child(S.documentTypeList('trainer').title('Trainers')),
				S.listItem().title('Classes').icon(GiGraduateCap).child(S.documentTypeList('classes').title('Classes')),
				S.listItem()
					.title('Products')
					.icon(CgShoppingCart)
					.child(S.documentTypeList('product').title('Products')),
				S.listItem()
					.title('Testimonials')
					.icon(SlSpeech)
					.child(S.documentTypeList('testimonial').title('Testimonials')),
			])
	}
