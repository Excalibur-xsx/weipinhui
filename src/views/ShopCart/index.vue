<template>
  <div>
    <!-- 头部导航条 -->
    <div class="heard">
      <div class="heardContaiter">
        <div class="heardLeft">
          <router-link title="唯品会" to="/">
            <img src="./images/cartHeader.png" alt="logo" />
          </router-link>
        </div>
        <div class="heardRight">
          <ul class="heardRight_top">
            <li>
              你好, 152*****1
              <div class="member_logo"></div>
            </li>
            <li>[退出]</li>
            <ul class="heardRight_top_nav">
              <li>订单管理</li>
              <span class="line_between"></span>
              <li>
                <span class="iconfont icon-phone"></span>
                400-6789-888
              </li>
              <span class="line_between"></span>
              <li>
                <span class="iconfont icon-atm-fill"></span>
                在线客服
              </li>
              <span class="line_between"></span>
              <li>
                <span class="iconfont icon-Customermanagement-fill"></span>
                会员服务
                <span class="iconfont icon-arrow-down"></span>
              </li>
            </ul>
          </ul>
          <ul class="heardRight_bottom">
            <li>
              <div class="heardRight_bottom_true"></div>100% 正品保证
            </li>
            <li>
              <div class="heardRight_bottom_seven"></div>七天无理由放心退
            </li>
            <li>
              <div class="heardRight_bottom_time"></div>限时抢购
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- special sale -->
    <div class="special_sale">
      <div class="titleContainer">
        <span class="title">特卖商品</span>
      </div>
      <!-- 购物袋为空 -->
      <div class="nothing" v-if="!shopList.length">
        <span class="nothing_img"></span>
        <div class="nothing_text">
          <p class="text_1">购物袋空空如也，</p>
          <p class="text_2">快去抢购心仪商品吧~</p>
          <button class="button_1">立即抢购</button>
          <button class="button_2">查看订单</button>
        </div>
      </div>
      <!-- 购物袋不为空 -->
      <div class="shoplist" v-else>
        <div class="shoplist_head">
          <span>
            配送至
            <em>深圳市</em>
          </span>
          <span class="slipline"></span>
          <p>请提交订单，下单后你另有 30 分钟的支付时间。</p>
        </div>
        <div class="shoplist_table">
          <form action>
            <ul class="shoplist_table_title">
              <li class="firsttitle">
                <input type="checkbox" :checked="isCheckAll" @change="checkCartItems" />
                全选
              </li>
              <li>商品</li>
              <li>单价</li>
              <li>数量</li>
              <li class="lasttitle">操作</li>
            </ul>
            <ul>
              <li class="shoplist_table_detail" v-for="item in shopList" :key="item.id">
                <div class="shopdetail">
                  <input type="checkbox" :checked="item.isChecked" />
                  <img :src="item.imgUrl" />
                  <div>
                    <h3>{{item.skuName}}</h3>
                    <p>尺码：均码</p>
                    <span>7天退换</span>
                    <span>退换无忧</span>
                  </div>
                </div>
                <div class="shopprice">
                  <strong>¥{{item.skuPrice}}</strong>
                </div>
                <div class="shopnumber">
                  <button
                    class="sub"
                    @click="changeCount2(item, -1)"
                    :disabled="item.skuNum === 1"
                  >-</button>
                  <div class="number">{{item.skuNum}}</div>
                  <button
                    class="add"
                    @click="changeCount2(item, 1)"
                    :disabled="item.skuNum === 10"
                  >+</button>
                </div>
                <div class="shopdel">
                  <span @click="deleteCartItem(item.skuId)">删除</span>
                </div>
              </li>
              <!-- <li class="shoplist_table_detail">
                <div class="shopdetail">
                  <input type="checkbox" />
                  <img src="./images/shop2.jpg" alt />
                  <div>
                    <h3>坦克玩具车耐摔儿童玩具车男孩3岁大号合金小汽车军事模型套装</h3>
                    <p>尺码：均码</p>
                    <span>7天退换</span>
                    <span>退换无忧</span>
                  </div>
                </div>
                <div class="shopprice">
                  <strong>¥60</strong>
                </div>
                <div class="shopnumber">
                  <div class="sub">-</div>
                  <div class="number">1</div>
                  <div class="add">+</div>
                </div>
                <div class="shopdel">
                  <span>删除</span>
                </div>
              </li>-->
            </ul>
            <div class="shoplist_table_footer">
              <span class="table_footer_maker">运费</span>
              <div class="table_footer_text">已免运费</div>
            </div>
          </form>
        </div>
        <div class="shoplist_count">
          <div class="shoplist_count_coupon">
            <div class="count_coupon_top">
              <span class="top_1th">
                使用优惠劵
                <i class="iconfont icon-arrow-down"></i>
              </span>
              <span>
                <span class="top_2th">
                  共
                  <span class="top_2th_num">{{ totalCount }}</span>
                  件商品&nbsp;&nbsp;商品金额
                </span>
                <span class="top_3th">￥{{ totalPrice }}</span>
              </span>
            </div>
            <div class="count_coupon_bottom">
              <span class="bottom_1th">总金额（未含运费）</span>
              <span class="bottom_2th">￥{{ totalPrice }}</span>
            </div>
          </div>
          <div class="shoplist_count_footer">
            <div class="count_footer_text">请确认商品后结账</div>
            <div class="count_footer_true">立即结账</div>
          </div>
        </div>
      </div>
    </div>
    <!-- history shop -->
    <div class="history_shop">
      <div class="titleContainer">
        <span class="title">购物历史</span>
      </div>
      <div class="historylist">
        <div class="history_prev">&lt;</div>
        <div class="history_contaiter">
          <div class="history_item">
            <img src="./images/history.jpg" alt />
            <h3>奥迪双钻 超级飞侠大变形机器人儿童玩具乐迪小爱多多</h3>
            <div class="history_item_text">收纳坦克军绿色+合金车仔;均码</div>
            <div class="history_item_footer">
              <span class="history_item_price">￥60</span>
              <div class="history_item_button">
                <span>重新购买</span>
              </div>
            </div>
          </div>
          <div class="history_item">
            <img src="./images/shop1.jpg" alt />
            <h3>奥迪双钻 超级飞侠大变形机器人儿童玩具乐迪小爱多多</h3>
            <div class="history_item_text">收纳坦克军绿色+合金车仔;均码</div>
            <div class="history_item_footer">
              <span class="history_item_price">￥60</span>
              <div class="history_item_button">
                <span>重新购买</span>
              </div>
            </div>
          </div>
          <div class="history_item">
            <img src="./images/shop2.jpg" alt />
            <h3>奥迪双钻 超级飞侠大变形机器人儿童玩具乐迪小爱多多</h3>
            <div class="history_item_text">收纳坦克军绿色+合金车仔;均码</div>
            <div class="history_item_footer">
              <span class="history_item_price">￥60</span>
              <div class="history_item_button">
                <span>重新购买</span>
              </div>
            </div>
          </div>
        </div>
        <div class="history_next">&gt;</div>
      </div>
    </div>
    <!-- 质量保证 -->
    <div class="quality_guarantee">
      <div class="quality_1th"></div>
      <div class="quality_2th"></div>
      <div class="quality_3th"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "ShopCart",
  data() {
    return {
      // shopList: [],
      shopList: [
        {
          id: 61,
          userId: "2",
          skuId: 4,
          cartPrice: 5999,
          skuNum: 4,
          imgUrl: "/img/shop1.bf6021a6.jpg",
          skuName: "坦克玩具车耐摔儿童玩具车男孩3岁大号合金小汽车军事模型套装",
          isChecked: 1,
          skuPrice: 5999,
        },
        {
          id: 62,
          userId: "2",
          skuId: 2,
          cartPrice: 5499,
          skuNum: 1,
          imgUrl: "/img/shop2.cbaccffb.jpg",
          skuName: "Apple iPhone 11 (A2223) 64GB 红色",
          isChecked: 0,
          skuPrice: 5499,
        },
      ],
    };
  },
  computed: {
    // 获取vuex中购物车模块中的购物车的商品信息数据数组
    ...mapState({
      // shopList: (state) => state.shopcart.shopList,
    }),
    // 获取vuex中购物车模块中的计算属性数据:总数量,总价格,是否全选
    ...mapGetters([
      "totalCount",
      "totalPrice",
      "isCheckAll",
      "selectedCartItems",
    ]),
  },
  // 界面渲染的生命周期回调
  mounted() {
    // 获取购物车中的商品信息数据
    this.getShopCartList();
  },
  methods: {
    // 获取购物车数据
    getShopCartList() {
      // 分发action
      this.$store.dispatch("getShopList");
    },
    // 删除操作
    async deleteCartItem(skuId) {
      // 弹出对话框
      if (window.confirm("您确定要删除吗?")) {
        // 分发action
        const errorMsg = await this.$store.dispatch("deleteCartItem1", skuId);
        if (!errorMsg) {
          // 成功了
          this.getShopCartList();
        } else {
          // 失败了
          alert(errorMsg);
        }
      }
    },
    // 删除所有选中的购物项
    deleteCartItems() {
      // 获取所有选中的购物项
      const { selectedCartItems } = this;
      // 如果该数组中的数据是没有的,那么也没有必要删除
      if (selectedCartItems.length === 0) return;
      // 弹框
      if (window.confirm("您确定要删除所有选中的购物项吗")) {
        // 定义一个存储promise对象的数组
        const promises = [];
        // 遍历数组,一个一个的删除
        selectedCartItems.forEach((item) => {
          // 分发action,删除每一个购物项操作
          const promise = this.$store.dispatch("deleteCartItem2", item.skuId);
          promises.push(promise);
        });
        // 统一的处理promise
        Promise.all(promises).then(
          () => {
            // 成功了,重新获取购物车中的数据
            this.getShopCartList();
          },
          (error) => {
            // 失败了
            alert(error.message);
          }
        );
      }
    },

    // 设置购物项商品的选中状态(切换选中状态)
    checkCartItem(item) {
      const isChecked = item.isChecked === 1 ? 0 : 1;
      // 分发action
      this.$store
        .dispatch("checkCartItem1", { skuId: item.skuId, isChecked })
        .then(
          (values) => {
            // 成功了,重新获取购物车中的数据
            this.getShopCartList();
            console.log(values);
          },
          (error) => {
            // 失败了
            alert(error.message);
          }
        );
    },

    // 切换全选/全不选中的操作
    async checkCartItems(e) {
      // 获取当前复选框的选中状态
      const isChecked = e.target.checked * 1;
      // 使用map
      const promises = this.shopList.map((item) => {
        return this.$store.dispatch("checkCartItem1", {
          skuId: item.skuId,
          isChecked,
        });
      });
      // 统一处理
      try {
        await Promise.all(promises);
        // 成功了,重新获取数据
        this.getShopCartList();
      } catch (error) {
        alert("error:" + error.message);
      }
    },

    // 修改商品购物项的数量
    async changeCount(item, changeNum) {
      // 获取skuId
      const { skuId } = item;
      // 判断当前商品的数量和传入进来的修改的数量相加,要大于0
      if (item.skuNum + changeNum > 0) {
        // 分发action
        const errorMsg = await this.$store.dispatch("addToCart2", {
          skuId,
          skuNum: changeNum,
        });
        if (!errorMsg) {
          // 成功了
          this.getShopCartList();
        } else {
          // 失败了
          alert(errorMsg);
        }
      }
    },
    changeCount2(item, changeNum) {
      // 获取skuId
      const { skuId } = item;
      // 判断当前商品的数量和传入进来的修改的数量相加,要大于0
      if (item.skuNum + changeNum > 0) {
        // 分发action
        this.$store.dispatch("addToCart3", {
          skuId,
          skuNum: changeNum,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
ul {
  list-style-type: none;
}
button {
  outline: none;
}
.heard {
  border-bottom: 2px solid #f3168a;
}
.heardContaiter {
  display: flex;
  justify-content: space-between;
  width: 960px;
  margin: 0 auto;
  .heardLeft {
    padding: 16px 0px 12px;
  }
  .heardRight {
    font-size: 12px;
    .heardRight_top {
      display: flex;
      padding: 10px 5px 5px 0px;
      color: #808080;
      li {
        display: flex;
        align-items: center;
        margin-left: 12px;
        div {
          margin-left: 5px;
        }
      }
      .heardRight_top_nav {
        display: flex;
        .iconfont {
          margin-right: 6px;
        }
        .line_between {
          display: inline-block;
          margin-top: 7px;
          margin-left: 12px;
          height: 12px;
          border-left: 2px solid #808080;
        }
      }
    }
    .member_logo {
      width: 26px;
      height: 26px;
      background-image: url("./images/sprites-hash.png");
      background-position: -372px -253px;
    }
    .heardRight_bottom {
      margin-left: 155px;
      display: flex;
      li {
        display: flex;
        align-items: center;
        div {
          background-image: url("./images/sprites-hash.png");
          width: 20px;
          height: 20px;
          margin-right: 12px;
          margin-left: 25px;
        }
      }
    }
  }
  .heardRight_bottom_true {
    background-position: -587px -145px;
  }
  .heardRight_bottom_seven {
    background-position: -432px -253px;
  }
  .heardRight_bottom_time {
    background-position: -587px -169px;
  }
}
.special_sale {
  width: 960px;
  margin: 30px auto 0px;
}
.titleContainer {
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: 30px;
  font-weight: 700;
  .title {
    font-size: 16px;
    display: inline-block;
    color: #f10180;
    padding: 15px 10px 12px;
    border-bottom: 3px solid #f10180;
  }
}
.nothing {
  margin-bottom: 60px;
  text-align: center;
  .nothing_img {
    display: inline-block;
    margin: 32px 30px 0 0;
    background-image: url("./images/sprites-bg.png");
    background-position: -164px 0;
    width: 120px;
    height: 120px;
  }
  .nothing_text {
    display: inline-block;
    .text_1 {
      line-height: 32px;
      font-size: 18px;
      text-align: left;
    }
    .text_2 {
      line-height: 32px;
      margin-right: 10px;
      margin-bottom: 15px;
      font-size: 14px;
      text-align: left;
    }
    .button_1 {
      color: #fff;
      background-color: #f10180;
      border: 1px solid #f10180;
      min-width: 60px;
      padding: 0 19px;
      font: 15px/30px tahoma, arial, Hiragino Sans GB, WenQuanYi Micro Hei,
        "\5FAE\8F6F\96C5\9ED1", "\5B8B\4F53", sans-serif;
      height: 30px;
      border-radius: 3px;
      text-align: center;
      cursor: pointer;
    }
    .button_2 {
      margin-left: 9px;
      background-color: #fff;
      border: 1px solid #c2c2c2;
      min-width: 60px;
      padding: 0 19px;
      font: 15px/30px tahoma, arial, Hiragino Sans GB, WenQuanYi Micro Hei,
        "\5FAE\8F6F\96C5\9ED1", "\5B8B\4F53", sans-serif;
      height: 30px;
      border-radius: 3px;
      cursor: pointer;
    }
  }
}
.shoplist {
  .shoplist_head {
    display: flex;
    align-items: flex-end;
    span {
      font-size: 18px;
      vertical-align: bottom;
      height: 25px;
      max-width: 460px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;
      font-size: 18px;
      color: #333;
      em {
        font-style: normal;
        font-weight: 700;
        margin-left: 5px;
      }
    }
    .slipline {
      display: inline-block;
      height: 18px;
      width: 1px;
      margin: 0 12px 0 15px;
      background: #c4c4c4;
    }
    p {
      margin-right: 12px;
      color: #666;
      font: 14px/20px "Microsoft Yahei";
    }
  }
  .shoplist_table {
    .shoplist_table_title {
      display: flex;
      justify-content: space-between;
      margin: 40px 0;
      border: 1px solid #e0e0e0;
      height: 38px;
      line-height: 38px;
      background-color: #f9f9f9;
      color: #333;
      font-size: 12px;
      .firsttitle {
        font-size: 16px;
        margin-left: 15px;
      }
      .lasttitle {
        margin-right: 85px;
      }
    }
    .shoplist_table_detail {
      padding: 15px 0 15px 15px;
      border: 1px solid #e0e0e0;
      display: flex;
      .shopdetail {
        display: flex;
        align-items: center;
        width: 335px;
        img {
          width: 74px;
          height: 74px;
          padding: 0 15px;
        }
        div {
          h3 {
            color: #333;
            font-size: 12px;
            font-weight: normal;
            padding: 0;
            margin: 0 0 8px;
            width: 176px;
          }
          p {
            color: #333;
            font-size: 12px;
          }
          span {
            background: #edf3ff;
            padding: 0 8px;
            color: #627db6;
            border-radius: 13px;
            display: inline-block;
            margin-bottom: 5px;
            margin-right: 5px;
            font: 12px/1.5 tahoma, arial, Hiragino Sans GB, WenQuanYi Micro Hei,
              \5fae\8f6f\96c5\9ed1, \5b8b\4f53, sans-serif;
            padding: 0 8px;
          }
        }
      }
      .shopprice {
        font-size: 14px;
        color: #f10180;
        width: 215px;
        text-align: center;
        margin-top: 20px;
      }
      .shopnumber {
        width: 195px;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        button {
          height: 24px;
          border: 1px solid #e3e2e2;
          text-align: center;
          line-height: 24px;
        }
        div {
          height: 22px;
          border: 1px solid #e3e2e2;
          text-align: center;
          line-height: 22px;
        }
        .sub {
          font-size: 18px;
          width: 23px;
          color: #aaa;
          font-weight: bold;
          cursor: pointer;
        }
        .number {
          width: 28px;
          font-size: 12px;
        }
        .add {
          font-size: 18px;
          width: 23px;
          color: #aaa;
          font-weight: bold;
          cursor: pointer;
        }
      }
      .shopdel {
        color: #666;
        font-size: 12px;
        width: 200px;
        text-align: center;
        margin-top: 20px;
        span {
          cursor: pointer;
        }
      }
    }
    .shoplist_table_footer {
      border: 1px solid #e0e0e0;
      padding: 10px 15px;
      .table_footer_maker {
        padding: 3px 7px;
        min-width: 0;
        border: 1px solid #36c88e;
        border-radius: 11px;
        color: #36c88e;
        margin-right: 10px;
        height: 12px;
        text-align: center;
        font: 400 12px/12px \5b8b\4f53;
      }
      .table_footer_text {
        display: inline-block;
        font-size: 15px;
        color: #666;
      }
    }
  }
  .shoplist_count {
    .shoplist_count_coupon {
      border: 1px solid #e0e0e0;
      margin-top: 40px;
      padding: 18px 20px 15px;
      text-align: right;
      height: 80px;
      .count_coupon_top {
        display: flex;
        justify-content: space-between;
        .top_1th {
          display: inline-block;
          position: relative;
          z-index: 1;
          padding-left: 10px;
          height: 30px;
          line-height: 30px;
          vertical-align: top;
          color: #f10180;
          border: 1px solid #f10180;
          border-radius: 3px;
          background-color: #fff;
          .iconfont {
            margin-left: 15px;
            margin-right: 5px;
          }
        }
        .top_2th {
          color: #888;
          font-size: 12px;
          margin-right: 100px;
          .top_2th_num {
            color: #f10180;
          }
        }
        .top_3th {
          color: #333;
          font-size: 14px;
        }
      }
      .count_coupon_bottom {
        .bottom_1th {
          color: #888;
          font-size: 12px;
          margin-right: 85px;
        }
        .bottom_2th {
          color: #f10180;
          font-size: 18px;
        }
      }
    }
    .shoplist_count_footer {
      height: 50px;
      display: flex;
      margin-bottom: 40px;
      .count_footer_text {
        padding: 14px 0px 14px 20px;
        border: 1px solid #e2e1e1;
        background-color: #f3f3f3;
        padding-right: 20px;
        width: 668px;
        height: 20px;
        display: inline-block;
        text-align: right;
        font-size: 14px;
        color: #666;
      }
      .count_footer_true {
        display: inline-block;
        width: 252px;
        height: 48px;
        line-height: 50px;
        text-align: center;
        background-color: #f10180;
        border: 1px solid #f10180;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
}
.history_shop {
  width: 960px;
  margin: 0px auto;
  .historylist {
    display: flex;
    align-items: center;
    .history_prev,
    .history_next {
      width: 28px;
      height: 55px;
      text-align: center;
      line-height: 55px;
      font-size: 30px;
      color: #e1e1e1;
      font-weight: bold;
      // background-color: #627db6;
    }
    .history_contaiter {
      width: 924px;
      display: flex;
      .history_item {
        height: 275px;
        margin: 0 7px;
        img {
          width: 140px;
          height: 178px;
        }
        h3 {
          color: #333;
          font-size: 12px;
          font-weight: normal;
          margin: 6px 0;
          width: 140px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .history_item_text {
          color: #333;
          font-size: 12px;
          margin-bottom: 3px;
          width: 140px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .history_item_footer {
          display: flex;
          justify-content: space-between;
          width: 140px;
          .history_item_price {
            font-size: 16px;
            color: #333;
          }
          .history_item_button {
            color: #e00078;
            background-color: #fcedf2;
            border: 1px solid #ffbee0;
            width: 70px;
            font: 12px/22px tahoma, arial, Hiragino Sans GB, WenQuanYi Micro Hei,
              "\5FAE\8F6F\96C5\9ED1", "\5B8B\4F53", sans-serif;
            height: 22px;
            border-radius: 3px;
            text-decoration: none;
            text-align: center;
            vertical-align: top;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.quality_guarantee {
  width: 960px;
  margin: 80px auto;
  display: flex;
  justify-content: space-between;
  div {
    width: 302px;
    height: 141px;
    background-image: url("./images/sprites-hash.png");
  }
  .quality_1th {
    background-position: -306px 0;
  }
  .quality_2th {
    background-position: 0 0;
  }
  .quality_3th {
    background-position: 0 -145px;
  }
}
</style>
