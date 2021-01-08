import { reqRegister, reqLogin, reqLogout } from "../../api/user";

export default {
  state: {
    name: localStorage.getItem("name") || "",
    token: localStorage.getItem("token") || "",
  },
  actions: {
    // 注册
    async register({ commit }, { phone, password, code }) {
      await reqRegister({ phone, password, code });
      console.log(commit);
    },
    // 登录
    async login({ commit }, { phone, password }) {
      //   console.log(111);
      const user = await reqLogin(phone, password);
      commit("LOGIN", user);
    },
    // 退出登录
    async logout({ commit }) {
      //   console.log(111);
      await reqLogout();
      console.log(commit);
    },
  },
  // 登录
  mutations: {
    LOGIN(state, user) {
      state.name = user.name;
      state.token = user.token;
    },
  },
  getters: {},
};
