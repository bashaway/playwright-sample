import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

  ////////////////////////////////////////
  // https://playwright.dev/docs/api/class-testconfig
  ////////////////////////////////////////
  //testDir: "./tests",
  testDir: "./",
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
    //screenshot: 'only-on-failure',
    //video: 'on-first-retry',
    // screenshot/video を onにしておくと
    // htmlテスト結果で見れるようになる
    trace: 'on',
    screenshot: 'on',
    video: 'on',
  },

  ////////////////////////////////////////
  // https://playwright.dev/docs/api/class-testproject
  ////////////////////////////////////////
  projects: [
    {
      name: 'dev',
      use: {
        baseURL: 'http://vmdev01.prosper2.net',
        storageState: 'dev.state.json',
        ignoreHTTPSErrors: true,
      },
    },
    {
      name: 'prod',
      use: {
        baseURL: 'http://vmdev01.prosper2.net',
        storageState: 'prod.state.json',
        ignoreHTTPSErrors: false,
      }
    },
  ],
};
export default config;
