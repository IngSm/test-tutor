const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true
  },
  devServer: {
    static: './bundle',
    hot: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      { test: /\.css$/, use: ['css-loader', 'style-loader'] },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader'
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
  resolve: { extensions: ['.ts'] },
};