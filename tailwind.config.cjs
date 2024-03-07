// eslint-disable-next-line @typescript-eslint/no-var-requires
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [addDynamicIconSelectors, require("@tailwindcss/typography"), require("daisyui")]
};

module.exports = config;
