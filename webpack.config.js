/* eslint-disable */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

const VENDOR_LIBS = [
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'redux-form',
  'redux-thunk',
  'redux-form',
  'webfontloader',
];

const config = {
	entry: {
    bundle: path.resolve('./src/index.js'),
  },
	output: {
		path: path.join(__dirname, './public'),
		publicPath: '/',
    filename: '[name].[chunkhash].js' 
	},
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
	module: {
		rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|images|css)/
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ExtractTextPlugin.extract([
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ])
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
		]
	},
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
    new ExtractTextPlugin({
      filename: 'styles.[name].[chunkhash].css',
      allChunks: true,
    }),
    new ProgressBarPlugin({
      format: `build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ]
};

module.exports = config;