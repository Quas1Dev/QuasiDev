function createConfig(customObj){
  const common = {
    mode: production,
    devtool: "cheap-module-eval-source-map"
  }

  return {
    ...common,
    ...customObj
  }
}

let firstConfig = createConfig({
  entry: './assets/scripts/sources/posts.js',
  output: {
    filename: "../assets/scripts/posts.min.js"
  }
})

let secondConfig = createConfig({
  entry: './assets/scripts/sources/general-script.js',
  output: {
    filename: "../assets/scripts/general-script.min.js"
  }
})

module.exports = [firstConfig, secondConfig]
