import { writable } from 'svelte/store';
import { browser } from '$app/env';

let themeValue = false;
if (browser) {
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        themeValue = true;
    }
}

export const darkTheme = writable(themeValue);
