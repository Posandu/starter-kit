/* eslint-disable @typescript-eslint/no-var-requires */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/**/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [addDynamicIconSelectors(), require('@tailwindcss/typography'), require('daisyui')],

	daisyui: {
		logs: false,
		themes: [
			{
				light: require('daisyui/src/theming/themes')['winter'],
				'base-100': '#fff',
			},
			{
				dark: {
					...require('daisyui/src/theming/themes')['winter'],
					'base-100': '#0F172A',
					'base-200': '#1E293B',
					'base-300': '#2E3E55',
					'base-content': '#ffffff'
				}
			}
		]
	}
};

module.exports = config;
