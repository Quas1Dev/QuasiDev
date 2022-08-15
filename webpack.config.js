function createConfig(customObj) {
  const common = {
    mode: "production",
    devtool: "cheap-module-source-map"
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
    }
  }

  return {
    ...common,
    ...customObj
  }
}

let postsScript = createConfig({
  entry: './assets/scripts/sources/posts.js',
  output: {
    filename: "../assets/scripts/posts.min.js"
  }
})

let generalScript = createConfig({
  entry: './assets/scripts/sources/general-script.js',
  output: {
    filename: "../assets/scripts/general-script.min.js"
  }
})

module.exports = [postsScript, generalScript]
