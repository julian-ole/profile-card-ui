const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({});
  },

  pluginOptions: {
    "i18n-transform": {
      i18nPath: "src/i18n/index.js",
    },
  },
});
