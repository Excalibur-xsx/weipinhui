// @ts-nocheck
import Vue from "vue"
import App from "./App"

import VueLazyload from "vue-lazyload"

import "./plugins/element.js";
import "./plugins/lazyload.js";
// 引入公共资源
import "./styles/iconfont.css";
import "./styles/reset.css";
// 引入mockServer，为了加载里面代码
// 里面代码一旦加载，就去启动mock服务器，从而拦截相应的请求
import "./mock/mockServe";
Vue.config.productionTip = false;
import "./plugins/element.js"
import router from "./router"
import store from "./store"
//引入mockServer
import mockServer from "./mocks/mockServer"
//引入默认样式
import "./style/reset.css"
//引入懒加载的默认图片
import loading from "./assets/images/loading.gif"

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading,
})

new Vue({
  beforeCreate() {
    // 初始化全局事件总线对象
    Vue.prototype.$bus = this
  },
  render: (h) => h(App),
  // 应用router
  router,
  store,
}).$mount("#app");
