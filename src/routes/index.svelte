<script context="module" lang="ts">
    export const prerender = true;
</script>

<script lang="ts">
    import InfiniteScroll from 'svelte-infinite-scroll';
    import { LoremIpsum } from 'lorem-ipsum';

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 12,
            min: 6,
        },
        wordsPerSentence: {
            max: 16,
            min: 4,
        },
    });

    let page: number = 1;
    let paragraph: number = 15;
</script>

<svelte:head>
    <title>Loremity | Infinitum</title>
    <meta name="description" content="Loremity: Ille infinitum volumen Lorem Ipsum" />
    <script async src="https://api.countapi.xyz/hit/loremity-web/visits"></script>
</svelte:head>

<section>
    <h1 class="pt-1">
        <span class="welcome">
            <picture>
                <source srcset="img/svelte-welcome.webp" type="image/webp" />
                <img src="img/svelte-welcome.png" alt="Welcome" />
            </picture>
        </span>
    </h1>

    <div class="pt-0">
        <h1 class="text-3xl md:text-5xl tracking-wide font-serif font-semibold dark:text-gray-200">
            Loremity
        </h1>
        <h2 class="text-md md:text-xl pt-1 tracking-wider font-serif font-light dark:text-gray-200">
            Ille infinitum volumen Lorem Ipsum
        </h2>
    </div>

    <div class="pt-8 max-w-4xl text-justify">
        <p
            class="first-letter:text-7xl first-letter:bg-slate-700 first-letter:text-gray-200 first-letter:float-left first-letter:px-2 first-letter:mr-2 first-letter:shadow-md first-letter:font-serif  dark:text-gray-200 dark:first-letter:bg-slate-100 dark:first-letter:text-slate-700 dark:first-letter:shadow-slate-600"
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
        </p>
        <p class="overflow-x-hidden  dark:text-gray-200">{lorem.generateParagraphs(paragraph)}</p>
        <InfiniteScroll
            threshold={100 * page ** 1.25}
            window={true}
            on:loadMore={() => {
                paragraph = paragraph + 10 * page;
                page++;
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
