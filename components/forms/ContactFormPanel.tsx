import { SimplePortableText } from 'components/portableText/SimplePortableText'
import { PortableTextBlock } from 'sanity'
import ContactForm from './ContactForm'
import { ContactFormPanelContainer } from './Form.styles'
import AcuityEmbed from './AcuityEmbed'

interface FormPanel {
	title?: string
	type: 'form' | 'acuityForm'
	copy: { portableTextBlock: PortableTextBlock[] }
}

export default function ContactFormPanel({ title, copy, type }: FormPanel) {
	return (
		<ContactFormPanelContainer>
			<h2>{title}</h2>
			{copy && (
				<div className="copyBlock">
					<SimplePortableText value={copy.portableTextBlock} />
				</div>
			)}
			{type === 'form' && <ContactForm />}
			{type === 'acuityForm' && <AcuityEmbed />}
		</ContactFormPanelContainer>
	)
}
