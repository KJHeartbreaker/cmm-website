import { SimplePortableText } from 'components/portableText/SimplePortableText'
import { PortableTextBlock } from 'sanity'
import ContactForm from './ContactForm'
import { ContactFormPanelContainer } from './Form.styles'

interface FormPanel {
	title?: string
	copy: { portableTextBlock: PortableTextBlock[] }
}

export default function ContactFormPanel({ title, copy }: FormPanel) {
	return (
		<ContactFormPanelContainer>
			<h2>{title}</h2>
			<div className="copyBlock">
				<SimplePortableText value={copy.portableTextBlock} />
			</div>
			<ContactForm />
		</ContactFormPanelContainer>
	)
}
