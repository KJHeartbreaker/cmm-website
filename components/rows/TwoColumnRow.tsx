import { PanelContent } from 'types'

import RowColumn from './RowColumn'
import { TwoColumnRowContainer } from './Row.styles'

interface TwoColumnRowProps {
	panels: PanelContent[]
}

export default function TwoColumnRow(props: TwoColumnRowProps) {
	const { panels } = props

	return (
		<TwoColumnRowContainer>
			{panels.map((panel) => (
				<RowColumn key={panel._key} {...panel} />
			))}
		</TwoColumnRowContainer>
	)
}
