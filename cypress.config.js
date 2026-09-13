const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/features/**/*.feature',
    screenshotOnRunFailure: true,
    video: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    reporter: 'spec',
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
