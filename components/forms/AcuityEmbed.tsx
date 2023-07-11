'use client'

import React from 'react'
import { FormContainer } from './Form.styles'

const AcuityEmbed = () => (
	<FormContainer>
		<iframe
			src="https://app.acuityscheduling.com/schedule.php?owner=28298110"
			title="Schedule Appointment"
			width="100%"
			height="800"
			frameBorder="0"
		/>
	</FormContainer>
)

export default AcuityEmbed
