const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'src', 'index.html')
      }
    ),
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'src', 'class-1', 'index.html'),
        filename: 'class-1'
      }
    ),
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'src', 'class-2', 'index.html'),
        filename: 'class-2'
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(ttf|woff|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ],
  }
};
