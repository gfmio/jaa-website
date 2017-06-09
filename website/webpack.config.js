const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const jsxtransform = require('jsx-transform');

module.exports = {
  context: __dirname + '/src',
  entry: "./client.js",
  output: {
    path: __dirname,
    filename: "./dist/public/js/app.js",
    publicPath: "./dist/public/"
  },
  devServer: {
      // This is required for older versions of webpack-dev-server
      // if you use absolute 'to' paths. The path should be an
      // absolute path to your build destination.
      outputPath: __dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|public)/,
        options: {
          factory: 'c'
        },
        loader: 'jsx-transform-2-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './**/*',
      to: './dist',
      transform: function(content, path) {
        return jsxtransform.fromString(String(content), {
          factory: 'c'
        });
      }
    }, {
      from: '../public/css/style.css',
      to: './dist/public/css/style.css'
    }, {
      from: '../public/media/**/*',
      to: './dist/media'
    }, {
      from: '../public/scss/uikit/dist/js/uikit.min.js',
      to: './dist/public/js/uikit.min.js'
    }, {
      from: '../public/scss/uikit/dist/js/uikit-icons.min.js',
      to: './dist/public/js/uikit-icons.min.js'
    }, {
      from: '../public/js/ga.js',
      to: './dist/public/js/ga.js'
    }]),
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      compress: { warnings: false }
    })
  ]
};
