const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/features/**/*.feature",
    screenshotOnRunFailure: true,
    video: false,
    reporter: 'json',
    reporterOptions: {
      reportDir: 'cypress/reports/json',
      reportFilename: 'cucumber_report',
      overwrite: true,
      html: true,
      embeddedScreenshots: true,
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      
      on('file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      
      return config;
    },
  },
});