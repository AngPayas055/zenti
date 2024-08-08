/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        'public-sans': ['Public-Sans', 'sans-serif'],
        'inconsolata': ['Inconsolata', 'monospace'],
      },
		},
		colors: {
			'zentiOrange': '#DE2C00',
			'white': '#fff',
			'zentiGray': '#718FAF'
		},
    screens: {
      'astrolg': '900px',
		}
	},
	plugins: [],
}
