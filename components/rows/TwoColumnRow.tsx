import { PanelContent } from 'types'

import RowColumn from './RowColumn'
import { TwoColumnRowContainer } from './Row.styles'

interface TwoColumnRowProps {
	id?: string
	panels: PanelContent[]
}

export default function TwoColumnRow(props: TwoColumnRowProps) {
	const { id, panels } = props

	return (
		<TwoColumnRowContainer id={id}>
			{panels.map((panel) => (
				<RowColumn key={panel._key} {...panel} />
			))}
		</TwoColumnRowContainer>
	)
}
