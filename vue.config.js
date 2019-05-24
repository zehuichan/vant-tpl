const port = 9527 // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development' ? 'error' : false,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
  },

  // proxy: process.env.VUE_APP_BASE_API,

  // proxy: {
  //   // change xxx-api/login => mock/login
  //   // detail: https://cli.vuejs.org/config/#devserver-proxy
  //   '/api': {
  //     target: 'http://www.baidu.com',
  //     secure: false,
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': '/api'
  //     }
  //   }
  // },
  css: {
    loaderOptions: {}
  },
}
