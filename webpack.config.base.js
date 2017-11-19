const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const resolve = name => path.join(__dirname, name);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      actions: resolve('./src/actions/'),
      components: resolve('./src/components/'),
      constants: resolve('./src/constants/'),
      mocks: resolve('./src/mocks/'),
      utils: resolve('./src/utils/')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: true // fail the module build on eslint errors
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true'
        }
      }
    ]
  }
};
