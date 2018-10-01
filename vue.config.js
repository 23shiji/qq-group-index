module.exports = {
  configureWebpack: function(config){
    config.module.rules.push(
      {
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
        ]
      },
      {
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
        ]
      }
    )
  }
}