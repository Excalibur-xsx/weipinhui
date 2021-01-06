<template>
  <div class="navLoginContainer">
    <div class="navLoginContent">
      <ul class="navLogin">
        <li class="navLoginUser">
          <div class="navLoginUseIcon">
            <i class="iconfont icon-icon-test5"></i>
          </div>
          <div class="navLoginUserText">
            <div class="navLoginUserTextH">
              <span>X</span>
              <div class="headPortrait">
                <img
                  src="./images/u=796496269,866887780&fm=26&gp=0.jpg"
                  alt=""
                />
              </div>
              <p>你好！135*****...,<a href="">请登录</a></p>
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
        <li class="navLoginShop">
          <i class="iconfont icon-marks"></i>
          <p class="navLoginShopBag">购物袋</p>
          <p class="navLoginShopNum">0</p>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "NavLogin",
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
          a {
            border: 0;
            color: #df147f;
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
}
</style>
