// @ts-nocheck
import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import(/* webpackChunkName: "Home"*/ "../views/Home")
const SearchList = () =>
  import(/* webpackChunkName: "Home"*/ "../views/Search/SearchList")

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
