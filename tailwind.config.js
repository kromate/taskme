module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	mode:'jit',
	theme: {
		extend: {
			colors: {
				primary: '#19104E',
				grey:'#A9A9AA'
			}
		},
	},
	plugins: [],
}