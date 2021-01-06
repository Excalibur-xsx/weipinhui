// @ts-nocheck
import Vue from "vue"
import VueRouter from "vue-router"

/**
 * 重写push和replace  解决第二次点击搜索按钮的报错问题
 *  */
const push = VueRouter.prototype.push
const replace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location, a, b) {
  if (a && b) {
    return push.call(this, location, a, b)
  }
  return push.call(this, location, a, () => {})
}
VueRouter.prototype.replace = function(location, a, b) {
  if (a && b) {
    return replace.call(this, location, a, b)
  }
  return replace.call(this, location, a, () => {})
}

const Home = () => import(/* webpackChunkName: "Home"*/ "../views/Home")
//搜索页面
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
      meta: {
        title: "唯品会首页",
      },
    },
    {
      name: "search",
      path: "/searchList",
      component: SearchList,
      meta: {
        title: "搜索",
      },
    },
  ],
})
Vue.use(require("vue-wechat-title"))
export default router
