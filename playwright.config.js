const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './docs',
  testMatch: '**/*.js',
  use: {
    headless: true,
  },
});
