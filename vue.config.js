module.exports = {
  devServer: {
    //代理服务器配置
    proxy: {
      //以/api开头的请求，都转到http://182.92.128.115服务器上
      "/api": {
        target: "http://182.92.128.115",
        changeOrigin: true, // 允许跨域
        // pathRewrite: { // 重写路径
        //   "^/api": "",
        // },
      },
    },
  },
}
