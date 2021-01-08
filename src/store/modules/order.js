import { gettradeRequest } from '@api/order';

export default {
  state: {
    tradeMessage: {}
  },
  getters: {
    // 商品清单
    detailArrayList: (state) => state.tradeMessage.detailArrayList,
    // 商品总数
    totalNum: (state) => state.tradeMessage.totalNum,
    // 商品总价
    totalAmount: (state) => state.tradeMessage.totalAmount,
  },
  actions: {
    async gettrade({ commit }) {
      const tradeMessage = await gettradeRequest();
      commit('GET_TRADE', tradeMessage);
    }
  },
  mutations: {
    GET_TRADE(state, tradeMessage) {
      state.tradeMessage = tradeMessage;
    }
  }
};