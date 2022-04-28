// const path = require("path");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "core": {
//     builder: "webpack5",
//   },
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     {
//       name: "@storybook/preset-scss",
//       options: {
//         cssLoaderOptions: {
//           modules: true, 
//           localIdentName: '[name]_[local]_[hash:base64:5]'
//         }
//       }
//     },
//   ],
//   "framework": "@storybook/vue3",
//   css: {
//     loaderOptions: {
//       css: {
//         modules: {
//           auto: () => true
//         }
//       }
//     }
//   },
//   webpackFinal: async (config, { configType }) => {
//       config.module.rules.push(
//       // {
//       //   test: /\.scss$/,
//       //   use: ['style-loader', 'css-loader', 'sass-loader'],
//       //   include: path.resolve(__dirname, '../src'),
//       // },
//       // {
//       //   test: /\.scss$/,
//       //   oneOf: [
//       //     // this matches `<style module>`
//       //     {
//       //       resourceQuery: /module/,
//       //       use: [
//       //         'vue-style-loader',
//       //         {
//       //           loader: 'css-loader',
//       //           options: {
//       //             modules: true,
//       //             localIdentName: '[local]_[hash:base64:5]'
//       //           }
//       //         }
//       //       ],
//       //       include: path.resolve(__dirname, '../src'),
//       //     },
//       //     // this matches plain `<style>` or `<style scoped>`
//       //     {
//       //       use: [
//       //         'vue-style-loader',
//       //         'css-loader'
//       //       ]
//       //     }
//       //   ]
//       // },
//       // webpack.config.js -> module.rules
//       // {
//       //   test: /\.scss$/,
//       //   use: [
//       //     'vue-style-loader',
//       //     {
//       //       loader: 'css-loader',
//       //       options: { modules: true }
//       //     },
//       //     'sass-loader'
//       //   ]
//       // },
//       //       // ...
//       // // --------
//       // // SCSS ALL EXCEPT MODULES
//       // {
//       //   test: /\.scss$/i,
//       //   exclude: /\.module\.scss$/i,
//       //   use: [
//       //     {
//       //       loader: "style-loader",
//       //     },
//       //     {
//       //       loader: "css-loader",
//       //       options: {
//       //         importLoaders: 1,
//       //         modules: {
//       //           mode: "icss",
//       //         },
//       //       },
//       //     },
//       //     {
//       //       loader: "sass-loader",
//       //     },
//       //   ],
//       // },
//       // // --------
//       // // SCSS MODULES
//       // {
//       //   test: /\.module\.scss$/i,
//       //   use: [
//       //     {
//       //       loader: "style-loader",
//       //     },
//       //     {
//       //       loader: "css-loader",
//       //       options: {
//       //         importLoaders: 1,
//       //         modules: {
//       //           mode: "local",
//       //         },
//       //       },
//       //     },
//       //     {
//       //       loader: "sass-loader",
//       //     },
//       //   ],
//       // },
//       // {
//       //   test: /\.s[ac]ss$/i,
//       //   use: [
//       //     // Creates `style` nodes from JS strings
//       //     "style-loader",
//       //     // Translates CSS into CommonJS
//       //     "css-loader",
//       //     // Compiles Sass to CSS
//       //     "sass-loader",
//       //   ],
//       // },
//     );
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': path.resolve(__dirname, '../src'),
//     };
//     return config;
//   },
// }