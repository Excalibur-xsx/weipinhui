// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

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
      meta: {
        title: "唯品会注册",
      },
    },
    {
      path: "/login",
      component: Login,
      meta: {
        title: "唯品会登录",
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
        title: "搜索",
      },
    },
  ],
});
// 路由守卫
const controlPermission = ["/searchList"];
//判断如果没有登录不能访问页面
router.beforeEach((to, from, next) => {
  if (controlPermission.indexOf(to.path) > -1 && !store.state.user.token) {
    next("/login");
    return;
  }
  next();
  //如果登录了就不能再登录页面
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
