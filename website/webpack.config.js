const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const jsxtransform = require('jsx-transform');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


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
      publicPath: "./dist/public/"
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
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
                use: [{
                        loader: "css-loader"
                      }, {
                        loader: "sass-loader"
                      }]
              })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./dist/public/css/styles.min.css'),
    new CopyWebpackPlugin([{
      from: './**/*',
      to: './dist',
      transform: function(content, path) {
        return jsxtransform.fromString(String(content), {
          factory: 'c'
        });
      }
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
      from: '../public/js/**/*',
      to: './dist/public/js/..'
    }]),
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      compress: { warnings: false }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
      cssProcessorOptions: { discardComments: { removeAll: true } }
    })
  ]
};
