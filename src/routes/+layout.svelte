<script lang="ts">
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { darkTheme } from '$lib/store.js';

	inject({ mode: dev ? 'development' : 'production' });

	$: dark = $darkTheme;
</script>

<div class:dark>
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p class="dark:text-gray-200">
			no
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="#" on:click={() => (location.href = 'https://youtu.be/dQw4w9WgXcQ')}>you!</a>
		</p>
	</footer>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
