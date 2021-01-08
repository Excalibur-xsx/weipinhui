<template>
  <div>
    <!-- 头部导航条 -->
  
    <!-- 支付成功 -->
    <div class="paysuccess">
      <div class="success">
        <h3>
          <img src="./images/right.png" width="48" height="48" />
          恭喜您，支付成功啦！
        </h3>
        <div class="paydetail">
          <p class="button">
            <router-link class="btn-look" to="/">查看订单</router-link>
            <router-link class="btn-goshop" to="/">继续购物</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaySuccess",
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
.paysuccess {
  margin: 80px auto 120px;
  padding: 25px;
  border: 1px solid #de3d96;
  border-radius: 3px;
  width: 1200px;
  width: 1148px;
  .success {
    width: 500px;
    margin: 0 auto;

    h3 {
      margin: 20px 0;
      padding-left: 50px;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;

      img {
        max-width: 100%;
        vertical-align: middle;
        border: 0;
        margin-right: 14px;
      }
    }

    .paydetail {
      margin-left: 66px;
      font-size: 15px;

      .button {
        margin: 30px 0;
        line-height: 26px;

        a {
          display: inline-block;
          box-sizing: border-box;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          border-radius: 3px;
          user-select: none;
          font-size: 18px;
          padding: 4px 20px;
          line-height: 22px;
          text-decoration: none;

          &.btn-look {
            margin-right: 13px;
            color: #fff;
            background-color: #de3d96;
            border: 1px solid #de3d96;
          }

          &.btn-goshop {
            color: #666;
            background-color: #eee;
            border: 1px solid #e1e1e1;
          }
        }
      }
    }
  }
}
</style>