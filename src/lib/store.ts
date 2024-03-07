import { writable } from 'svelte/store';

function createThemeStore() {
	const { subscribe, set, update } = writable('light');

	if (typeof localStorage !== 'undefined') {
		const localTheme = localStorage.getItem('theme');
		if (localTheme) set(localTheme);
	}

	return {
		subscribe,
		toggle: () => update((theme) => (theme === 'light' ? 'dark' : 'light'))
	};
}

const setDocumentTag = (theme: string) => {
	if (typeof document == 'undefined') return;

	const html = document.querySelector('html');
	if (html) {
		html.setAttribute('data-theme', theme);
	}
};

export const theme = createThemeStore();

theme.subscribe((theme) => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('theme', theme);
	}
	setDocumentTag(theme);
});
