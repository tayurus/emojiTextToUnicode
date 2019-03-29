const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: '/.js/i'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, `dist`),
    publicPath: `http://localhost:8080/`,
    hot: true,
    compress: true
  }
}
