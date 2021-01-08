<template>
  <div>
    <!-- 头部导航条 -->
    <div class="heard">
      <div class="heardContaiter">
        <div class="heardLeft">
          <router-link title="唯品会" to="/">
            <!-- <img src="./images/checkoutHeader.png" alt="logo" /> -->
            <div class="logo_img"></div>
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
    <!-- 立即支付 -->
    <div class="pay_warp">
      <div class="pay_inner">
        <div class="pay_head">
          <div class="head_1th">
            <i>✔</i>
            <span>订单提交成功，还差一步就抢到心爱的商品，快快支付吧~</span>
          </div>
          <div class="head_2th">
            <div class="head_2th_left">
              <span class="left_1th">共1张订单，</span>
              <span class="left_2th">订单详情</span>
            </div>
            <div class="head_2th_right">
              <span class="right_1th">待支付：</span>
              <span class="right_2th">￥666.00</span>
            </div>
          </div>
        </div>
        <div class="financial-border"></div>
        <div class="pay_ways">
          <div class="pay_wx">
            使用：
            <i></i>
            微信支付
          </div>
          <div class="pay_count">
            支付：￥
            <span>666.00</span>
            （已优惠：￥0）
          </div>
        </div>
        <div class="pay_end" @click="submit">
          <span>立即支付</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 二维码生成
import QRCode from "qrcode";
import { getCodeUrlRequest, getPayStatuslRequest } from "@api/order";

export default {
  name: "Pay",
  methods: {
    async submit() {
      const { orderId } = this.$route.query;
      // 发送请求获取二维码相关数据
      const payMessage = await getCodeUrlRequest(orderId);
      // 生成二维码
      QRCode.toDataURL(payMessage.codeUrl)
        .then((url) => {
          this.$alert(`<img src="${url}"/>`, "微信支付二维码", {
            showCancelButton: true, //是否显示取消按钮
            showClose: false, //是否显示右上角的X按钮
            dangerouslyUseHTMLString: true, //是否将 message 属性作为 HTML 片段处理
            confirmButtonText: "我已成功支付",
            cancelButtonText: "支付遇到了一些问题",
            center: true,
          })
            .then(() => {
              getPayStatuslRequest(orderId)
                .then(() => {
                  console.log("支付成功");
                  this.$message({
                    type: "success",
                    message: "支付成功!",
                  });
                  this.$router.push("/paysuccess");
                })
                .catch(() => {
                  this.$router.push("/center");
                });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消删除",
              });
            });
        })
        .catch((err) => {
          console.error(err);
        });
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
    .logo_img {
      background-image: url("./images/index_z.png");
      width: 98px;
      height: 56px;
    }
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
.pay_warp {
  width: 960px;
  margin: 25px auto 85px;
  padding: 0 10px;
  background: #f9fafa;
  color: #555;
  .pay_inner {
    .pay_head {
      .head_1th {
        height: 60px;
        line-height: 60px;
        position: relative;
        padding-left: 40px;
        i {
          position: absolute;
          top: 50%;
          left: 10px;
          margin: -30px 0 0;
          cursor: pointer;
          color: #47b85c;
          font-size: 32px;
        }
        span {
          padding-left: 10px;
          font-size: 18px;
        }
      }
      .head_2th {
        padding-left: 42px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .head_2th_left {
          .left_2th {
            color: #157efa;
            cursor: pointer;
          }
        }
        .head_2th_right {
          .right_2th {
            color: #e4007f;
            font-size: 20px;
          }
        }
      }
    }
    .financial-border {
      width: 978px;
      height: 4px;
      margin: 6px -10px 0;
      border: 1px solid #c5c5c5;
      background: #d4d4d4;
      border-radius: 3px;
    }
    .pay_ways {
      padding: 20px 0 0;
      font-size: 14px;
      .pay_wx {
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          width: 22px;
          height: 22px;
          margin: 0 10px;
          background: url("./images/index_z.png") -74px -140px no-repeat;
        }
      }
      .pay_count {
        padding: 20px 0;
        font-size: 12px;
        vertical-align: baseline;
        span {
          font-size: 20px;
          color: #e4007f;
        }
      }
    }
    .pay_end {
      margin: 0 0 20px;
      padding-top: 30px;
      border-top: 2px solid #979797;
      padding-bottom: 20px;
      span {
        display: block;
        width: 72px;
        height: 44px;
        line-height: 42px;
        background-color: #de3d96;
        border: 1px solid #de3d96;
        padding: 0 35px;
        font-size: 18px;
        color: #fff;
        border-radius: 3px;
        cursor: pointer;
      }
    }
  }
}
</style>
