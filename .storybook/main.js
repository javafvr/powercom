const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "core": {
    builder: "webpack5",
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true, 
          localIdentName: '[name]_[local]_[hash:base64:5]'
        }
      }
    },
  ],
  "framework": "@storybook/vue3",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "../src/assets/styles/index.scss";
          @import "../src/assets/styles/utils.module.scss";
        `,
      },
    },
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // Make whatever fine-grained changes you need
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src"),
    };
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src'),
    });

    // Return the altered config
    return config;
  },
}