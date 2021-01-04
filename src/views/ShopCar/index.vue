<template>
  <div>
    <!-- 头部导航条 -->
    <div class="heard">
      <div class="heardContaiter">
        <div class="heardLeft">
          <img src="./images/cartHeader.png" alt="购物车" />
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
      <div class="nothing">
        <span class="nothing_img"></span>
        <div class="nothing_text">
          <p class="text_1">购物袋空空如也，</p>
          <p class="text_2">快去抢购心仪商品吧~</p>
          <button class="button_1">立即抢购</button>
          <button class="button_2">查看订单</button>
        </div>
      </div>
      <!-- 购物袋不为空 -->
      <div class="shoplist">
        <div class="shoplist_head">
          <span>
            配送至
            <em>深圳市</em>
          </span>
          <span class="slipline"></span>
          <p>请提交订单，下单后你另有 30 分钟的支付时间。</p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCar",
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
}
</style>
