import { PanelContent } from 'types'

import RowColumn from './RowColumn'
import { ThreeColumnRowContainer } from './Row.styles'

interface ThreeColumnRowProps {
	id?: string
	title?: string
	hideTitle: boolean
	centerTitle: boolean
	titleColor: string
	panels: PanelContent[]
}

export default function ThreeColumnRow({
	id,
	title,
	hideTitle,
	centerTitle,
	titleColor,
	panels,
}: ThreeColumnRowProps) {
	return (
		<ThreeColumnRowContainer id={id}>
			{title && !hideTitle && (
				<div className={centerTitle ? 'title centered' : 'title'}>
					<h2 style={{ color: titleColor }}>{title}</h2>
				</div>
			)}
			<div className="columns">
				{panels.map((panel) => (
					<RowColumn key={panel._key} {...panel} />
				))}
			</div>
		</ThreeColumnRowContainer>
	)
}
