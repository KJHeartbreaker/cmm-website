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
    "body": body{
        ...
    },
    'content': content[]{
        ...,
        'map': map,
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
        'classRefs': classRefs[]{
            _type == 'reference' => @-> {
                _id,
                name,
                trainingType,
                customTrainingTitle,
                price,
                'upcoming22': upcoming22[]{
                    _key,
                    availability,
                    startDate,
                    startTime,
                    amPm
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
        'relatedResources': relatedResources[]{
            _type == 'reference' => @-> {
                _type == 'post' => {
                    _type,
                    _id,
                    title,
                    slug,
                    author {
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
                    excerpt {
                        portableTextBlock[]{
                            ...
                        },
                    },
                    image {
                        ${ImageProjection}
                    }
                },
                _type == 'resource' => {
                    _type,
                    _id,
                    title,
                    'fileDownload': fileDownload {
                        ...select(
                            _type == 'file' => {
                                asset-> {
                                    url
                                }
                            },
                            @
                        )
                    },
                    excerpt {
                        portableTextBlock[]{
                            ...
                        },
                    },
                    image {
                        ${ImageProjection}
                    }
                }
            }
        },
        'posts': posts[]{
            _type == 'reference' => @-> {
                _id,
                title,
                slug,
                author {
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
                "body": body {
                    portableTextBlock[]{
                        ...
                    },
                },
                excerpt {
                    portableTextBlock[]{
                        ...
                    },
                },
                image {
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
                customTrainingTitle,
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
        'contentBlock': contentBlock {
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
        },
        'rowContent': rowContent[]{
            ...,
            _type == 'carousel' => {
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
                'logoRow': logoRow[]{
                    _key,
                    logo,
                    alt,
                    "logo": asset -> {
                        ...,
                        _id,
                        metadata {
                            lqip
                        }
                    },
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

const SiteMapProjection = groq`
    _id,
    _updatedAt,
    slug {
        current
    }
`

export const homePageQuery = groq`
    *[_type == "home"][0]{
        ${PageQueryProjection}
    }
`

export const homePageTitleQuery = groq`
    *[_type == "home"][0].title
`

export const blogPageQuery = groq`
    *[_type == "blogLandingPage"][0]{
        ${PageQueryProjection}
    }
`

export const pagesBySlugQuery = groq`
    *[_type == "page" && slug.current == $slug][0] {
        ${PageQueryProjection}
    }
`

export const pagesSitemap = groq`
    *[_type == "page" || _type == "blogLandingPage"] {
        ${SiteMapProjection}
    }
`

export const homePageSitemap = groq`
    *[_type == "home"] {
        _id,
        _updatedAt
    }
`

export const postsSitemap = groq`
    *[_type == "post" ] {
        ${SiteMapProjection}
    }
`

export const postsBySlugQuery = groq`
    *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        subheader,
        slug,
        overview,
        author {
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
        body {
            portableTextBlock[]{
                ...
            },
        },
        excerpt {
            portableTextBlock[]{
                ...
            },
        },
        image {
            ${ImageProjection}
        }
    }
`

export const pagePaths = groq`
    *[_type == "page" && slug.current != null].slug.current
`

export const postPaths = groq`
    *[_type == "post" && slug.current != null].slug.current
`

export const settingsQuery = groq`
    *[_type == "settings"][0]{
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
        'logos': footerLogos[]{
            _key,
            alt,
            "logo": asset -> {
                _id,
                metadata {
                    lqip
                }
            }
        },
        ogImage,
    }
`
