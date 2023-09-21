// Config to bundle JS
const bundleJsConfig = {
  entry: {
    post: './assets/scripts/sources/posts.js',
    global: './assets/scripts/sources/global.js',
    "common-pages": './assets/scripts/sources/common-pages.js'
  },
  output: {
    filename: "../assets/scripts/[name].min.js"
  },
  mode: "production",
  watch: true,
  devtool: "cheap-module-source-map",
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        extractComments: false
      })
    ]
  }
}

module.exports = [bundleJsConfig];
