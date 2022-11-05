import { test, expect } from '@playwright/test';

test('認証不要サイトでの基本テスト', async ({page}) => {
  await page.goto('http://vmdev01.prosper2.net/');

  ////////////////////////
  // expect - Jest expect library
  // https://jestjs.io/docs/expect
  ////////////////////////

  // ページコンテンツに文字列が含まれているかの確認
  const BodyText = await page.content();
  expect(BodyText).toContain("Welcome");

  // テキストが正しいかの確認
  const HeaderText = await page.innerText("h1")
  expect(HeaderText).toBe("Welcome to OpenResty!");



  ////////////////////////
  // expect(locator)
  // https://playwright.dev/docs/test-assertions
  // https://playwright.dev/docs/locators
  // https://playwright.dev/docs/api/class-locator
  ////////////////////////

  // リンク先が正しいかの確認
  const getStarted = page.getByRole('link', { name: 'OpenResty' });
  await expect(getStarted).toHaveAttribute('href', 'https://openresty.org/');
  await getStarted.click();

  // セレクタ指定した要素に対する確認
  const text = page.locator('.text');
  await expect(text).toHaveText(/nginx.*luajit/i);

  // セレクタ指定（ネスト）した要素に対する確認
  const product = page.locator('.header .product-name');
  await expect(product).toHaveText(/xray/i);



  ////////////////////////
  // expect(page)
  // https://playwright.dev/docs/api/class-page
  ////////////////////////

  // リンク先をクリックした遷移先が正しいかの確認
  await expect(page).toHaveURL('https://openresty.org/en/');

  // ページタイトルが正しいかの確認
  await expect(page).toHaveTitle(/openresty.*site/i);


  ////////////////////////
  // screenshots
  // https://playwright.dev/docs/screenshots
  ////////////////////////
  await page.screenshot({ path: './results/media/screenshot_openresty.png', fullPage: true });
  //await page.locator('.header').screenshot({ path: './results/media/screenshot_header.png' });


  ////////////////////////
  // 日本語サイトに対するシナリオ
  ////////////////////////
  await page.goto('https://www.wikipedia.org/');
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('wiki');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page).toHaveURL('https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%A3%E3%82%AD');
  await page.screenshot({ path: './results/media/screenshot_wiki.png', fullPage: true });
});
