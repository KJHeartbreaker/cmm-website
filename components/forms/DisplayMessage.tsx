import React from 'react'

function DisplayMessage({ message }) {
	const formattedMessage = message.replace(/\n/g, '\n')

	return <pre>{formattedMessage}</pre>
}

export default DisplayMessage
