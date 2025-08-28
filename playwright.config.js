// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { report } from 'process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config= {
  testDir: './tests',
  timeout:40 *1000,
  expect : {
    timeout: 40*1000
  },
  report: 'html',

  use:{
    browserName :'chromium',
    headless : false
  }

}
module.exports=config

