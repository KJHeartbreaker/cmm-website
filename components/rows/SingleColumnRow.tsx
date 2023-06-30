import { CustomPortableText } from 'components/portableText/CustomPortableText'
import { PanelContent } from 'types'

interface SingleColumnRowContainerProps {
	panels: PanelContent[]
	centerContent: boolean
}

export default function SingleColumnRowContainer(props: SingleColumnRowContainerProps) {
	const { centerContent, panels } = props
	const { portableTextBlock } = panels[0]

	return (
		<div className="flex w-full max-w-screen-xl flex-col gap-x-5">
			<div className={`flex flex-col ${centerContent ? 'justify-center text-center' : 'justify-start'}`}>
				{/* @ts-ignore */}
				<CustomPortableText value={portableTextBlock!} />
			</div>
		</div>
	)
}
