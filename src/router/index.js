// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import ShopCart from "../views/ShopCart";
import Trade from "../views/Trade";
import Pay from "../views/Pay";

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
			name: "shopcart",
			path: "/shopcart",
			component: ShopCart,
		},
		{
			name: "trade",
			path: "/trade",
			component: Trade,
		},
		{
			name: "pay",
			path: "/pay",
			component: Pay,
		},
	],
});

export default router;
