<template>
  <div class="navLoginContainer">
    <div class="navLoginContent">
      <ul class="navLogin">
        <li
          class="navLoginUser"
          @mouseover="mouseover(!UserShow, !moveFlag)"
          @mouseleave="mouseover(UserShow, moveFlag)"
        >
          <div class="navLoginUseIcon">
            <i class="iconfont icon-icon-test5"></i>
          </div>
          <div
            class="navLoginUserText"
            :style="{ right: move, transition: 'all .5s' }"
          >
            <div class="navLoginUserTextH">
              <span @click="userClick(!moveFlag)">X</span>
              <div class="headPortrait">
                <img
                  src="./images/u=796496269,866887780&fm=26&gp=0.jpg"
                  alt=""
                />
              </div>
              <p>
                {{ name ? name : "你好！135*****..." }},<router-link
                  class="toLogin"
                  v-if="!name"
                  to="/login"
                  >请登录</router-link
                >
                <span v-else>你好</span>
              </p>
            </div>
            <div class="navLoginUserTextB">
              <div class="navLoginUserTextBLft">
                <i class="iconfont icon-icon-test2"></i>
                <p>我的订单</p>
              </div>
              <div class="navLoginUserTextBRgt">
                <i class="iconfont icon-discounts-fill"></i>
                <p>我的唯品币</p>
              </div>
            </div>
            <div class="member">
              <a href="">会员俱乐部</a>
            </div>
          </div>
        </li>
        <li class="navLoginShop" @click="shopClick(!ShopShow)">
          <i class="iconfont icon-marks"></i>
          <p class="navLoginShopBag">购物袋</p>
          <p class="navLoginShopNum">3</p>
        </li>
        <li class="navLoginDiscounts">
          <i class="iconfont icon-discounts-fill"></i>
        </li>
        <li class="navLoginDiscounts">
          <i class="iconfont icon-icon-test6"></i>
        </li>
        <li class="navLoginDiscounts">
          <i class="iconfont icon-icon-test7"></i>
        </li>
        <li class="navLoginDiscounts">
          <i class="iconfont icon-bofangjilu"></i>
        </li>
        <li></li>
        <li></li>
      </ul>
      <div
        class="navLoginShopText"
        :style="{ right: clickMove, transition: 'all .5s' }"
      >
        <div class="navLoginShopTextH">
          <i class="iconfont icon-bofangjilu"></i>
          <span>商品将保留</span>
          <span>14分06秒</span>
          <span @click="shopClick(!ShopShow)">X</span>
        </div>
        <div class="navLoginShopTextM">
          <img
            src="./images/cecd2889-0cd7-4202-b520-679fee3cffaf.jpg"
            alt=""
            style="width: 50px; height: 70px"
          />
          <div class="Shopinformation">
            <span>男装2020秋冬新品男士厚款</span>
            <p>L</p>
          </div>
          <span class="num">1</span>
          <span class="price">￥351.00</span>
        </div>
        <div class="navLoginShopTextM">
          <img
            src="./images/cecd2889-0cd7-4202-b520-679fee3cffaf.jpg"
            alt=""
            style="width: 50px; height: 70px"
          />
          <div class="Shopinformation">
            <span>男装2020秋冬新品男士厚款</span>
            <p>L</p>
          </div>
          <span class="num">3</span>
          <span class="price">￥351.00</span>
        </div>
        <div class="navLoginShopTextM">
          <img
            src="./images/cecd2889-0cd7-4202-b520-679fee3cffaf.jpg"
            alt=""
            style="width: 50px; height: 70px"
          />
          <div class="Shopinformation">
            <span>男装2020秋冬新品男士厚款</span>
            <p>L</p>
          </div>
          <span class="num">1</span>
          <span class="price">￥351.00</span>
        </div>
        <div class="navLoginShopTextF">
          <div class="site">
            <span class="num">5</span>
            <span>款商品配送至湛江市</span>
          </div>
          <span class="price">¥351</span>
        </div>
        <button>去购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NavLogin",
  data() {
    return {
      move: "-36px",
      clickMove: "-36px",
      ShopShow: true,
      UserShow: true,
      flag: false,
      moveFlag: true,
    };
  },
  computed: {
    ...mapState({
      name: (state) => state.user.name,
    }),
  },
  methods: {
    mouseover(UserShow, moveFlag) {
      if (this.flag) return;
      if (UserShow) {
        // console.log(22);
        this.move = "-36px";
        this.moveFlag = true;
        // console.log("moveFlag1", moveFlag);
        return;
      } else {
        if (moveFlag) return;
        this.move = "302px";
        moveFlag = false;
        // console.log("moveFlag2", moveFlag);
      }
    },
    shopClick(ShopShow) {
      if (ShopShow) {
        // console.log(111);
        this.clickMove = "-36px";
        this.ShopShow = true;
        this.flag = false;
      } else {
        this.clickMove = "302px";
        this.ShopShow = false;
        this.flag = true;
      }
    },
    userClick(moveFlag) {
      if (!moveFlag) {
        // console.log(111);
        this.move = "-36px";
        this.moveFlag = false;
        this.UserShow = true;
      }
    },
    // shopTextClick() {
    //   this.clickMove = "-36px";
    //   this.ShopShow = true;
    //   this.flag = false;
    // },
  },
};
</script>

<style lang='less' scoped>
.navLoginContainer {
  height: 100%;
  width: 36px;
  position: fixed;
  top: 0;
  right: 0;
}
.navLoginContent {
  height: 100%;
  background-color: #262626;
  .navLogin {
    position: absolute;
    top: 86px;
    width: 36px;
  }
  .navLoginUser {
    position: absolute;
    width: 100%;
    height: 86px;
    // background-color: yellow;
    // background-color: brown;
    cursor: pointer;
    .navLoginUserText {
      position: relative;
      top: -28px;
      // right: -302px;
      right: -36px;
      width: 300px;
      height: 300px;
      background-color: white;
      border: 1px solid #e5e5e5;
      z-index: -1;
      .navLoginUserTextH {
        // margin: 0 auto;
        text-align: center;
        // border-bottom: 1px solid grey;
        height: 50%;
        span {
          display: block;
          font-size: 16px;
          // float: right;
          // margin-left: 250px;
          margin-left: 85%;
          padding: 10px 0;
        }
        .headPortrait {
          width: 80px;
          height: 80px;
          border: 1px solid white;
          // margin-left: 125px;
          margin: 0 auto;
          border-radius: 50%;
          img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
          }
        }
        p {
          margin-top: 15px;
          .toLogin {
            border: 0;
            color: #df147f;
          }
          span {
            margin: -30px -140px 0 0;
          }
        }
      }
      .navLoginUserTextB {
        background-color: whitesmoke;
        height: 30%;
        margin-top: 20px;
        display: flex;
        align-items: center;
        border-top: 1px solid #e5e5e5;
        .navLoginUserTextBLft {
          display: flex;
          flex-direction: column;
          width: 50%;
          align-items: center;
          border-right: 1px solid #e5e5e5;
          .icon-icon-test2 {
            font-size: 30px;
          }
        }
        .navLoginUserTextBLft:hover {
          color: #df147f;
        }
        .navLoginUserTextBRgt {
          display: flex;
          flex-direction: column;
          width: 50%;
          align-items: center;
          .icon-discounts-fill {
            font-size: 30px;
          }
        }
        .navLoginUserTextBRgt:hover {
          color: #df147f;
        }
      }
      .member {
        height: 20%;
        width: 100%;
        line-height: 320%;
        border-top: 1px solid #e5e5e5;
        a {
          color: turquoise;
          margin-left: 70%;
        }
      }
    }
    .navLoginUseIcon {
      position: relative;
      top: 43px;
      left: 4px;
      width: 28px;
      height: 28px;
      line-height: 28px;
      background: white;
      border-radius: 20px;
    }
    .icon-icon-test5 {
      font-size: 28px;
    }
  }
  .navLoginUser:hover {
    background-color: #df147f;
  }
  .navLoginShop {
    position: relative;
    top: 87px;
    height: 150px;
    width: 100%;
    background-color: #df147f;
    i {
      position: relative;
      left: 4px;
      display: block;
      width: 28px;
      box-sizing: border-box;
      height: 52px;
      padding-top: 10px;
      // background-color: yellowgreen;
      color: #fff;
      &.icon-marks {
        font-size: 28px;
      }
    }
    .navLoginShopBag {
      width: 15px;
      font-weight: 600;
      font-size: 15px;
      color: #fff;
      margin: 0 auto;
    }
    .navLoginShopNum {
      height: 20px;
      width: 20px;
      background-color: #fff;
      margin: 5px 9px 0;
      border-radius: 50%;
      text-align: center;
      line-height: 20px;
      color: #df147f;
    }
  }
  .navLoginDiscounts {
    position: relative;
    top: 90px;
    height: 36px;
    width: 100%;
    // background-color: aqua;
    i {
      margin-left: 4px;
      font-size: 26px;
      color: #fff;
    }
  }
  .navLoginShopText {
    position: relative;
    right: -36px;
    width: 302px;
    height: 100%;
    border: 1px solid black;
    box-sizing: border-box;
    padding: 0px 14px;
    z-index: -1;
    .navLoginShopTextH {
      width: 272px;
      height: 20px;
      line-height: 20px;
      display: flex;
      padding: 10px 0;
      justify-content: space-between;
      justify-items: center;
      font-size: 20px;
      .icon-bofangjilu {
        font-size: 18px;
      }
      span:nth-child(3) {
        color: #f10180;
      }
      span:nth-child(4) {
        font-weight: 500;
      }
    }
    .navLoginShopTextM {
      display: flex;
      margin-top: 10px;
      img {
        margin-right: 10px;
      }
      .Shopinformation {
        display: flex;
        flex-direction: column;
        width: 74px;
        span {
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          margin-bottom: 10px;
        }
        p {
          font-size: 18px;
          color: #9f9e9e;
        }
      }
      .num {
        width: 50px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        font-size: 14px;
      }
      .price {
        width: 50px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        font-size: 14px;
        font-weight: 500;
        color: #f10180;
      }
    }
    .navLoginShopTextF {
      display: flex;
      margin-top: 16px;
      padding: 16px 0 10px;
      border-top: 1px solid #d3d1d1;
      background-color: #fff;
      justify-content: space-between;
      .site {
        display: flex;
        .num {
          width: 12px;
          color: #f10180;
          font-weight: 700;
        }
      }
      .price {
        font-size: 18px;
        font-weight: 500;
        color: #f10180;
      }
    }
    button {
      width: 100%;
      height: 36px;
      background-color: #f10180;
      color: #fff;
      border-radius: 3px;
      cursor: pointer;
      border: 0;
      outline: none;
    }
  }
}
</style>
