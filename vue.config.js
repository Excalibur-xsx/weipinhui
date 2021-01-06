module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
        changeOrigin: true,
      },
      //获取唯品会数据的跨域
      "/huan": {
        target: "https://myi.vip.com",
        changeOrigin: true,
        pathRewrite: { "^/huan": "" }
      },
    },
  },
};
