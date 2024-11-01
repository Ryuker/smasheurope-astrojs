/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'se-muted': '#95aac9',
				'se-dark': '#12263f',
				'se-blue': {
					50: '#f9fbfd',
					100: '#edf2f9', 
					200: '#d0ddef',
					300: '#6e84a3',
					400: '#5b7190'
				}
			},
		},
	},
	plugins: [],
}
