const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/powercom/" : "/",
  transpileDependencies: true,
  lintOnSave: process.env.NODE_ENV !== 'production'
})
