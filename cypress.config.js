const { defineConfig } = require('cypress');
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // allureWriter(on, config);
    },

    baseUrl: 'https://www.newglasses.pl/',
    experimentalRunAllSpecs: false,
    bloclHosts: ['www.google-analytics.com', 'ssl.google-analytics.com'],
    includeShadowDom: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    // reporter: 'cypress-multi-reporters',
    // reporterOptions: {
    //   configFile: 'reporter-config.json',
    // },
    hideXHRInCommandLog: true,
    chromeWebSecurity: false,
    video: false,
    videoUploadOnPasses: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    // retries: {
    //   runMode: 4,
    //   openMode: 4,
    // },
  },
});
