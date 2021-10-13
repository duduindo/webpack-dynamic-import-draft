const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.js',

  devServer: {
    static: './dist',
    compress: !true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', 
                {
                  targets: {
                    edge: 15
                  }
                }
              ]
            ],
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './index.html'
    }),
  ],

  output: {
    filename: 'bundle.[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:9000/',
    clean: true,
  },
};