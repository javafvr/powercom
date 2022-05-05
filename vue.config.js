const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/powercom/" : "/",
  transpileDependencies: true,
  // lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    allowedHosts: 'all',
    bonjour: {
      type: 'http',
      protocol: 'udp',
    },
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/index.scss";
          @import "@/assets/styles/utils.module.scss";
        `,
      },
    },
  }
});
