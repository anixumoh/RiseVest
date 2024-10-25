
      const { defineConfig } = require('cypress');
      const { allureCypress } = require("allure-cypress/reporter");
      module.exports = defineConfig({
          experimentalWebKitSupport: true,
          watchForFileChanges: true,
          e2e: {
              baseUrl: "https://app.risevest.com/login",
              setupNodeEvents(on, config) {
                  allureCypress(on);
              }
          }
      });
    