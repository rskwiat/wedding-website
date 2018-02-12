const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  'classnames',
  'prop-types',
  'react',
  'react-router-dom',
  'webfontloader',
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
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
		new ExtractTextPlugin('app.[chunkhash].css')
  ]
};

module.exports = config;