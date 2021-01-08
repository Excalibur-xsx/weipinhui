<template>
  <div>
    <!-- 头部导航条 -->
    <div class="heard">
      <div class="heardContaiter">
        <div class="heardLeft">
          <router-link title="唯品会" to="/">
            <img src="./images/checkoutHeader.png" alt="logo" />
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
    <!-- 购物进度 -->
    <div class="shop_step">
      <div class="shop_step_banner">
        <div class="step_bg_1th"></div>
        <div class="step_bg_2th"></div>
        <div class="step_bg_3th"></div>
        <div class="step_bg_4th"></div>
        <div class="step_bg_5th"></div>
      </div>
      <div class="shop_step_txt">
        <span class="step_txt_1th">查看购物袋</span>
        <span class="step_txt_2th">确认订单信息</span>
        <span class="step_txt_3th">成功提交订单</span>
      </div>
    </div>
    <!-- 收货信息 -->
    <div class="shop_info">
      <div class="info_note">
        <h2>
          配送至
          <em>宝安区</em>&nbsp;
          <em>西乡街道</em>
        </h2>
      </div>
      <div class="shop_info_warp">
        <div class="info_title">收货信息</div>
        <div class="info_add">
          <ul>
            <li
              class="info_add_item"
              v-for="userAddress in tradeList.userAddressList"
              :key="userAddress.id"
              @click="isSelected = userAddress.id"
            >
              <div class="add_item_inner">
                <div class="add_item_1th">
                  <div class="add_item_name">{{ userAddress.consignee }}</div>
                  <div>
                    <span>修改</span>
                    <span>删除</span>
                    <span v-if="+userAddress.isDefault">默认地址</span>
                  </div>
                </div>
                <div class="add_item_2th">
                  <div>{{ userAddress.phoneNum }}</div>
                  <div>周一至周日均可收货</div>
                </div>
                <div class="add_item_3th">
                  <strong>{{ userAddress.userAddress }}</strong>&nbsp;
                  <span></span>
                </div>
                <span :class="{add_item_select: isSelected === userAddress.id }"></span>
              </div>
            </li>
            <!-- <li class="info_add_item">
              <div class="add_item_inner">
                <div class="add_item_1th">
                  <div class="add_item_name">幸世鑫</div>
                  <div>
                    <span>修改</span>
                    <span>删除</span>
                    <span>选择地址</span>
                  </div>
                </div>
                <div class="add_item_2th">
                  <div>152*****168</div>
                  <div>周一至周日均可收货</div>
                </div>
                <div class="add_item_3th">
                  <strong>广东省深圳市</strong>&nbsp;
                  <span>宝安区草围村</span>
                </div>
                <span></span>
              </div>
            </li>-->
            <li class="add_new_item">
              <div class="add_new">
                <div class="add_mark">+</div>
                <div class="add_txt">添加地址</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 商品清单 -->
    <div class="shop_list">
      <div class="list_title">
        <span>商品清单</span>
        <span class="go_back">返回购物袋修改商品</span>
      </div>
      <div class="goods_list">
        <div class="goods_item">
          <div class="goods_item_head">
            <ul>
              <li class="head_1th">唯品会 发货订单</li>
              <li class="head_2th">尺码</li>
              <li class="head_3th">单价</li>
              <li class="head_4th">数量</li>
            </ul>
          </div>
          <div class="goods_item_body">
            <div class="item_body" v-for="detail in tradeList.detailArrayList" :key="detail.skuId">
              <ul>
                <li class="body_1th">
                  <img :src="detail.imgUrl" />
                  <p>{{ detail.skuName }}</p>
                </li>
                <li class="body_2th">标准</li>
                <li class="body_3th">¥{{ detail.orderPrice }}</li>
                <li class="body_4th">{{ detail.skuNum }}</li>
              </ul>
            </div>
          </div>
          <div class="goods_item_foot">
            <div class="goods_foot">
              <span class="foot_1th">运费： 免运费</span>
              <span class="foot_2th">本组商品金额：&nbsp;</span>
              <span class="foot_3th">¥{{ tradeList.totalAmount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 支付信息 -->
    <div class="pay_info">
      <div class="info_title">
        <span>支付信息</span>
      </div>
      <div class="pay_select">
        <div class="select_title">
          <h3>支付方式</h3>
        </div>
        <div class="select_ways">
          <div class="select_item">
            <span class="item_radio"></span>
            <span class="item_text">微信支付</span>
            <p>当前仅支持微信支付！</p>
          </div>
        </div>
      </div>
      <div class="pay_money">
        <div class="pay_money_top">
          <ul>
            <li class="top_1th">
              <span class="top_text">商品金额：</span>
              <span class="top_price">¥{{ tradeList.totalAmount }}</span>
            </li>
            <li class="top_2th">
              <span class="top_text">运费：</span>
              <span class="top_price">¥0</span>
            </li>
          </ul>
          <div class="pay_count">
            <span class="top_text">待支付：</span>
            <span class="top_price">¥{{ tradeList.totalAmount }}</span>
          </div>
          <div class="goto_add">
            <span>送货至：{{ currentAddress.userAddress }}，{{ currentAddress.consignee }}，{{ currentAddress.phoneNum }}</span>
          </div>
        </div>
        <div class="pay_money_bottom">
          <div class="pay_ok" @click="submit">
            <span>提交订单</span>
          </div>
          <div class="pay_warn">
            <p>请确认无误后提交订单</p>
          </div>
        </div>
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
import { gettradeRequest, submitOrderRequest } from "@api/order";

export default {
  name: "Trade",
  data() {
    return {
      tradeList: {},
      // tradeList: {
      //   userAddressList: [
      //     {
      //       id: -1,
      //       consignee: "幸世鑫",
      //       userAddress: "广东省深圳市宝安区",
      //       phoneNum: "15207978168",
      //       isDefault: "1",
      //     },
      //     {
      //       id: 2,
      //       consignee: "幸世鑫",
      //       userAddress: "江西省赣州市南康区",
      //       phoneNum: "15207978168",
      //       isDefault: "0",
      //     },
      //   ],
      //   detailArrayList: [
      //     {
      //       id: 61,
      //       userId: "2",
      //       skuId: 4,
      //       orderPrice: 5999,
      //       skuNum: 4,
      //       imgUrl: "/img/shop1.bf6021a6.jpg",
      //       skuName:
      //         "坦克玩具车耐摔儿童玩具车男孩3岁大号合金小汽车军事模型套装",
      //       isChecked: 1,
      //       skuPrice: 5999,
      //     },
      //     {
      //       id: 62,
      //       userId: "2",
      //       skuId: 2,
      //       orderPrice: 5499,
      //       skuNum: 1,
      //       imgUrl: "/img/shop2.cbaccffb.jpg",
      //       skuName: "Apple iPhone 11 (A2223) 64GB 红色",
      //       isChecked: 1,
      //       skuPrice: 5499,
      //     },
      //   ],
      //   totalAmount: 12345,
      // },
      isSelected: -1,
      orderComment: "",
    };
  },
  computed: {
    // 当前选中的收货地址
    currentAddress() {
      const { userAddressList } = this.tradeList;
      const userAddress = userAddressList
        ? userAddressList.find((userAddress) => {
            return userAddress.id === this.isSelected;
          })
        : {};
      return userAddress;
    },
  },
  methods: {
    // 提交订单
    async submit() {
      const { tradeNo, detailArrayList } = this.tradeList;
      const { consignee, phoneNum, userAddress } = this.currentAddress;
      const orderId = await submitOrderRequest({
        tradeNo,
        consignee,
        consigneeTel: phoneNum,
        deliveryAddress: userAddress,
        paymentWay: "ONLINE",
        orderComment: this.orderComment,
        orderDetailList: detailArrayList,
      });
      this.$router.push(`/pay?orderId=${orderId}`);
    },
  },
  async mounted() {
    const tradeList = await gettradeRequest();
    this.tradeList = tradeList;
    this.isSelected = this.tradeList.userAddressList.find((userAddress) => {
      return userAddress.isDefault === "1";
    }).id;
  },
};
</script>

<style lang="less" scoped>
ul {
  list-style-type: none;
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

.shop_step {
  width: 610px;
  margin: 30px auto;
  .shop_step_banner {
    display: flex;
    div {
      background-image: url("./images/sprites-hash.png");
    }
    .step_bg_1th {
      width: 100px;
      height: 50px;
      background-position: -468px -290px;
    }
    .step_bg_2th {
      width: 152px;
      height: 50px;
      background-position: 0 -290px;
    }
    .step_bg_3th {
      width: 100px;
      height: 50px;
      background-position: -364px -290px;
    }
    .step_bg_4th {
      width: 152px;
      height: 50px;
      background-position: -306px -199px;
    }
    .step_bg_5th {
      width: 100px;
      height: 50px;
      background-position: -462px -199px;
    }
  }
  .shop_step_txt {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    span {
      width: 100px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      margin-top: 3px;
    }
    .step_txt_1th {
      color: #999;
    }
    .step_txt_2th {
      color: #000;
    }
    .step_txt_3th {
      color: #acb2b5;
    }
  }
}
.shop_info {
  width: 960px;
  margin: 0 auto;
  .info_note {
    color: #333;
    margin-bottom: 30px;
    h2 {
      font-size: 18px;
      font-weight: 400;
      height: 25px;
      vertical-align: bottom;
      max-width: 460px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      em {
        font-style: normal;
        font-weight: 700;
      }
    }
  }
}
.shop_info_warp {
  .info_title {
    padding: 10px 15px;
    height: 18px;
    line-height: 18px;
    border: 1px solid #e2e2e2;
    border-left: 2px solid #f3168a;
    background-color: #f9f9f9;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-bottom: 30px;
  }
  .info_add {
    ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-left: 15px;
    }
    .info_add_item {
      margin: 0 15px 20px 0;
      width: 300px;
      vertical-align: top;
      word-spacing: normal;
      letter-spacing: normal;
      font-size: 12px;
      position: relative;
      .add_item_inner {
        border-color: #a0a0a0;
        background-image: url("./images/sprites-y-hash.png");
        background-position: 0 0;
        position: relative;
        z-index: 1;
        cursor: pointer;
        padding: 6px 18px;
        width: 258px;
        height: 136px;
        color: #333;
        border: 1px solid #d0d0d0;
        background: #fff url("./images/sprites-y-hash.png") repeat-x 0 -304px;
        .add_item_1th {
          border-bottom: 1px dashed #ececec;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .add_item_name {
            padding-top: 12px;
            padding-right: 40px;
            padding-bottom: 11px;
            height: 21px;
            line-height: 21px;
            font-size: 14px;
          }
          span {
            color: royalblue;
            margin-left: 10px;
          }
          span:hover {
            color: deepskyblue;
          }
        }
        .add_item_2th {
          display: flex;
          justify-content: space-between;
          padding-top: 12px;
        }
        .add_item_3th {
          padding-top: 12px;
        }
        .add_item_select {
          display: inline-block;
          background-image: url("./images/sprites-hash-bg.png");
          background-position: -160px -116px;
          width: 34px;
          height: 34px;
          position: absolute;
          bottom: 0;
          right: -1px;
        }
      }
    }
    .add_new_item {
      margin: 0 15px 20px 0;
      width: 300px;
      display: inline-block;
      vertical-align: top;
      word-spacing: normal;
      letter-spacing: normal;
      font-size: 12px;
      .add_new {
        border: 1px solid #d0d0d0;
        background: #f9f9f9;
        position: relative;
        cursor: pointer;
        padding: 6px 18px;
        width: 258px;
        height: 136px;
        color: #666;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .add_mark {
          font-size: 50px;
          color: #a0a0a0;
        }
        .add_txt {
          font-size: 14px;
        }
      }
    }
  }
}
.shop_list {
  width: 960px;
  margin: 30px auto;
  margin-bottom: 90px;
  .list_title {
    padding: 10px 15px;
    height: 18px;
    line-height: 18px;
    border: 1px solid #e2e2e2;
    border-left: 2px solid #f3168a;
    background-color: #f9f9f9;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    display: flex;
    justify-content: space-between;
    .go_back {
      color: #1d94d1;
      font-size: 12px;
      cursor: pointer;
    }
  }
  .goods_list {
    padding-top: 26px;
    font-size: 12px;
    color: #333;
    .goods_item {
      width: 930px;
      margin: 0 auto;
      .goods_item_head {
        margin-bottom: 15px;
        ul {
          color: #999;
          font-size: 12px;
          text-align: center;
          padding-bottom: 6px;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          .head_1th {
            font-size: 16px;
            text-align: left;
            width: 522px;
            color: #333;
            font-weight: bold;
          }
          .head_2th {
            width: 124px;
          }
          .head_3th {
            width: 160px;
          }
          .head_4th {
            padding-right: 15px;
            width: 109px;
            text-align: right;
          }
        }
      }
      .goods_item_body {
        .item_body {
          margin-bottom: 20px;
          ul {
            display: flex;
            .body_1th {
              padding-right: 100px;
              width: 422px;
              img {
                width: 32px;
                height: 42px;
              }
              p {
                display: inline-block;
                height: 36px;
                overflow: hidden;
              }
            }
            .body_2th {
              width: 124px;
              text-align: center;
            }
            .body_3th {
              width: 160px;
              text-align: center;
            }
            .body_4th {
              padding-right: 15px;
              width: 109px;
              text-align: right;
            }
          }
        }
      }
      .goods_item_foot {
        margin-top: 20px;
        padding-top: 10px;
        border-top: 1px solid #e0e0e0;
        .goods_foot {
          float: right;
          font-weight: 700;
          .foot_1th {
            margin-right: 50px;
          }
          .foot_3th {
            color: #f10180;
          }
        }
      }
    }
  }
}
.pay_info {
  width: 960px;
  margin: 0px auto;
  .info_title {
    padding: 10px 15px;
    height: 18px;
    line-height: 18px;
    border: 1px solid #e2e2e2;
    border-left: 2px solid #f3168a;
    background-color: #f9f9f9;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    display: flex;
    justify-content: space-between;
  }
  .pay_select {
    width: 930px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 28px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e0e0e0;
    .select_title {
      margin-bottom: 12px;
      h3 {
        font-size: 14px;
      }
    }
    .select_ways {
      margin-top: 17px;
      background-color: #fcfef9;
      border: 1px solid #d0d0d0;
      border-color: #7cbf13;
      border-radius: 2px;
      .select_item {
        cursor: pointer;
        padding: 13px 10px 13px 15px;
        color: #666;
        display: flex;
        align-items: center;
        .item_radio {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-image: url("./images/sprite.png");
          background-position: 0 -42px;
        }
        .item_text {
          margin-right: 0;
          margin-left: 5px;
          font-size: 14px;
        }
        p {
          font-size: 12px;
          margin-left: 20px;
        }
      }
    }
  }
  .pay_money {
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    .pay_money_top {
      padding: 32px 20px 0;
      color: #333;
      font-size: 12px;
      ul {
        li {
          position: relative;
          margin-bottom: 7px;
          text-align: right;
          .top_text {
            margin-right: 120px;
          }
          .top_price {
            position: absolute;
            right: 0;
          }
        }
      }
      .pay_count {
        padding-bottom: 15px;
        padding-top: 5px;
        text-align: right;
        overflow: hidden;
        font-size: 18px;
        font-weight: bold;
        position: relative;
        .top_text {
          margin-right: 115px;
        }
        .top_price {
          position: absolute;
          right: 0;
        }
      }
      .goto_add {
        text-align: right;
        color: #666;
        padding-right: 20px;
      }
    }
    .pay_money_bottom {
      background-color: #f0f0f0;
      margin-top: 12px;
      height: 50px;
      .pay_warn {
        float: right;
        p {
          margin-right: 20px;
          color: #666;
          line-height: 50px;
        }
      }
      .pay_ok {
        width: 248px;
        height: 48px;
        float: right;
        background-color: #f10180;
        border: 1px solid #f10180;
        color: #fff;
        text-align: center;
        cursor: pointer;
        span {
          font-size: 18px;
          line-height: 50px;
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
