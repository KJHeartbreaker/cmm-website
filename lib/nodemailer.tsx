import nodemailer from 'nodemailer'
import SMPTransport from 'nodemailer-smtp-transport'

export const smtpEmail = process.env.GOOGLE_EMAIL
export const smtpMailTo = process.env.SMTP_MAIL_TO
export const smtpPassword = process.env.GOOGLE_PASSWORD

export const transporter = nodemailer.createTransport(
	SMPTransport({
		service: 'gmail',
		auth: {
			user: smtpEmail,
			pass: smtpPassword,
		},
	})
)
