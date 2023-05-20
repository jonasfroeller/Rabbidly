/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')], // require('@tailwindcss/typography')
	daisyui: {
		styled: true,
		themes: ['luxury', 'bumblebee'],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'luxury'
	}
}
