const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    }
  
})

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://wme-qaapps.wavemakeronline.com/wm-baas/BrightBank',
  }
})
