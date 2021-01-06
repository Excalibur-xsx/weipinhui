<template>
  <div>
    <div class="wrapper">
      <div class="hot-product-container">
        <div class="product-list">
          <div class="product-item">
            <div class="pic">
              <img
                src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100005574/2020/0802/137/4823bff6-fac1-4b33-bb37-0308dbf0fedc.jpg!75.webp"
              />
              <div class="hot">
                <img
                  src="//h2.appsimg.com/a.appsimg.com/upload/pmc/2019/10/28/15/1572234761550.png"
                />
              </div>
            </div>
            <transition name="slide-fade">
              <p v-show="isEnterHotProduct" class="title">13斤洗衣柔顺组合</p>
            </transition>
            <div class="msg">
              <span>特卖价</span>
              <span class="price">￥59</span>
            </div>
          </div>
          <div class="product-item">
            <div class="pic">
              <img
                src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100005574/2020/0802/137/4823bff6-fac1-4b33-bb37-0308dbf0fedc.jpg!75.webp"
              />
              <div class="hot">
                <img
                  src="//h2.appsimg.com/a.appsimg.com/upload/pmc/2019/10/28/15/1572234761550.png"
                />
              </div>
            </div>
            <transition name="slide-fade">
              <p v-show="isEnterHotProduct" class="title">13斤洗衣柔顺组合</p>
            </transition>
            <div class="msg">
              <span>特卖价</span>
              <span class="price">￥59</span>
            </div>
          </div>
          <div class="product-item">
            <div class="pic">
              <img
                src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100005574/2020/0802/137/4823bff6-fac1-4b33-bb37-0308dbf0fedc.jpg!75.webp"
              />
              <div class="hot">
                <img
                  src="//h2.appsimg.com/a.appsimg.com/upload/pmc/2019/10/28/15/1572234761550.png"
                />
              </div>
            </div>
            <transition name="slide-fade">
              <p v-show="isEnterHotProduct" class="title">13斤洗衣柔顺组合</p>
            </transition>
            <div class="msg">
              <span>特卖价</span>
              <span class="price">￥59</span>
            </div>
          </div>
          <div class="product-item">
            <div class="pic">
              <img
                src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100005574/2020/0802/137/4823bff6-fac1-4b33-bb37-0308dbf0fedc.jpg!75.webp"
              />
              <div class="hot">
                <img
                  src="//h2.appsimg.com/a.appsimg.com/upload/pmc/2019/10/28/15/1572234761550.png"
                />
              </div>
            </div>
            <transition name="slide-fade">
              <p v-show="isEnterHotProduct" class="title">13斤洗衣柔顺组合</p>
            </transition>
            <div class="msg">
              <span>特卖价</span>
              <span class="price">￥59</span>
            </div>
          </div>
          <div class="product-item">
            <div class="pic">
              <img
                src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100005574/2020/0802/137/4823bff6-fac1-4b33-bb37-0308dbf0fedc.jpg!75.webp"
              />
              <div class="hot">
                <img
                  src="//h2.appsimg.com/a.appsimg.com/upload/pmc/2019/10/28/15/1572234761550.png"
                />
              </div>
            </div>
            <p v-show="isEnterHotProduct" class="title">13斤洗衣柔顺组合</p>
            <div class="msg">
              <span>特卖价</span>
              <span class="price">￥59</span>
            </div>
          </div>
        </div>
      </div>
      <Title titleName="热销分类" />
    </div>
  </div>
</template>

<script>
import Title from "./Title";
export default {
  name: "ForestallBuy",
  data() {
    return {
      //移入热门商品显示商品名
      isEnterHotProduct: true,
    };
  },
  components: {
    Title,
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
}
</style>
