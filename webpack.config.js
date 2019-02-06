/* eslint-disable */

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');


const SRC = {
  bundle: path.resolve(__dirname, 'src/js/index.js'),
  js: path.resolve(__dirname, 'src/js'),
  scss: path.resolve(__dirname, 'src/scss'),
  images: path.resolve(__dirname, 'src/images'),
  public: path.resolve(__dirname, 'public'),
  html: path.resolve(__dirname, 'src/index.html')
};

const config = {
  mode: process.env.NODE_ENV,
	entry: {
    bundle: SRC.bundle,
  },
	output: {
		path: SRC.public,
		publicPath: '/',
    filename: '[name].[chunkhash].js' 
	},
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      '@src': SRC.js,
      '@scss': SRC.scss,
      '@images': SRC.images,
    }
  },
	module: {
		rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.scss$/,
        include: SRC.scss,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 }
          }
        ]
      }
		]
	},
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new ProgressBarPlugin({
      format: `build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`
    }),
    new HtmlWebpackPlugin({
      template: SRC.html
    }),
  ]
};

module.exports = config;
