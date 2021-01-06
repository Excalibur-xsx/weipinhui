// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName: "Home" */ "../views/Home");
const Detail = () => import(/* webpackChunkName: "Detail" */ "../views/Detail");
// import Detail from "../views/Detail";

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
      path: "/home",
      component: Home,
    },
    {
      path: "/detail:id?",
      component: Detail,
    },
  ],
});

export default router;
