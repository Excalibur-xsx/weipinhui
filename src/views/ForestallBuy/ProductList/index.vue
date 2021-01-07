<template>
  <div class="product-container">
    <Title titleName="今日必抢" id="1" />
    <div class="product-list">
      <div class="product-item">
        <img
          src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/11/25/99/cc79f50d-da27-46b5-b813-a6fbfa266356.jpg!75.webp"
        />
        <p>DEVONDALE澳洲德运全脂成人奶粉 1000g（3岁以上）</p>
        <h3>澳洲奶源 源自天然</h3>
        <p class="sellNum">累计热卖3.0万件</p>
        <div class="price">
          <span>特卖价</span>
          <span>￥49</span>
          <span>￥49</span>
          <span>3.3折</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../Title";
export default {
  name: "ProductList",
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
      cursor:pointer;
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
