import { NextRequest, NextResponse } from 'next/server'

import { render } from '@react-email/components'

import { transporter, smtpEmail, smtpMailTo } from 'lib/nodemailer'
import { Email } from 'components/forms/Email'

export async function POST(req: NextRequest, res: NextResponse) {
	const body = await req.json()
	const { name, email, phone, message } = body

	const emailHtml = render(<Email name={name} email={email} phone={phone} message={message} />)

	const options = {
		from: smtpEmail,
		to: smtpMailTo,
		replyTo: email,
		subject: `New Form Submission from ${name}`,
		html: emailHtml,
	}

	try {
		// Send email using the transporter
		await transporter.sendMail(options)
	} catch (error) {
		console.error('Failed to send email:', error)
	}
	return new Response('OK')
}
