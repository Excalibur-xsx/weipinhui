import {
  cartListRequest,
  addToCartRequest,
  checkCartRequest,
  deleteCartRequest
} from '@api/shopcart';


export default {
  state: {
    cartList: [],
    addToCartMessage: {
      skuName: '',
      skuNum: 1,
      skuDefaultImg: ''
    }
  },
  getters: {},
  actions: {
    // 获取购物车列表
    async getCartList({ commit }) {
      const cartList = await cartListRequest();
      commit('GET_CART_LIST', cartList);
    },
    // 修改购物车商品数量
    async addToCart({ commit }, { skuId, skuNum }) {
      await addToCartRequest(skuId, skuNum);
      // 在购物车页面添加后需要更新页面
      commit('ADD_TO_CART', { skuId, skuNum });
    },
    // 修改商品的选中状态
    async checkCart({ commit }, { skuId, isChecked }) {
      await checkCartRequest(skuId, isChecked);
      // 在购物车页面更新选中状态后需要更新页面
      commit('CHECK_CART', { skuId, isChecked });
    },
    // 删除购物车中的商品
    async deleteCart({ commit }, skuId) {
      await deleteCartRequest(skuId);
      // 在购物车页面删除商品后需要更新页面
      commit('DELETE_CART', skuId);
    }

  },
  mutations: {
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
    ADD_TO_CART(state, { skuId, skuNum }) {
      state.cartList = state.cartList.map((sku) => {
        if (sku.skuId === skuId) {
          sku.skuNum += skuNum;
        }
        return sku;
      });
    },
    CHECK_CART(state, { skuId, isChecked }) {
      state.cartList = state.cartList.map((sku) => {
        if (sku.skuId === skuId) {
          sku.isChecked = isChecked;
        }
        return sku;
      });
    },
    DELETE_CART(state, skuId) {
      state.cartList = state.cartList.filter((sku) => sku.skuId !== skuId);
    },
    ADD_TO_CART_MESSAGE(state, { skuName, skuNum, skuDefaultImg }) {
      state.addToCartMessage.skuName = skuName;
      state.addToCartMessage.skuNum = skuNum;
      state.addToCartMessage.skuDefaultImg = skuDefaultImg;
    }

  },
};
