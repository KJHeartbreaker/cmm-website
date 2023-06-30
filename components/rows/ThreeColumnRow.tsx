import { PanelContent } from 'types'

import RowColumn from './RowColumn'

interface ThreeColumnRowProps {
	panels: PanelContent[]
}

export default function ThreeColumnRow(props: ThreeColumnRowProps) {
	const { panels } = props

	return (
		<div className="grid grid-cols-3 items-center justify-center gap-5">
			{panels.map((panel) => (
				<RowColumn key={panel._key} {...panel} />
			))}
		</div>
	)
}
