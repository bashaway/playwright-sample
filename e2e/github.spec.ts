import { test, expect } from '@playwright/test';

test('GitHubにログインした状態のセッション情報を利用したテスト', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('button', { name: 'View profile and more' }).click();
  await page.getByRole('menuitem', { name: 'Your profile' }).click();
  await expect(page).toHaveURL('https://github.com/bashaway');
});
