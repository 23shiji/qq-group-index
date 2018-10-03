module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '' //'/qq-group-index/'
    : '/',
  css: {
    extract: true,
    // extract: {
    //   filename: 'app.css'
    // },
    modules: false,
    sourceMap: false
  },
  configureWebpack: function(config){
    config.module.rules.push({
      test: /\.g\.md$/,
      use:[
        {
          loader: 'file-loader',
          options: {
            name: 'data/[hash].json'
          }
        },
        // {loader: 'json-loader'},
        // {loader: 'yaml-loader'},
        {loader: './loaders/group.js'},
      ]}, {
      test: /\.c\.yml$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'index/[hash].json'
          }
        },
        {loader: './loaders/category.js'},
        {loader: 'yaml-loader'},
      ]}, {
      test: /\.(eot)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 4096,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[hash:8].[ext]'
              }
            }
          }
        }
      ]})
  }
}