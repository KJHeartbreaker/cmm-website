import React, { FC, ReactNode } from 'react'
import { IoMdClose } from 'react-icons/io'
import { ModalClose, ModalContentBackground, Overlay } from './Modal.styles'

interface ModalProps {
	children: ReactNode
	closeModal: () => void
}

const Modal: FC<ModalProps> = ({ children, closeModal }) => (
	<Overlay onClick={closeModal}>
		<ModalContentBackground onClick={(e) => e.stopPropagation()}>
			<ModalClose onClick={closeModal}>
				<IoMdClose />
			</ModalClose>
			{children}
		</ModalContentBackground>
	</Overlay>
)

export default Modal
