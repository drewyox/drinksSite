
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [

        {
          test: /\.(gif|png|jpe?g)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/'
              }
            }
          ]
        },

        {
          test:/\.html$/,
          use: [
            'html-loader'
          ]
        },

        {
          test: /\.scss$/,
          use: [
              "style-loader",
              "css-loader",
              "sass-loader"
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
              }
            }]
          }
        ]
      },
  plugins: [

    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html',
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true
      // }
    }),

    new HtmlWebpackPlugin({
      template: './src/whiskey.html',
      filename: 'whiskey.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/vodka.html',
      filename: 'vodka.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tequila.html',
      filename: 'tequila.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gin.html',
      filename: 'gin.html'
    }),

  ]

};
