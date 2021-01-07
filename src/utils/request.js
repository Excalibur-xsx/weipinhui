import axios from "axios";
// 引入进度条插件
import NProgress from "nprogress";
// 进度条样式
import "nprogress/nprogress.css";
//引入vuex中的数据
// import store from "../store/index";

import getUserTempId from "./getUserTempId";
//获取未登录的userTempId
const userTempId = getUserTempId();

//process.env_NODE_ENV 会获取到当前的运行的环境，根据运行环境可以设置对应的请求服务器地址
const prefix_url =
  process.env.NODE_ENV === "development" ? "/" : "http://182.92.128.115/";

const instance = axios.create({
  baseURL: `${prefix_url}api`,
  headers: {},
});

//请求拦截器
instance.interceptors.request.use(
  //请求成功的时候会触发
  (config) => {
    //一定要返回config，因为config是配置对象，其中包含请求的信息的，请求头等信息
    //如果要添加默认的请求信息，则可以在这里添加
    //开始进度条
    NProgress.start();

    //添加未登录的默认请求参数userTempId
    config.headers.userTempId = userTempId;
    //登录后添加token
    // config.headers.token = store.state.user.token;

    return config;
  }
  // 初始化Promise.resolve()返回默认成功的Promise，只会触发成功的回调
  // () => {}
);

//响应拦截器
instance.interceptors.response.use(
  //响应成功触发
  (response) => {
    //结束进度条
    NProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    }
    //如果响应结果的值是失败的则要返回失败的promise对象
    return Promise.reject(response.data.message);
  },
  //响应失败触发
  (err) => {
    //结束进度条
    NProgress.done();
    //判断是否是网络错误
    if (err.message === "Network Error") {
      NProgress.done();
      return Promise.reject("网络错误~");
    }
    return Promise.reject(err.message);
  }
);

export default instance;
