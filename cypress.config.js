const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");
const cucumber = require('cypress-cucumber-preprocessor').default

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    "..",
    "cypress\\config",
    `${file}.json`
  );

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("File Path doesn't exist....");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: "zspwax",
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
      // console.log(config) // see everything in here!
      // config.defaultCommandTimeout = 10000
      // config.baseUrl = 'https://automationteststore.com'

      // // modify env var value
      // config.env.ENVIRONMENT = 'dev'

      // // IMPORTANT return the updated config object
      // return config
      console.log("CONFIG .....", config);
      const file = config.env.configFile || "development";

      console.log("What is file name "+ file);

      return getConfigurationByFile(file);
    },
    specPattern: "cypress/e2e/**/**/*.{js,jsx,ts,mjs,tsx,feature}",
    env: {
      first_name: "Daniesha",
      webdriveruni_homepage: "https://webdriveruniversity.com",
      automation_test_store_homepage: "https://automationteststore.com",
    },
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    chromeWebSecurity: false,
    experimentalOriginDependencies: true,

    video: true,
    retries: {
      runMode: 0,
      openMode: 1
    }

  },
  // specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
});
