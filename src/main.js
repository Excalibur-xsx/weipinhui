// @ts-nocheck
import Vue from "vue"
import App from "./App"

import router from "./router"
import store from "./store"

import "./plugins/element.js"

//引入默认样式
import "./style/reset.css"

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    // 初始化全局事件总线对象
    Vue.prototype.$bus = this
  },
  render: (h) => h(App),
  // 应用router
  router,
  store,
}).$mount("#app")
