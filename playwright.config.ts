import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

  ////////////////////////////////////////
  // https://playwright.dev/docs/api/class-testconfig
  ////////////////////////////////////////
  testDir: "./tests",
  outputDir: "./results/media",
  // https://playwright.dev/docs/test-reporters
  reporter: [
    ['list'],
    ['html', { outputFolder: './results/report' }],
    ['json', { outputFile: './results/report/result.json' }]
  ],
  use: {

    ////////////////////////////////////////
    // https://playwright.dev/docs/api/class-testoptions
    ////////////////////////////////////////
    locale: 'ja-JP',
    timezoneId: 'Asia/Tokyo',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    storageState: 'state.json',
    //screenshot: 'only-on-failure',
    //video: 'on-first-retry',
    // screenshot/video を onにしておくと
    // htmlテスト結果で見れるようになる
    screenshot: 'on',
    video: 'on',
  },
};
export default config;
