let path = require('path');
let webpack = require('webpack');

let srcPath = './src';
let libName = 'moviesearch';

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, srcPath, 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    library: libName,
    libraryTarget: 'this',
    filename: libName + '.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.less$/,
        loader: "style!css!less"
      }, {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.json$/,
        loader: "json"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.less', '.json'],
  },

  externals: {
    'react': 'React',
    'react-dom' : 'ReactDOM'
  }
};
