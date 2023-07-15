import { groq } from 'next-sanity'

export const homePageQuery = groq`
    *[_type == "home"][0]{
        _id,
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
                    description,
                    'picture': picture {
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
                    },
                }
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
