import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Loremity' })).toBeVisible();
});

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
});

// test('home page can be accessed while offline', async ({ page, context }) => {
// 	await page.goto('/');
// 	await context.setOffline(true);
// 	await page.reload();
// 	await expect(page.getByRole('heading', { name: 'Loremity' })).toBeVisible();
// });
