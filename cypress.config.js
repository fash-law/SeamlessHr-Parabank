const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
 
  e2e: {
    baseUrl: "https://parabank.parasoft.com",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
  screenshotOnRunFailure: true
});
