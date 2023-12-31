import React from 'react'

interface FooterIconProps {
	extraClasses: string
}

export default function FooterIcon(props: FooterIconProps) {
	const { extraClasses } = props
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 69.32 77.34"
			fill="#fff"
			className={extraClasses}
		>
			<g>
				<g>
					<path
						d="M47.3,51.16c-1.09-1.09-1.88-3.43-1.84-5.23c0.03-1.41,0.08-2.82,0.04-3.26c-0.42-5.43-4.86-10.39-10.86-10.39
			c-3.63,0-10.51,3.76-10.86,10.39c-0.02,0.45,0.02,1.87,0.05,3.29c0.04,1.82-0.73,4.15-1.79,5.22c-1.07,1.07-4.69,3.3-7.55,5.03
			c-3.52,2.13-5.81,5.55-5.81,9.41c0,6.47,6.42,11.71,14.33,11.71c4.8,0,10.12-2.19,11.69-3.85c1.3,1.47,6.81,3.85,11.61,3.85
			c7.92,0,14.33-5.24,14.33-11.71c0-3.83-2.25-7.23-5.72-9.36C52.09,54.52,48.39,52.25,47.3,51.16z"
					/>
					<path
						d="M30.4,15.61c1.02,7.41,3.3,11.1-4.8,13.17c-9.79,2.5-9.58-3.33-10.72-10.72c-0.77-5.02,0.56-11.84,5.82-16.28
			c1.44-1.22,5.02-2.48,6.67-1.32C30.27,2.49,29.75,10.88,30.4,15.61z"
					/>
					<path
						d="M38.79,15.76c-1.02,7.44-3.31,11.14,4.82,13.22c9.82,2.51,9.61-3.34,10.75-10.76c0.77-5.03-0.56-11.88-5.84-16.34
			c-1.45-1.22-5.04-2.48-6.69-1.32C38.92,2.6,39.44,11.02,38.79,15.76z"
					/>
					<path
						d="M54.85,36.33c-2.5,5.53-5.25,7.89,1.21,11.27c7.8,4.09,8.9-0.48,11.5-5.97c1.76-3.72,3.4-10.64-1.39-13.91
			C64.14,26.34,56.44,32.81,54.85,36.33z"
					/>
					<path
						d="M14.3,36.45c2.47,5.46,5.19,7.8-1.19,11.14c-7.71,4.04-8.8-0.47-11.37-5.9C0,38.01-1.62,31.17,3.12,27.94
			C5.12,26.57,12.73,32.96,14.3,36.45z"
					/>
				</g>
			</g>
		</svg>
	)
}
