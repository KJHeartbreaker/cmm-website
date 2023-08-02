import { PanelContent } from 'types'

import RowColumn from './RowColumn'
import { TwoColumnRowContainer } from './Row.styles'

interface TwoColumnRowProps {
	id?: string
	title?: string
	hideTitle: boolean
	centerTitle: boolean
	condensedCopy: boolean
	centerCopy: boolean
	titleColor: string
	panels: PanelContent[]
}

export default function TwoColumnRow({
	id,
	title,
	hideTitle,
	centerTitle,
	titleColor,
	centerCopy,
	condensedCopy,
	panels,
}: TwoColumnRowProps) {
	return (
		<TwoColumnRowContainer id={id}>
			{title && !hideTitle && (
				<div className={centerTitle ? 'title centered' : 'title'}>
					<h2 style={{ color: titleColor }}>{title}</h2>
				</div>
			)}
			<div className="columns">
				{panels.map((panel) => (
					<RowColumn
						key={panel._key}
						condensedCopy={condensedCopy}
						centerCopy={centerCopy}
						{...panel}
					/>
				))}
			</div>
		</TwoColumnRowContainer>
	)
}
