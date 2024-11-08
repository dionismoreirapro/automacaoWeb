const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default
const merge = require('mochawesome-merge');
const marge = require('mochawesome-report-generator');
const fs = require('fs');

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "http://www.automationpractice.pl/index.php",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
       on("file:preprocessor", cucumber());
    },
  },
});
