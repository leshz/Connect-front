const HtmlWebpackPlugin = require('html-webpack-plugin');
// const dotenv = require('dotenv');
// const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    // new webpack.DefinePlugin(envKeys),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    mainFields: ['browser', 'main', 'module'],
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
    ],
  },
};
