import React from 'react'

function DisplayMessage({ message }) {
	const formattedMessage = message.replace(/\n/g, '\n')

	console.log('formattedMessage: ', formattedMessage)

	return <pre>{formattedMessage}</pre>
}

export default DisplayMessage
