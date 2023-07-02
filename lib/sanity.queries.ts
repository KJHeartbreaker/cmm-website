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
              _type == 'reference' => @->
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
        'landingPageRoute': landingPageRoute-> {
            slug {
            current
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
        'trainers': trainers[]{
            _type == 'reference' => @-> {
                _id,
                name,
                certifications,
                picture {
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
                }
            }
        },
      'testimonialsArr': testimonialsArr[] -> {
          _key,
          heading,
          copy,
      },
      'rows': rows[] {
          ...,
            'trainers': trainers[]{
                _type == 'reference' => @-> {
                    _id,
                    name,
                    certifications,
                    role,
                    bio,
                    picture {
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
                    }
                }
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
                  'landingPageRoute': landingPageRoute-> {
            slug {
            current
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

export const trainersQuery = groq`
    *[_type == 'trainer']{
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
`

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
