/* eslint-disable no-unused-vars */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /.(jsx?)$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 5000,
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    stats: 'minimal',
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './assets/Images/logo.png',
      inject: false,
      templateContent: () => `
        <html>
          <head>
            <title>Portafolio RJ</title>
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link rel="shortcut icon" type="image/png/ico" href="/logo.png" />
            <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700&display=swap" rel="stylesheet">
          </head>
          <body>
            <div id="root"></div>
            <script src="./bundle.js"></script>
          </body>
        </html>
      `,
    }),
    new FaviconsWebpackPlugin('./assets/Images/logo.png'),
    new MiniCssExtractPlugin({}),
  ],
}
