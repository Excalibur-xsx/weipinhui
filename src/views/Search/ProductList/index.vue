<template>
  <div class="productContainer">
    <div class="sortContainer">
      <div class="sortType active">
        <p>综合</p>
      </div>
      <div class="sortType">
        <p>价格</p>
        <i></i>
      </div>
      <div class="sortType">
        <p>折扣</p>
        <i></i>
      </div>
      <div class="sortType">
        <p>销量</p>
      </div>
      <div class="priceArae priceActive">
        <span class="startPrice">
          <input type="text" placeholder="￥" />
        </span>
        <i>-</i>
        <span class="endPrice">
          <input type="text" placeholder="￥" />
        </span>
        <button class="success">确定</button>
      </div>
      <div class="paging">
        <span class="current">1</span>/
        <span>28</span>
        <el-button disabled>&lt;</el-button>
        <el-button>下一页></el-button>
      </div>
    </div>
    <div class="productList">
      <div class="product active"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
};
</script>

<style lang="less" scoped>
.productContainer {
  width: 1170px;
  margin: 0 auto;
  .sortContainer {
    margin-top: 10px;
    display: flex;
    background-color: #eee;
    .sortType {
      width: 70px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-right: 1px solid #ccc;
    }
    .active {
      border: 1px solid #f10180;
      background-color: #fff;
      color: #f10180;
    }
    .priceArae {
      padding: 0 5px;
      height: 40px;
      line-height: 40px;
      i {
        margin: 5px;
      }
      span input {
        width: 50px;
        border: 1px solid #ccc;
        outline: none;
        padding-left: 3px;
      }
      .success {
        outline: none;
        cursor: pointer;
        border: 0;
        background-color: #f10180;
        border-radius: 3px;
        color: #fff;
        padding: 0 3px;
        margin-left: 10px;
      }
    }
    .priceActive {
      border: 1px solid #ccc;
      background-color: #fff;
      color: #f10180;
    }
    .paging {
      height: 40px;
      line-height: 40px;
      text-align: right;
      flex-grow: 1;
      margin-right: 5px;
      .current {
        color: #f10180;
      }
      button {
        border: 1px solid #ccc;
        background-color: #fff;
        border-radius: 3px;
        padding: 5px;
        margin-left: 10px;
      }
    }
  }
}
</style>
