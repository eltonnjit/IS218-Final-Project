// playwright.config.js
module.exports = {
  use: {
    baseURL: "http://localhost:3000",

    browserName: "chromium",
    headless: false,
  },
  timeout: 30000,
};
