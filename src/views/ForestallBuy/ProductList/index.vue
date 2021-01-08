<template>
  <div class="product-container">
    <Title :titleName="product.name" :id="product.id" />
    <div class="product-list">
      <div
        class="product-item"
        v-for="item in product.productLists"
        :key="item.id"
      >
        <img v-lazy="item.imgUrl" />
        <p>{{ item.productTitle }}</p>
        <h3>{{ item.productName }}{{ item.productName }}</h3>
        <p class="sellNum">累计热卖{{ item.saleNum }}万件</p>
        <div class="price">
          <span>特卖价</span>
          <span>￥{{ item.salePrice }}</span>
          <span>￥{{ item.salePrice * 2 }}</span>
          <span>{{ item.discount }}折</span>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Title from "../Title";
export default {
  name: "ProductList",
  props: {
    product: Object,
  },
  components: {
    Title,
  },
};
</script>

<style lang="less" scoped>
.product-container {
  width: 100%;
  .product-list {
    width: 1170px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .product-item {
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      padding: 10px;
      margin: 10px;
      cursor: pointer;
      img {
        width: 230px;
        height: 230px;
      }
      p {
        width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      h3 {
        font-size: 18px;
      }
      .sellNum {
        width: 50%;
        margin: 10px 0;
        padding: 5px 0;
        border: 1px solid #f10180;
        color: #f10180;
        border-radius: 20px;
        text-align: center;
      }
      .price {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #ccc;
        span:nth-child(1) {
          padding: 4px;
          background-color: #f10180;
          color: #fff;
          border-radius: 20px;
          font-size: 12px;
        }
        span:nth-child(2) {
          padding: 4px;
          font-size: 25px;
          font-weight: bold;
          color: #f10180;
        }
        span:nth-child(3) {
          padding: 4px;
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
