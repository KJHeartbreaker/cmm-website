import styled from 'styled-components'
import { StyledRowColumn } from '../rows/Row.styles'

export const FormContainer = styled.div`
	background-color: #f4f4f4;
	padding: 20px;
	border-radius: 5px;
	width: 100%;
`

export const FormGroup = styled.div`
	position: relative;

	input {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		color: var(--dark-grey);
		margin-bottom: 30px;
		border: none;
		border-bottom: 1px solid var(--dark-grey);
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;

		&:focus-visible {
			border-radius: 3px;
			outline: 2px solid var(--orange);
		}
	}

	span.error {
		position: absolute;
		font-size: var(--font-small-size);
		color: var(--red);
		bottom: -25px;
	}
`

export const FormGroupTextArea = styled(FormGroup)`
	textarea {
		width: 100%;
		padding: 10px;
		color: var(--dark-grey);
		margin-bottom: 30px;
		border: 1px solid var(--dark-grey);
		background: #fff;
	}

	span.error-text-area {
		position: absolute;
		font-size: var(--font-small-size);
		color: var(--red);
		bottom: 5px;
		left: 0;
	}
`

export const FormGroupButton = styled(FormGroup)`
	display: flex;
	justify-content: flex-end;

	button {
		background-color: var(--orange);
		width: 50%;
		border-radius: 5px;
		transition: 0.3s;

		&:hover {
			background-color: var(--orange-hover);
		}
	}
`

export const ContactFormPanelContainer = styled(StyledRowColumn)`
	h2 {
		margin-bottom: 10px;
	}

	div.copyBlock {
		width: 70%;
	}
`
