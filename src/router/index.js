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
//搜索页面

/**
 * 重写push和replace  解决第二次点击搜索按钮的报错问题
 *  */
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, a, b) {
  if (a && b) {
    return push.call(this, location, a, b);
  }
  return push.call(this, location, a, () => {});
};
VueRouter.prototype.replace = function(location, a, b) {
  if (a && b) {
    return replace.call(this, location, a, b);
  }
  return replace.call(this, location, a, () => {});
};

const Login = () => import(/* webpackChunkName: "Login"*/ "../views/Login");
const NvaLogin = () =>
  import(
    /* webpackChunkName: "NvaLogin"*/ "../components/NavLogin/NavLogin.vue"
  );
const Register = () =>
  import(/* webpackChunkName: "Register"*/ "../views/Register");
const Home = () => import(/* webpackChunkName: "Home"*/ "../views/Home");
//搜索页面
const SearchList = () =>
  import(/* webpackChunkName: "Home"*/ "../views/Search/SearchList");

// 安装插件
Vue.use(VueRouter);

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
// 路由守卫
const controlPermission = ["/searchList"];
//判断如果没有登录不能访问页面
router.beforeEach((to, from, next) => {
  if (controlPermission.indexOf(to.path) > -1 && !store.state.user.token) {
    next("/login");
    return;
  }
  next();
  //如果登录了就不能再 登录页面
  if (to.path === "/login") {
    if (store.state.user.token) {
      next("/");
    } else {
      next();
    }
  }
});
Vue.use(require("vue-wechat-title"));
export default router;
