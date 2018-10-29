var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  devtool: "#cheap-module-eval-source-map",
  debug: true,
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('css!sass')
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg|jpg|ttf\?xmfroe|eot\?xmfroe|woff\?xmfroe|svg\?xmfroe)$/,
        loader: 'file-loader?&name=[path][hash].[ext]'
      },
      { test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: 'url-loader?limit=100000'
      },
	  { test: /\.json$/, loader: 'json' },
    ]
  },

  plugins: [
      new ExtractTextPlugin('style.css', {
          allChunks: true
      }),
      new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          jquery: 'jquery'
      })
  ],

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = config.plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ]);
};

module.exports = config;
