<template>
  <div>
    <div class="wrapper" v-wechat-title="$route.meta.title">
      <div class="hot-product-container">
        <div class="product-list">
          <div
            class="product-item"
            v-for="hot in forestallBuyList.hotSale"
            :key="hot.id"
          >
            <div class="pic">
              <img :src="hot.imgUrl" />
              <div class="hot">
                <img
                  src="//h2.appsimg.com/a.appsimg.com/upload/pmc/2019/10/28/15/1572234761550.png"
                />
              </div>
            </div>
            <p class="title">{{ hot.name }}</p>
            <div class="msg">
              <span>特卖价</span>
              <span class="price">￥{{ hot.price }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="sale-catalog-container">
        <Title titleName="热销分类" />
        <div class="sale-catalog-wrap">
          <ul class="sale-catalog">
            <li
              class="sale-catalog-item"
              v-for="cateLog in forestallBuyList.hotCateLog"
              :key="cateLog.id"
            >
              <div class="show-detail">
                <div class="sale-cate-name">
                  <p>{{ cateLog.name }}</p>
                </div>
                <div class="sale-cate-img">
                  <img :src="cateLog.imgUrl" />
                </div>
              </div>
              <div class="show-bg"></div>
            </li>
          </ul>
        </div>
      </div>
      <ProductList
        v-for="product in forestallBuyList.productList"
        :key="product.id"
        :product="product"
      />
      <div class="sidebar" v-show="isShowSidebar">
        <div
          v-for="(product, index) in forestallBuyList.productList"
          :key="index"
          class="sidebar-item"
        >
          <a :href="`#${product.id}`">{{ product.name }}</a>
        </div>
        <a href="#">返回顶部</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getForestallBuyList } from "../../api/forestallBuy";
import Title from "./Title";
import ProductList from "./ProductList";
export default {
  name: "ForestallBuy",
  data() {
    return {
      forestallBuyList: {},
      isShowSidebar: false,
    };
  },
  components: {
    Title,
    ProductList,
  },
  async mounted() {
    this.forestallBuyList = await getForestallBuyList();
    window.onscroll = () => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 900) {
        this.isShowSidebar = true;
      }
      if (scrollTop < 900) {
        this.isShowSidebar = false;
      }
    };
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  background-color: rgb(243, 244, 245);
  background-image: url(http://h2.appsimg.com/b.appsimg.com/upload/mst/2020/06/22/180/e82c55bd020c8790b30ce1294a648f96.jpg);
  background-position: center top;
  background-repeat: no-repeat;
  min-height: 448px;
  .hot-product-container {
    width: 1180px;
    height: 325px;
    margin: 0 auto;
    padding-top: 138px;
    .product-list {
      padding: 0 80px;
      display: flex;
      justify-content: space-around;
      .product-item {
        cursor: pointer;
        width: 180px;
        text-align: center;
        border-radius: 35px;
        padding: 5px;
        background-color: #fff;
        .pic {
          width: 180px;
          height: 150px;
          position: relative;
          img {
            width: 140px;
            height: 140px;
          }
          .hot {
            img {
              position: absolute;
              width: 40px;
              height: 40px;
              top: 0;
              right: 10px;
            }
          }
        }
        .title {
          background-color: #f558af;
          color: #fff;
          font-size: 16px;
        }
        .msg {
          margin-top: 3px;
          display: flex;
          justify-content: center;
          align-items: center;
          span:nth-child(1) {
            background-color: #f558af;
            color: #fff;
            font-size: 13px;
            padding: 2px;
            border-radius: 10px;
          }
          .price {
            color: #f10180;
            font-size: 25px;
            font-weight: bold;
          }
        }
      }
    }
  }
  .sale-catalog-container {
    width: 100%;
    height: 300px;
    .sale-catalog-wrap {
      width: 1170px;
      margin: 0 auto;
      height: 80%;
      .sale-catalog {
        width: 100%;
        height: auto;
        padding: 10px;
        height: 90%;
      }
    }
  }
  .sale-catalog-item {
    height: 100px;
    width: 193px;
    float: left;
    margin-right: 30px;
    margin-top: 10px;
    position: relative;
    background-color: #fff;
    z-index: 3;
    cursor: pointer;
    .show-bg {
      position: absolute;
      height: 0%;
      width: 100%;
      top: 100%;
      z-index: 1;
      transition: all 0.5s;
    }
    .show-detail {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 3;
      color: #4a4a4a;
      .sale-cate-name {
        width: 93px;
        margin-top: 38px;
        margin-left: 20px;
        font-weight: 700;
        float: left;
        font-size: 18px;
        z-index: 3;
        p {
          height: 24px;
          line-height: 24px;
        }
      }
      .sale-cate-img {
        width: 65px;
        height: 65px;
        float: left;
        margin-top: 15px;
        z-index: 3;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .show-detail:hover {
    color: #fff;
  }
  .show-detail:hover + .show-bg {
    height: 100%;
    background-color: #f558af;
    top: 0%;
  }
}
.sidebar {
  position: fixed;
  top: 30%;
  right: 6%;
  background-color: #fff;
  padding: 30px 10px;
  border: 1px solid #f10180;
  border-radius: 10px;
  overflow: hidden;
  .sidebar-item {
    height: 30px;
    text-align: 30px;
    z-index: 1;
    color: black;
    a {
      font-size: 16px;
      padding-top: 5px;
      border-bottom: 1px solid #f10180;
      text-decoration: none;
    }
    a:link {
      text-decoration: none;
    }
    a:visited {
      text-decoration: underline;
    }
    a:hover {
      color: #f10180;
      text-decoration: none;
    }
    a:actived {
      text-decoration: none;
    }
  }
}
</style>
