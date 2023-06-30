import { PanelContent } from 'types'

import RowColumn from './RowColumn'

interface TwoColumnRowProps {
	panels: PanelContent[]
}

export default function TwoColumnRow(props: TwoColumnRowProps) {
	const { panels } = props

	return (
		<div className="grid max-w-screen-xl grid-cols-2 items-center justify-center gap-x-5">
			{panels.map((panel) => (
				<RowColumn key={panel._key} {...panel} />
			))}
		</div>
	)
}
