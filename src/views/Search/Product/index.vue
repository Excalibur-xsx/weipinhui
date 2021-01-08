<template>
  <div>
    <div class="product" @click="toDetail(goods.id)">
      <img v-lazy="goods.defaultImg" />
      <div class="priceContainer">
        <div class="special">
          <span>特卖价</span>
        </div>
        <div class="price">
          <span>￥{{ goods.price }}</span>
        </div>
        <div class="discount">
          <span>￥{{ goods.price - 100 }}</span>
          <span>1.5折</span>
        </div>
      </div>
      <h3 class="ProductTitle">
        {{ goods.title }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    goods: Object,
    source: {
      // here is: {id: '1', name: 'abc'}
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    //跳转商品详情
    toDetail(id) {
      // this.$router.push(`/detile/${id}`);
      // 打开新窗口跳转页面
      const { href } = this.$router.resolve({
        path: `/detile/${id}`,
      });
      window.open(href, "_blank");
    },
  },
};
</script>

<style lang="less" scoped>
.product {
  width: 218px;
  height: 340px;
  border: 1px solid #ccc;
  padding: 2px;
  margin: 5px;
  img {
    width: 216px;
    height: 218px;
  }
  .priceContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    .special {
      background-color: #ff31a3;
      color: #fff;
      padding: 2px;
      border-radius: 10px;
      flex-shrink: 0;
    }
    .price {
      font-size: 22px;
      font-weight: bold;
    }
    .discount {
      color: #999;
      font-size: 14px;
      overflow: hidden;
      :nth-child(1) {
        margin: 0 3px;
        text-decoration: line-through;
      }
    }
  }
  .ProductTitle {
    color: #666;
    margin-top: 10px;
    padding: 0 5px;
    font-weight: inherit;
    font-size: 12px;
    //设置文本两行超出隐藏...
    display: -webkit-box; //开启webkit内核的盒模型
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical; //设置子元素对齐方式
    -webkit-line-clamp: 2; //设置为2行文本溢出隐藏
  }
}
.product:hover {
  border: 1px solid #ff31a3;
}
</style>
