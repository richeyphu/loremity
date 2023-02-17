import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';

// Check if element is visible in viewport function
const checkViewport = (selector: Parameters<Page['evaluate']>[0]) => {
	let isVisible = false;
	const element = document.querySelector(selector as keyof HTMLElementTagNameMap);
	if (element) {
		const rect = element.getBoundingClientRect();
		if (rect.top >= 0 && rect.left >= 0) {
			const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
			const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
			if (rect.right <= vw && rect.bottom <= vh) {
				isVisible = true;
			}
		}
	}
	return isVisible;
};

// Page scroll down function
const scrollDown = async (page: Page, n: number) => {
	for (let i = 0; i < n; i++) {
		await page.mouse.wheel(0, 1000);
		await page.waitForTimeout(10);
	}
};

test('home page has expected footer to be unreachable (desktop)', async ({ page }) => {
	await page.goto('/');

	// Set viewport size for desktop
	await page.setViewportSize({ width: 1536, height: 864 });

	// Try to scroll to bottom
	await scrollDown(page, 100);

	// Check if footer is visible in desktop viewport
	const isVisible = await page.evaluate(checkViewport, 'footer');

	// Expect footer to be unreachable
	expect(isVisible).toBeFalsy();
});

test('home page has expected footer to be unreachable (mobile)', async ({ page }) => {
	await page.goto('/');

	// Set viewport size for mobile
	await page.setViewportSize({ width: 393, height: 852 });

	// Try to scroll to bottom
	await scrollDown(page, 100);

	// Check if footer is visible in mobile viewport
	const isVisible = await page.evaluate(checkViewport, 'footer');

	// Expect footer to be unreachable
	expect(isVisible).toBeFalsy();
});
