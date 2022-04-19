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
				grey: '#A9A9AA',
				purple:'#5256E8',
				lightGrey: '#F1F1F5;',
				lightPurple:'#F5F5FF'
			},
			boxShadow: {
				menu :'0 6px 30px -12px rgb(0 0 0 / 67%)'
			}
		},
	},
	plugins: [],
}