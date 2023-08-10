import { groq } from 'next-sanity'

const ImageProjection = groq`
    alt,
    width,
    height,
    crop,
    hotspot,
    asset -> {
        _id,
        metadata {
            lqip
        }
    }
`

const PageQueryProjection = groq`
    _id,
    overview,
    title,
    "slug": slug.current,
    'content': content[]{
        ...,
        'classRefs': classRefs[]{
            _type == 'reference' => @-> {
                _id,
                name,
                trainingType,
                price,
                'upcoming': upcoming[]{
                    _key,
                    availability,
                    startDate,
                },
                takeaways,
                'slug': slug {
                    current
                },
                'cta': cta {
                    title,
                    arrow,
                    kind,
                    landingPageRoute -> {
                        slug {
                            current
                        },
                    }
                },
                "description": description {
                    portableTextBlock[] {
                        ...,
                        markDefs[]{
                            ...,
                            item -> {
                                ...,
                                _type == "class" => {
                                    "slug": slug {
                                        current
                                    },
                                    "parentPage": parentPage->{
                                        "parentSlug": slug {
                                            current
                                        }
                                    }
                                },
                            },
                        },
                    },
                },
                'picture': picture {
                    ${ImageProjection}
                },
            }
        },
        'image': image {
            ${ImageProjection}
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
                ${ImageProjection}
            },
        },
        'trainers': trainers[]{
            _type == 'reference' => @-> {
                _id,
                name,
                slug,
                certifications,
                picture {
                    ${ImageProjection}
                }
            }
        },
        'programs': programs[]{
            _type == 'reference' => @-> {
                _id,
                name,
                slug,
                'parent': parentPage -> {
                    slug {
                        current
                    }
                },
                trainingType,
                dogName,
                namePlacement,
                cardImage {
                    ${ImageProjection}
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
            'copy': copy {
                portableTextBlock[]{
                    ...,
                    'landingPageRoute': landingPageRoute->
                }
            },
            'iconCards': iconCards[] {
                copy,
                heading,
                'icon': icon {
                    alt,
                    asset -> {
                        _id
                    }
                },
            },
            'trainers': trainers[]{
                _type == 'reference' => @-> {
                    _id,
                    name,
                    slug,
                    certifications,
                    role,
                    bio,
                    picture {
                        ${ImageProjection}
                    }
                }
            },
            'groupClasses': classesArr[]{
                _type == 'reference' => @-> {
                    _id,
                    name,
                    subheadline,
                    price,
                    description,
                    subMenuTitle,
                    'slug': slug {
                        current
                    },
                    'cta': cta {
                        title,
                        arrow,
                        kind,
                        landingPageRoute ->
                    },
                    'picture': picture {
                        ${ImageProjection}
                    },
                    oDName,
                    oDDescription,
                    oDCTA
                }
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
            _type == 'carousel' => {
                autoplay,
                carouselImages[]{
                    ${ImageProjection}
                }
            },
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
                ${ImageProjection}
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
                'landingPageRoute': landingPageRoute->,
                markDefs[]{
                    ...,
                    item -> {
                        ...,
                        _type == "class" => {
                            "slug": slug {
                                current
                            },
                            "parentPage": parentPage->{
                                "parentSlug": slug {
                                    current
                                }
                            }
                        },
                        _type == 'page' => {
                            "slug": slug {
                                current
                            },
                        },
                    },
                },
            },
        }
    },
`

export const homePageQuery = groq`
    *[_type == "home"][0]{
        ${PageQueryProjection}
    }
`

export const homePageTitleQuery = groq`
    *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
    *[_type == "page" && slug.current == $slug][0] {
        ${PageQueryProjection}
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
