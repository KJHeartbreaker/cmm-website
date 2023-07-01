import { PanelContent } from 'types'

import RowColumn from './RowColumn'
import { ThreeColumnRowContainer } from './Row.styles'

interface ThreeColumnRowProps {
	panels: PanelContent[]
}

export default function ThreeColumnRow(props: ThreeColumnRowProps) {
	const { panels } = props

	return (
		<ThreeColumnRowContainer>
			{panels.map((panel) => (
				<RowColumn key={panel._key} {...panel} />
			))}
		</ThreeColumnRowContainer>
	)
}
