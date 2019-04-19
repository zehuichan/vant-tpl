const port = 9527 // dev port

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
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
  //   '/': {
  //     target: process.env.VUE_APP_BASE_API,
  //     secure: false,
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '/': '/'
  //     }
  //   }
  // },
  css: {
    loaderOptions: {}
  },
}
