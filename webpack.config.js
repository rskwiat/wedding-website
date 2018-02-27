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
];

const ENTRY = {
  app: path.resolve('./src/index.js'),
};

const PATHS = {
  build: path.join(__dirname, './public'),
}

const config = {
	entry: {
    bundle: ENTRY.app,
    vendor: VENDOR_LIBS
  },
	output: {
		path: PATHS.build,
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
    new ExtractTextPlugin('style.[chunkhash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new ProgressBarPlugin({
      format: `build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 15
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ]
};

module.exports = config;