import { GroupClass, ImageAsset, SanityImageProps, Trainer } from 'types'

import GalleryGrid from './gallery/GalleryGrid'
import GroupClassCustomComponent from './GroupClassCustomComponent'
import TrainersCustomComponent from './TrainersCustomComponent'
import ContentBlock from '../utilityComponents/ContentBlock'

interface CustomComponentProps {
	_key: string
	_type: string
	groupClasses?: GroupClass[]
	trainers?: Trainer[]
	galleryArr?: any
}

interface CustomComponentContainerProps {
	rows: CustomComponentProps[]
	bgImage?: ImageAsset
	bgColor?: string
	removeBottomPadding?: boolean
}

export default function CustomComponentContainer(props: CustomComponentContainerProps) {
	const { rows, bgImage, bgColor, removeBottomPadding } = props

	return (
		<>
			{rows.map((row) => {
				let component
				switch (row._type) {
					case 'trainerRows':
						component = <TrainersCustomComponent key={row._key} trainers={row.trainers!} />
						break
					case 'classRows':
						component = <GroupClassCustomComponent key={row._key} groupClasses={row.groupClasses!} />
						break
					case 'galleryGrid':
						component = (
							<ContentBlock
								bgImage={bgImage || null}
								bgColor={bgColor || undefined}
								removeBottomPadding={removeBottomPadding || false}
							>
								<GalleryGrid images={row.galleryArr} />
							</ContentBlock>
						)
						break
					default:
						component = null
				}
				return component
			})}
		</>
	)
}
