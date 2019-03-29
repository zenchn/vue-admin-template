module.exports = {
  devServer: {
    proxy: {
      // 真实数据接口代理
      // '/rest': {
      //   target: 'http://192.168.1.106:8083/estimate-rest/rest/',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/rest': ''
      //   }
      // }
      
      // Mock数据接口代理：Easy Mock
      '/rest': {
        target: ' https://easy-mock.com/mock/5aa9ec27e147c02c565f329a/api/rest/',
        changeOrigin: true,
        pathRewrite: {
          '^/rest': ''
        }
      }
    }
  },
  lintOnSave: false
}