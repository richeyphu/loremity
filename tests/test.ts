import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
    await page.goto('/about');
    await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
});

test('home page has expected h1', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Loremity' })).toBeVisible();
});

test('home page has not expected footer to be reachable', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.mouse.wheel(0, 1000);
    await expect(page.locator('footer')).not.toBeVisible({ timeout: 1000 });
});
