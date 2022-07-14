<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';

	import InfiniteScroll from 'svelte-infinite-scroll';
	import { LoremIpsum } from 'lorem-ipsum';

	const lorem = new LoremIpsum({
		sentencesPerParagraph: {
			max: 8,
			min: 4
		},
		wordsPerSentence: {
			max: 16,
			min: 4
		}
	});

	let paragraph = 15;
</script>

<svelte:head>
	<title>Loremity | Infinitum</title>
	<meta name="description" content="Loremity: Ille infinitum volumen Lorem Ipsum" />
</svelte:head>

<section>
	<h1 class="pt-8">
		<span class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>
	</h1>

	<div class="pt-0">
		<h1 class="text-5xl font-semibold tracking-wide">Loremity</h1>
		<h2 class="text-xl pt-1 font-light tracking-wider">Ille infinitum volumen Lorem Ipsum</h2>
	</div>

	<!-- <Counter /> -->

	<div class="pt-8 max-w-4xl text-justify overflow-x-clip">
		<p
			class="first-letter:text-7xl first-letter:bg-slate-700 first-letter:text-gray-100 first-letter:float-left first-letter:px-2 first-letter:mr-2 first-letter:shadow-md"
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<p>{lorem.generateParagraphs(paragraph)}</p>
		<InfiniteScroll
			threshold={350}
			window={true}
			on:loadMore={() => {
				paragraph = paragraph + 30;
			}}
		/>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
