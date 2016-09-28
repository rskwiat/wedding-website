var path = require("path");
var webpack = require('webpack');

var entry = './app/main.js';
var path =  __dirname;
var publicPath = '/';
var filename = './public/dist/bundle.js';


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
    contentBase: './'
  }
};
