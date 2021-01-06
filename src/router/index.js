// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import ShopCar from "../views/ShopCar";
import ShopPay from "../views/ShopPay";

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
			name: "ShopCar",
			path: "/shopcar",
			component: ShopCar,
		},
		{
			name: "ShopPay",
			path: "/shopcar/shoppay",
			component: ShopPay,
		}
	],
});

export default router;
