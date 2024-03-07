try {
	let theme = localStorage.getItem('theme');
	const el = document.documentElement;

	if (theme) el.setAttribute('data-theme', theme);
	else {
		const matches = window.matchMedia('(prefers-color-scheme: dark)').matches;
		theme = matches ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
	}
} catch (e) {
	console.warn('Failed to load theme.js', e);
}
