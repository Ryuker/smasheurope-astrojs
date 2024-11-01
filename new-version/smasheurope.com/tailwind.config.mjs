/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'se-blue': '#f9fbfd',
				'se-muted': '#95aac9',
				'se-dark': '#12263f',
				'se-lite-blue': '#edf2f9',
				'se-darker-blue': '#d0ddef'
			}
		},
	},
	plugins: [],
}
