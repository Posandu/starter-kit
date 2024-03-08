<script>
	import Header from '$lib/ui/Header.svelte';
	import '../app.pcss';
	import 'svelte-ripple-action/ripple.css';
	import { ModeWatcher } from 'mode-watcher';

	export let data;
</script>

<ModeWatcher />

<Header loggedInUser={data.user ?? undefined} />

<slot />
