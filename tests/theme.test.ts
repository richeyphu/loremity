import { expect, test } from '@playwright/test';

test.describe('Web Theme', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('shows page in light mode', async ({ page }) => {
		(await page.locator('[aria-label="Dark mode"]').isHidden()) &&
			(await page.locator('[aria-label="Light mode"]').click());
		await expect(page.locator('[aria-label="Dark mode"]')).toBeVisible();
		await expect(page.locator('[aria-label="Light mode"]')).not.toBeVisible();
		await expect(page.locator('[id=theme-toggle-dark-icon]')).toBeVisible();
		await expect(page.locator('[id=theme-toggle-light-icon]')).not.toBeVisible();
		await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
	});

	test('shows page in dark mode', async ({ page }) => {
		(await page.locator('[aria-label="Light mode"]').isHidden()) &&
			(await page.locator('[aria-label="Dark mode"]').click());
		await expect(page.locator('[aria-label="Dark mode"]')).not.toBeVisible();
		await expect(page.locator('[aria-label="Light mode"]')).toBeVisible();
		await expect(page.locator('[id=theme-toggle-dark-icon]')).not.toBeVisible();
		await expect(page.locator('[id=theme-toggle-light-icon]')).toBeVisible();
		await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
	});

	test.use({ colorScheme: 'dark' });

	test('shows page in system mode', async ({ page }) => {
		await expect(page.locator('[aria-label="Dark mode"]')).not.toBeVisible();
		await expect(page.locator('[aria-label="Light mode"]')).toBeVisible();
		await expect(page.locator('[id=theme-toggle-dark-icon]')).not.toBeVisible();
		await expect(page.locator('[id=theme-toggle-light-icon]')).toBeVisible();
		await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
	});
});
