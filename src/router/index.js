// @ts-nocheck
import Vue from "vue"
import VueRouter from "vue-router"
import store from '../store';

import Register from "../views/Register"
import Login from "../views/Login"
import NvaLogin from "../components/NavLogin/NavLogin.vue"

import ShopCart from "../views/ShopCart";
import Trade from "../views/Trade";
import Pay from "../views/Pay";
import PaySuccess from "../views/PaySuccess";

const Home = () => import(/* webpackChunkName: "Home"*/ "../views/Home")
//搜索页面
<<<<<<< HEAD
const SearchList = () => import(/* webpackChunkName: "Home"*/ "../views/Search/SearchList")
=======
const SearchList = () =>
  import(/* webpackChunkName: "Home"*/ "../views/Search/SearchList")
//唯品快抢
const ForestallBuy = () =>
  import(/* webpackChunkName: "ForestallBuy"*/ "../views/ForestallBuy")
>>>>>>> xionglin

// 安装插件
Vue.use(VueRouter)

// 重写push
const push = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, onComplete, onAbort = () => { }) {
	return push.call(this, location, onComplete, onAbort);
};
// 重写replace
const replace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location, onComplete, onAbort = () => { }) {
	return replace.call(this, location, onComplete, onAbort);
};

const router = new VueRouter({
<<<<<<< HEAD
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
			path: "/register",
			component: Register,
		},
		{
			path: "/login",
			component: Login,
		},
		{
			path: "/navlogin",
			component: NvaLogin,
		},
		{
			name: "search",
			path: "/searchList",
			component: SearchList,
			meta: {
				title: "搜索",
			},
		},
		// 购物车列表
		{
			name: 'shopCart',
			path: '/shopCart',
			component: ShopCart,
		},
		// 提交订单页
		{
			name: 'trade',
			path: '/trade',
			component: Trade,
		},
		// 支付页
		{
			name: 'pay',
			path: '/pay',
			component: Pay,
		},
		// 支付成功页
		{
			name: 'paysuccess',
			path: '/paysuccess',
			component: PaySuccess,
		},
	],
	scrollBehavior() {
		return { x: 0, y: 0 };
	}
=======
  mode: "history",
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
      path: "/register",
      component: Register,
      meta: {
        title: "注册",
      },
    },
    {
      path: "/login",
      component: Login,
      meta: {
        title: "登录",
      },
    },
    {
      path: "/navlogin",
      component: NvaLogin,
    },
    {
      name: "search",
      path: "/searchList",
      component: SearchList,
      meta: {
        title: "搜索商品",
      },
    },
    {
      name: "forestallBuy",
      path: "/forestallBuy",
      component: ForestallBuy,
      meta: {
        title: "唯品快抢",
      },
    },
  ],
>>>>>>> xionglin
})

// 全局路由前置守卫
/**
 * @to 要去的路由
 * @from 当前的路由
 * @next 一个路由跳转的函数，来决定跳转到哪个路由。直接next()调用是跳转到to的路由
 */
// 需要验证是否登录的名单
const isLoginList = ['/trade', '/center', '/pay', '/paysuccess'];
// const isLoginList = [];
router.beforeEach((to, from, next) => {
	if (isLoginList.indexOf(to.path) > -1 && !store.state.user.user.token) {
		next('/login');
	} else {
		next();
	}
});

Vue.use(require("vue-wechat-title"))
export default router
