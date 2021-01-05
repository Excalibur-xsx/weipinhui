import { reqRegister, reqLogin } from "../../api/user";

export default {
  state: {
    name: localStorage.getItem("name") || "",
    token: localStorage.getItem("token") || "",
  },
  actions: {
    async register({ commit }, { phone, password, code }) {
      await reqRegister({ phone, password, code });
      console.log(commit);
    },
    async login({ commit }, { phone, password }) {
      //   console.log(111);
      const user = await reqLogin(phone, password);
      commit("LOGIN", user);
    },
  },
  mutations: {
    LOGIN(state, user) {
      state.name = user.name;
      state.token = user.token;
    },
  },
  getters: {},
};
