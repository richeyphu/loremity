<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<img
		src="img/cover.png"
		alt="cover"
		class="mix-blend-multiply dark:invert dark:mix-blend-screen"
	/>

	<h1 class="dark:text-gray-200">About this app</h1>

	<p class="dark:text-gray-200">
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre class="dark:text-gray-200">npm init svelte</pre>

	<p class="dark:text-gray-200">
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
