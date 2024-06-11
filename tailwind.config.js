/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			spacing: {
				'61': '15.25rem',
				'88': '22rem',
				'112': '28rem',
				'135': '33.75rem'
			}
		},
		fontFamily: {
			'sans': ['"League Spartan", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'],
		},
		lineHeight: {
			'8': '2rem',
			'12': '3rem',
		},
		colors: {
			'white': '#ffffff',
			'ghost-white': '#f7f2f7',
			'mountbatten-pink': '#927b91',
			'cyclamen' : '#EE69A4',
			'palatinate': '#512051',
		},
	},
	plugins: [],
}
