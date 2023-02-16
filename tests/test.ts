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
	await page.setViewportSize({ width: 1920, height: 1080 });

	[...Array(10)].forEach(async (_, i) => {
		await page.mouse.wheel(0, 1000 * i + 1);
		await page.waitForTimeout(100);
	});

	const isVisible = await page.evaluate((selector) => {
		let isVisible = false;
		const element = document.querySelector(selector);
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
	}, 'footer');

	expect(isVisible).toBeFalsy();
});

// test('home page can be accessed while offline', async ({ page, context }) => {
// 	await page.goto('/');
// 	await context.setOffline(true);
// 	await page.reload();
// 	await expect(page.getByRole('heading', { name: 'Loremity' })).toBeVisible();
// });
