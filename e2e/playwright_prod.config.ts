import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

  ////////////////////////////////////////
  // https://playwright.dev/docs/api/class-testconfig
  ////////////////////////////////////////
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
    ignoreHTTPSErrors: false,
    trace: 'on',
    screenshot: 'on',
    video: 'on',
  },

  ////////////////////////////////////////
  // https://playwright.dev/docs/api/class-testproject
  ////////////////////////////////////////
  projects: [
    {
      name: '[production] ui test',
      testDir: "./ui",
      use: {
        baseURL: 'http://vmdev01.prosper2.net',
        storageState: 'prod.state.json',
      },
    },
    {
      name: '[production] api test',
      testDir: "./api",
      use: {
        baseURL: 'https://api.github.com',
        extraHTTPHeaders: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
  ],
};
export default config;
