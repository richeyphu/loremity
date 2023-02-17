import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
});

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Loremity' })).toBeVisible();
});

test('home page has expected footer to be unreachable', async ({ page }) => {
	await page.goto('/');

	// Check if element is visible in viewport function
	const checkViewport = (selector: Parameters<typeof page.evaluate>[0]) => {
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

	// Set viewport size for desktop
	await page.setViewportSize({ width: 1536, height: 864 })

	// Try to scroll to bottom
	for (let i = 0; i < 100; i++) {
		await page.mouse.wheel(0, 1000);
		await page.waitForTimeout(10);
	}

	// Check if footer is visible in desktop viewport
	const isVisibleInDesktop = await page.evaluate(checkViewport, 'footer');

	// Expect footer to be unreachable
	expect(isVisibleInDesktop).toBeFalsy();

	// Reload page
	await page.reload();

	// Set viewport size for mobile
	await page.setViewportSize({ width: 393, height: 852 });

	// Try to scroll to bottom
	for (let i = 0; i < 100; i++) {
		await page.mouse.wheel(0, 1000);
		await page.waitForTimeout(10);
	}

	// Check if footer is visible in mobile viewport
	const isVisibleInMobile = await page.evaluate(checkViewport, 'footer');

	// Expect footer to be unreachable
	expect(isVisibleInMobile).toBeFalsy();
});

// test('home page can be accessed while offline', async ({ page, context }) => {
// 	await page.goto('/');
// 	await context.setOffline(true);
// 	await page.reload();
// 	await expect(page.getByRole('heading', { name: 'Loremity' })).toBeVisible();
// });
