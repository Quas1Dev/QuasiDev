// Used to extract the imported CSS to its own file
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Will minimize our file - Used in place of optimize-css-assets-webpack-plugin
// for webpack v5 or above
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

// Minifies JS - It is used automatically by webpack, unless
// optimizatio.minimizer is explicitly set, which is the case.
const TerserJSPlugin = require('terser-webpack-plugin');

// This Webpack plugin allows you to copy, archive (.zip/.tar/.tar.gz),
// move, delete files and directories before and after builds
const FileManagerPlugin = require('filemanager-webpack-plugin');

const bundleJsConfig = {
  entry: {
    post: './assets/scripts/sources/posts.js',
    global: './assets/scripts/sources/global.js'
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
  }
}

function createConfigCss(customObj) {
  const common = {
    watch: true,
    mode: "production",
    optimization: {
      minimizer: [
        new TerserJSPlugin(),
        new CssMinimizerWebpackPlugin()
      ]
    },
    module: {
      rules: [{
        test: /\.css$/i,
        exclude: /(node_modules|bower_components)/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }]
    }
  }
  return {
    ...common,
    ...customObj
  }
}

let postsCss = createConfigCss({
  entry: {
    home: "./assets/css/original/home-css.js",
    posts: "./assets/css/original/posts-css.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../assets/css/[name].min.css'
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          delete: ['./dist']
        }
      }
    })
  ]
})

module.exports = [bundleJsConfig, postsCss]
