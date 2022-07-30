const path = require('path');
const webpack = require("webpack");

let config = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'logic', 'index.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'node_modules': path.join(__dirname, 'node_modules'),
      'logic': path.join(__dirname, 'src', 'logic'),
    }
  },
};

module.exports = (env, argv) => {
  config.mode = argv.mode? argv.mode: 'production';
  return config;
};