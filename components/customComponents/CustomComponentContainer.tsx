import { Refs } from 'types'

import GalleryGrid from './gallery/GalleryGrid'
import GroupClassRows from './GroupClassCustomComponent'
import TrainersCustomComponent from './TrainersCustomComponent'

interface CustomComponentProps {
	_key: string
	_type: string
	classes?: Refs[]
	trainers?: Refs[]
	galleryArr?: any
}

interface CustomComponentContainerProps {
	rows: CustomComponentProps[]
}

export default function CustomComponentContainer(props: CustomComponentContainerProps) {
	const { rows } = props

	return (
		<>
			{rows.map((row) => {
				let component
				switch (row._type) {
					case 'trainerRows':
						component = <TrainersCustomComponent key={row._key} trainerRefs={row.trainers!} />
						break
					case 'classRows':
						component = <GroupClassRows key={row._key} classRefs={row.classes!} />
						break
					case 'galleryGrid':
						component = <GalleryGrid images={row.galleryArr} />
						break
					default:
						component = null
				}
				return component
			})}
		</>
	)
}
