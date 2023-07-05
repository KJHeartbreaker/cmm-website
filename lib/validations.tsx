import { z } from 'zod'

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = z.object({
	name: z.string({
		required_error: 'Name is required.',
	}),
	email: z
		.string({
			required_error: 'Email is required.',
		})
		.email(),
	phone: z.string().regex(phoneRegExp, `That doesn't look quite right!`).min(10).max(14),
	message: z.string({
		required_error: 'Message is required.',
	}),
})
