<script lang="ts">
	import type { user } from '$lib/db/schema';
	import ThemeToggle from './ThemeToggle.svelte';
	import Button from '@/components/ui/button/button.svelte';

	export let loggedInUser: user | undefined = undefined;
</script>

<div class="flex items-center border-b px-4 py-2">
	<div class="flex-1">
		<a class="font-heading text-lg font-semibold" href="/">
			Starter Kit <span class="icon-[material-symbols--home]"></span>
		</a>
	</div>

	<div class="flex flex-none items-center justify-center">
		<ThemeToggle />

		{#if loggedInUser}
			<form method="post" action="/rip">
				<Button type="submit" class="ml-2" variant="ghost">Logout</Button>
			</form>
		{:else}
			<a class="btn btn-primary" href="/auth">Login</a>
		{/if}
	</div>
</div>
