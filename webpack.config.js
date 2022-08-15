let firstConfig = {
  mode: 'production',
  entry: './assets/scripts/sources/posts.js',
  output: {
    filename: "../assets/scripts/posts.min.js"
  }

}

let secondConfig = {
  mode: 'production',
  entry: './assets/scripts/sources/general-script.js',
  output: {
    filename: "../assets/scripts/general-script.min.js"
  }

}

module.exports = [firstConfig, secondConfig]
