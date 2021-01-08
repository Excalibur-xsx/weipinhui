// @ts-nocheck
import Vue from "vue";
import App from "./App";

import VueLazyload from "vue-lazyload";
// import VueWechatTitle from "vue-wechat-title";

import router from "./router";
import store from "./store";

import "./style/reset.css";

Vue.config.productionTip = false;
import "./plugins/element.js";

//引入默认样式
import "./style/reset.css";
//引入懒加载的默认图片
import loading from "./assets/images/loading.gif";

Vue.config.productionTip = false;

// Vue.use(VueWechatTitle);

Vue.use(VueLazyload, {
  loading,
});

new Vue({
  beforeCreate() {
    // 初始化全局事件总线对象
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  // 应用router
  router,
  store,
}).$mount("#app");
