const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootFolder = (...paths) => path.join(__dirname, '../', ...paths);
const srcFolder = (...paths) => rootFolder('./src', ...paths);
const publicFolder = (...paths) => rootFolder('./public', ...paths);

const config = {
  entry: srcFolder('index.tsx'),
  output: {
    path: rootFolder('build'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: publicFolder('index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  }
};

module.exports = config;
