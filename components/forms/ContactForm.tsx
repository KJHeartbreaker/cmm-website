'use client'

import React, { useState, useRef } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { ToastContainer, toast } from 'react-toastify'
import Confetti from 'react-confetti'
import { validationSchema } from 'lib/validations'

import ReCAPTCHA from 'react-google-recaptcha'
import { FormContainer, FormGroup, FormGroupButton, FormGroupTextArea } from './Form.styles'

type FormValues = {
	name: string
	email: string
	phone: string
	message: string
}

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [showConfetti, setShowConfetti] = useState(false)
	const [recaptchaToken, setRecaptchaToken] = useState<string>()

	const recaptchaKey = '6LdeJvcmAAAAAKZAOPDgWXgWfq3OPdHcrVtjEj6P'
	const recaptchaRef = useRef<any>()

	const updateRecaptchaToken = (token: string | null) => {
		setRecaptchaToken(token as string)
	}

	const handleSubmit = async (
		values: FormValues,
		{
			setSubmitting,
			resetForm,
		}: {
			setSubmitting: (isSubmitting: boolean) => void
			resetForm: () => void
		}
	) => {
		try {
			setIsLoading(true)
			// Send email using Nodemailer
			await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			})

			// Reset the form
			resetForm()

			// Show success message or redirect to a thank you page
		} catch (error) {
			// Handle error
			console.error('Failed to send email:', error)
		} finally {
			setSubmitting(false)
			toast.success('Form submitted successfully!')
			setShowConfetti(true)
			setIsLoading(false)
		}
	}

	return (
		<FormContainer>
			<Formik
				initialValues={{ name: '', email: '', phone: '', message: '' }}
				validationSchema={toFormikValidationSchema(validationSchema)}
				onSubmit={handleSubmit}
			>
				<Form>
					<FormGroup>
						<Field type="text" id="name" name="name" placeholder="Name" />
						<ErrorMessage name="name" component="span" className="error" />
					</FormGroup>
					<FormGroup>
						<Field type="email" id="email" name="email" placeholder="Email" />
						<ErrorMessage name="email" component="span" className="error" />
					</FormGroup>
					<FormGroup>
						<Field type="phone" id="phone" name="phone" placeholder="Phone" />
						<ErrorMessage name="phone" component="span" className="error" />
					</FormGroup>
					<FormGroupTextArea>
						<Field id="message" name="message" as="textarea" placeholder="Message" />
						<ErrorMessage name="message" component="span" className="error-text-area" />
					</FormGroupTextArea>

					<FormGroupButton>
						<button type="submit" disabled={isLoading}>
							Send Message
						</button>
					</FormGroupButton>

					<ReCAPTCHA
						ref={recaptchaRef}
						sitekey={recaptchaKey}
						onChange={updateRecaptchaToken}
						size="invisible"
					/>
				</Form>
			</Formik>
			<ToastContainer
				position="bottom-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>

			{showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />}
		</FormContainer>
	)
}

export default ContactForm
