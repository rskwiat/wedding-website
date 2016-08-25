var path = require("path");
var webpack = require('webpack');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();


if (process.env.NODE_ENV === 'production') {
  var entry = './app/main.js';
  var path =  __dirname;
  var publicPath = '/';
  var filename = './public/dist/bundle.js';
} else {
  var entry = './app/main.js';
  var path =  __dirname;
  var publicPath = '/';
  var filename = './dist/bundle.js';
}

module.exports = {
  entry: [
    entry
  ],
  output: {
    path: path,
    publicPath: publicPath,
    filename: filename
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins:[
    new DashboardPlugin(dashboard.setData),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    quiet: true
  }
};
