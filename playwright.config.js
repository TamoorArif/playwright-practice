// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',              // Folder where your test files are stored
  timeout: 40 * 1000,              // Global timeout for each test (40 seconds)
  expect: {
    timeout: 40 * 1000             // Timeout for expect() assertions
  },

  reporter: 'html',                // Generate an HTML report after tests

  projects: [
    // ✅ Desktop Browsers
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit', // Safari
      use: { ...devices['Desktop Safari'] },
    },

    // ✅ Mobile Devices
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    // ✅ Branded Browsers (real Chrome/Edge channels)
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },   // or 'msedge-dev'
    },
  ],
});
