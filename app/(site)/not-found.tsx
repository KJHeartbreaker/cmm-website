'use client'

import ContentBlock from 'components/utilityComponents/ContentBlock'
import Link from 'next/link'
import styled from 'styled-components'
import { TwoColumnRowContainer } from 'components/rows/Row.styles'
import SanityComponentImage from '@/components/images/SanityComponentImage'

const FourOhFourColumn = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		color: var(--orange);
		margin-bottom: 25px;
	}

	h2 {
		color: var(--blue-33);
		margin-bottom: 10px;
	}

	img {
		border-radius: 20px;
	}
`

export default function NotFound() {
	const image404 = {
		asset: {
			assetId: '8334dc66f9a91b2888075815609a851677fcb5c2',
			extension: 'jpg',
			metadata: {
				lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAYFBwj/xAAkEAABAwQBAwUAAAAAAAAAAAADAQIEAAUGESESQXEHExQVMv/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQACIRH/2gAMAwEAAhEDEQA/AIb1BscbIM9FGEcALWirz1aRyrzxTDZpL7RbzADFEMEVyCaVi7VU80s56X4drZLhjYOQL88caqvsbzO5AuHukkPd1P28buWOTxU017IchaD+8uDERGSVVvbabopMhWrJ7nFFLEWKEZU6mNVdrrtRS5Ht/9k=',
			},
			mimeType: 'image/jpeg',
			originalFilename: 'Merlin.jpg',
			path: 'images/p7fl7jqd/production/8334dc66f9a91b2888075815609a851677fcb5c2-3024x4032.jpg',
			sha1hash: '8334dc66f9a91b2888075815609a851677fcb5c2',
			size: 2013908,
			uploadId: 'LKBEM6QfNd1MDi1O6nZCBFXOxyl7juJo',
			url: 'https://cdn.sanity.io/images/p7fl7jqd/production/8334dc66f9a91b2888075815609a851677fcb5c2-3024x4032.jpg',
			_createdAt: '2023-10-22T19:15:25Z',
			_id: 'image-8334dc66f9a91b2888075815609a851677fcb5c2-3024x4032-jpg',
			_originalId: 'image-8334dc66f9a91b2888075815609a851677fcb5c2-3024x4032-jpg',
			_rev: '7V6W77YnYTSXWZozOYrxBn',
			_type: 'sanity.imageAsset',
			_updatedAt: '2023-10-22T19:15:25Z',
		},
		width: 3024,
		height: 4032,
		crop: {
			_type: 'sanity.imageCrop',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
		hotspot: {
			_type: 'sanity.imageHotspot',
			x: 0.5,
			y: 0.35539215686274506,
			height: 0.6813725490196086,
			width: 1,
		},
	}
	return (
		<ContentBlock overlay={'noOverlay'} removeBottomPadding={false} skinny={false}>
			<TwoColumnRowContainer>
				<div className="columns">
					<FourOhFourColumn>
						<h1>404: Not Found</h1>
						<h2>I beg your pardon!</h2>
						<p>I don&apos;t think that this is what you&apos;re looking for!</p>
						<p>You can try one of these instead:</p>
						<ul>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/contact">Contact</Link>
							</li>
							<li>
								<Link href="/dog-and-puppy-training">Dog and Puppy Training</Link>
							</li>
							<li>
								<Link href="/puppy-training-classes">Puppy Training Classes</Link>
							</li>
							<li>
								<Link href="/reactivity">Reactivity Training Classes</Link>
							</li>
						</ul>
					</FourOhFourColumn>
					<FourOhFourColumn>
						<SanityComponentImage
							asset={image404.asset}
							alt="Merlin the cat says you're in the wrong place"
							crop={image404.crop}
							height={image404.height}
							width={image404.width}
							hotspot={image404.hotspot}
						/>
					</FourOhFourColumn>
				</div>
			</TwoColumnRowContainer>
		</ContentBlock>
	)
}
