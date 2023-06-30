import { groq } from 'next-sanity'
import { GroupClass, Trainer } from 'types'
import { createClient } from '@sanity/client'

import config from './sanity.config'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    // body,
    overview,
    title,
    "slug": slug.current,
    'content': content[]{
      ...,
      'image': image {
          alt,
          width,
          height,
          crop,
          hotspot,
          asset-> {
              _id,
              metadata {
                  lqip
              }
          }
      },
      'productsArr': productsArr[] -> {
          _key,
          heading,
          price,
          'cta': cta {
              arrow,
              kind,
              title,
              'landingPageRoute': landingPageRoute-> {
                  slug {
                      current
                  },
              },
          },
          'image': image {
              alt,
              width,
              height,
              crop,
              hotspot,
              asset-> {
                  _id,
                  metadata {
                      lqip
                  }
              }
          },
      },
      'testimonialsArr': testimonialsArr[] -> {
          _key,
          heading,
          copy,
      },
      'rows': rows[] {
          ...,
          'trainers': trainers[]{
              ...
          },
          'classes': classesArr[]{
              ...
          },
          'galleryArr': galleryArr[] {
              alt,
              crop,
              hotspot,
              asset-> {
                  _id,
                  metadata {
                      lqip
                  }
              }
          },
      },
      'rowContent': rowContent[]{
          ...,
          'icon': icon {
              alt,
              asset-> {
                _id
              }
          },
          'cta': cta {
              ...,
            'landingPageRoute': landingPageRoute-> {
              slug {
                current
              },
            },
          },
          'asset': asset-> {
              ...,
              _id,
              metadata {
                  lqip
              }
          },
          portableTextBlock[]{
              ...,
              'fileDownload': fileDownload {
                  ...select(
                      _type == 'file' => {
                      ...,
                      asset->
                      },
                      @
                  )
              },
              'asset': asset-> {
                  ...,
                  _id,
                  metadata {
                      lqip
                  }
              },
              'landingPageRoute': landingPageRoute->
          },
      }
    },
  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    // body,
    overview,
    title,
    "slug": slug.current,
    'content': content[]{
      ...,
      'image': image {
          alt,
          width,
          height,
          crop,
          hotspot,
          asset-> {
              _id,
              metadata {
                  lqip
              }
          }
      },
      'productsArr': productsArr[] -> {
          _key,
          heading,
          price,
          'cta': cta {
              arrow,
              kind,
              title,
              'landingPageRoute': landingPageRoute-> {
                  slug {
                      current
                  },
              },
          },
          'image': image {
              alt,
              width,
              height,
              crop,
              hotspot,
              asset-> {
                  _id,
                  metadata {
                      lqip
                  }
              }
          },
      },
      'testimonialsArr': testimonialsArr[] -> {
          _key,
          heading,
          copy,
      },
      'rows': rows[] {
          ...,
          'trainers': trainers[]{
              ...
          },
          'classes': classesArr[]{
              ...
          },
          'galleryArr': galleryArr[] {
              alt,
              crop,
              hotspot,
              asset-> {
                  _id,
                  metadata {
                      lqip
                  }
              }
          },
      },
      'rowContent': rowContent[]{
          ...,
          'icon': icon {
              alt,
              asset-> {
                _id
              }
          },
          'cta': cta {
              ...,
            'landingPageRoute': landingPageRoute-> {
              slug {
                current
              },
            },
          },
          'asset': asset-> {
              ...,
              _id,
              metadata {
                  lqip
              }
          },
          portableTextBlock[]{
              ...,
              'fileDownload': fileDownload {
                  ...select(
                      _type == 'file' => {
                      ...,
                      asset->
                      },
                      @
                  )
              },
              'asset': asset-> {
                  ...,
                  _id,
                  metadata {
                      lqip
                  }
              },
              'landingPageRoute': landingPageRoute->
          },
      }
    },
  }
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]{
      _type == 'navCTA' => {
          ...,
          cta{
              ...,
              landingPageRoute->
          }
      },
      _type == 'navDropdownCTA' => {
          _key,
          _type,
          title,
          cta{
              ...,
              landingPageRoute->
          },
          'subnav': subnav[].landingPageRoute->
      }
    },
    ogImage,
  }
`

export async function getTrainers(id: string): Promise<Trainer> {
	return createClient(config).fetch(
		groq`*[_type == 'trainer' && _id == $id][0]{
		    _id,
		    bio,
		    'picture': picture {
                alt,
                width,
                height,
                crop,
                hotspot,
                asset-> {
                    _id,
                    metadata {
                        lqip
                    }
                }
            },
		    certifications,
		    name,
		    role
        }
        `,
		{ id }
	)
}

export async function getGroupClasses(id: string): Promise<GroupClass> {
	return createClient(config).fetch(
		groq`*[_type == 'classes' && _id == $id][0]{
            _id,
            name,
            slug,
            subheadline,
            price,
            subMenuTitle,
            description,
		    'picture': picture {
                alt,
                width,
                height,
                crop,
                hotspot,
                asset-> {
                    _id,
                    metadata {
                        lqip
                    }
                }
            },
            'cta': cta {
                ...,
                landingPageRoute->
            },
            oDName,
            oDDescription,
            oDCTA,
        }
        `,
		{ id }
	)
}
