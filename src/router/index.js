// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";

// 安装插件
Vue.use(VueRouter);

const router = new VueRouter({
	// 路由配置
	routes: [
		{
			path: "/",
			component: Home,
		},
	],
});

export default router;
