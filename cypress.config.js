const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'c1pdbi',
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})