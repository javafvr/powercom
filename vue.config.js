const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/powercom/" : "/",
  transpileDependencies: true,
  lintOnSave: process.env.NODE_ENV !== "production",
  css: {
    loaderOptions: {
      // css: {
      //   modules: {
      //     localIdentName: '[name]-[hash]',
      //     exportLocalsConvention: 'camelCaseOnly'
      //   },
      // },
      scss: {
        additionalData: `
          @import "@/assets/styles/index.scss";
          @import "@/assets/styles/utils.module.scss";
        `,
      },
    },
  }
});
