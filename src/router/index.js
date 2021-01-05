// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";

// 安装插件
Vue.use(VueRouter);

const router = new VueRouter({
  // 路由配置
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});

export default router;
