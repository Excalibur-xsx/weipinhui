import { reqGetSearchList } from "../../api/search"
const state = {
  productList: {
    trademarkList: [],
    attrsList: [],
    goodsList: [],
  },
}

const getters = {
  trademarkList(state) {
    return state.productList.trademarkList
  },
  attrsList(state) {
    return state.productList.attrsList
  },
  goodsList(state) {
    return state.productList.goodsList
  },
}

const actions = {
  async getSearchList({ commit }, data) {
    const result = await reqGetSearchList(data)
    commit("GET_SEARCH_LIST", result)
  },
}

const mutations = {
  GET_SEARCH_LIST(state, data) {
    state.productList = data
    data.trademarkList.splice(0, 1)
    state.productList.trademarkList = data.trademarkList
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
