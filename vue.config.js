module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
        changeOrigin: true,
      },
      "/huan": {
        target: "https://myi.vip.com",
        changeOrigin: true,
        pathRewrite: { "^/huan": "" }
      },
      /* "/huan": {
        target: "http://localhost:3001",
        changeOrigin: true,
      }, */
    },
  },
};
