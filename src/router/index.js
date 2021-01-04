// @ts-nocheck
import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../views/Home"
import SearchList from "../views/Search/SearchList"

// 安装插件
Vue.use(VueRouter)

const router = new VueRouter({
  // 路由配置
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/searchList",
      component: SearchList,
    },
  ],
})

export default router
