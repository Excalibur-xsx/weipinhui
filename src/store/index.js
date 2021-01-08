import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// 实例引入
// import app from './modules/app'

/* 
动态加载vuex中所有的modules模块
不再需要通过import手动一个一个引入
*/
const context = require.context("./modules", false, /\.js$/);
const modules = context.keys().reduce((modules, modulePath) => {
  // './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  modules[moduleName] = context(modulePath).default;
  return modules;
}, {});


const store = new Vuex.Store({
  /*  modules暴露内容
  modules: {
    app,
    permission,
    settings,
    user
  }, */
  modules,
});

export default store;
