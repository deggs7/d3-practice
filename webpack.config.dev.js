const webpack = require('webpack');
const path = require("path");

module.exports = {
  entry: {
    app: ['./src/entry.js']
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  devServer: {
    // contentBase: './build'
  }
}
