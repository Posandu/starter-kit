<script lang="ts">
	import type { user } from '$lib/db/schema';
	import { theme } from '$lib/store';
	import c from 'clsx';

	export let loggedInUser: user | undefined = undefined;
</script>

<div class="navbar bg-base-200 border-b border-b-base-300">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/">
			Starter Kit <span class="icon-[material-symbols--home]"></span>
		</a>
	</div>

	<div class="flex-none">
		<button
			class="btn btn-circle mr-2 btn-ghost"
			on:click={() => {
				theme.toggle();
			}}
		>
			<span
				class={c(
					'text-xl',
					$theme == 'light'
						? 'icon-[material-symbols--sunny]'
						: 'icon-[material-symbols--dark-mode]'
				)}
			></span>
		</button>

		{#if loggedInUser}
			<form method="post" action="/rip">
				<button class="btn btn-secondary btn-outline">Sign out</button>
			</form>
		{:else}
			<a class="btn btn-primary" href="/auth">Login</a>
		{/if}
	</div>
</div>
