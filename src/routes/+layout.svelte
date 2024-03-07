<script>
	import Header from '$lib/ui/Header.svelte';
	import '../app.pcss';

	export let data;
</script>

<Header loggedInUser={data.user ?? undefined} />

<slot />
