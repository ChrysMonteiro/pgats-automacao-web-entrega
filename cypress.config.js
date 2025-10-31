const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'reports/jsons',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    // 🔧 Aumenta o tempo limite de carregamento da página
    pageLoadTimeout: 120000, // 2 minutos

    // ⏱️ Aumenta o tempo padrão de comandos (clicar, digitar, etc.)
    defaultCommandTimeout: 10000, // 10 segundos

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
