const { test, expect } = require('@playwright/test');

test('home page shows main heading', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: /welcome to my next\.js learning journey/i })
  ).toBeVisible();
});
