const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  'react',
  'react-dom',
  'react-router'
];

const config = {
	entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
	output: {
		path: path.join(__dirname, './build'),
		publicPath: '/',
    filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
		  {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /\node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ])
      },
		]
	},
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ProgressBarPlugin({
    	format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false,
    }),
		new ExtractTextPlugin('app.[chunkhash].css')
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3000
  }
};

module.exports = config;