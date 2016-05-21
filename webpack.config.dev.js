const webpack = require('webpack');
const path = require("path");

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.\css$/,
        loader: 'style!css'
      }
    ]
  },
  devServer: {
    contentBase: './build'
  }
}
