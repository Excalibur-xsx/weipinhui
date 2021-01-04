<template>
  <div>
    <header class="common-header">
      <nav class="top-nav">
        <div class="header-inner">
          <div class="address-container">
            <div class="address-header">
              <div class="area-title">
                <span>北京市</span>
                <i class="iconfont icon-jiantouarrow486"></i>
              </div>
            </div>
            <div class="address-content">
              <!-- <p class="area-explain">请选择你所在的收获地区</p> -->
              <div class="area-tab">
                <div class="tab-header">
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div class="tab-content">
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ul class="nav-tool">
            <li class="nav-log">
              <ul class="nav-logRes">
                <li class="login">
                  <!-- <span>/</span> -->
                  <p>
                    <a href="###">请登录</a>
                    <i class="iconfont icon-jiantouarrow486"></i>
                  </p>
                </li>
                <li class="register">/<a href="###">注册</a></li>
              </ul>
            </li>
            <li class="nav-log">
              <span>
                <i></i>
                <span>签到有礼</span>
              </span>
            </li>
            <li class="nav-log">
              <span>
                <a href="###">我的订单</a>
                <i></i>
              </span>
            </li>
            <li class="nav-log">
              <span>
                <a href="###">我的特卖</a>
                <i></i>
              </span>
            </li>
            <li class="nav-log">
              <span>
                <a href="###">会员俱乐部</a>
                <i></i>
              </span>
            </li>
            <li class="nav-log">
              <span>
                <a href="###">客户服务</a>
                <i></i>
              </span>
            </li>
            <li class="nav-log">
              <span>
                <a href="###">手机版</a>
                <i></i>
              </span>
            </li>
            <li class="nav-log">
              <span>
                <a href="###">更多</a>
                <i></i>
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <div class="head-logo">
        <div class="head-inner">
          <div class="logo">
            <router-link class="logo" title="唯品会" to="/">
              <img src="./images/logo.png" alt="" />
            </router-link>
          </div>
          <div class="service">
            <a class="service-link" href=""></a>
            <a class="service-link" href=""></a>
            <a class="service-link" href=""></a>
            <img src="../NavHeader/images/service.jpg" alt="" />
          </div>
          <div class="search">
            <form class="searchForm">
              <input class="searchInput" type="text" />
              <button class="searchBtn">
                <i class="iconfont icon-sousuo"></i>
              </button>
            </form>
          </div>
          <div class="cart">
            <div class="tool">
              <i class="iconfont icon-gouwudai"></i>
              <a href="###">购物车</a>
            </div>
          </div>
        </div>
      </div>
      <TypeNav></TypeNav>
    </header>
  </div>
</template>

<script>
import TypeNav from "../TypeNav/index";
export default {
  name: "NavHeader",
  data() {
    return {
      isSearchShow: false,
    };
  },
  components: {
    TypeNav,
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.common-header {
  width: 100%;
  .top-nav {
    position: relative;
    z-index: 103;
    height: 30px;
    line-height: 30px;
    background-color: #f5f5f5;
    color: #777;
    .header-inner {
      width: 1000px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .address-container {
        .address-header {
          position: relative;
          z-index: 1;
          padding-left: 15px;
          padding-right: 23px;
          width: 46px;
          height: 27px;
          cursor: pointer;
          border-width: 1px 1px 0;
          border-style: solid;
          border-color: #f5f5f5;
          font-size: 12px;
          .area-title .iconfont {
            position: absolute;
            right: 10px;
          }
        }
      }
      .nav-tool {
        display: flex;
        .nav-log {
          font-size: 12px;
          color: #777;
          position: relative;
          z-index: 11;
          height: 26px;
          text-align: center;
          padding-left: 10px;
          padding-right: 17px;
          .nav-logRes {
            display: flex;
            .login {
              padding-left: 10px;
              padding-right: 17px;
            }
            .register {
              padding-left: 10px;
              padding-right: 17px;
            }
            &:hover .nav-logRes {
              background-color: white;
              width: 100px;
              height: 100px;
              border: 1px solid #ccc;
              // position: absolute;
              // top: 0;
              // left: 0;
            }
          }
          &::after {
            background-image: url("./images/sprites.png");
            background-position: -207px -184px;
            width: 16px;
            height: 16px;
            position: absolute;
            top: 6px;
            right: -5px;
            z-index: 1;
            content: "";
          }
        }
      }
    }
  }
  .head-logo {
    width: 1000px;
    margin: 0 auto;
    height: 100px;
    background-color: #fff;
    .head-inner {
      width: 1000px;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: space-between;
      clear: both;
      .logo {
        display: inline;
        position: relative;
        float: left;
        z-index: 1;
        margin-right: 1px;
        min-width: 140px;
        height: 100px;
        img {
          width: 160px;
          height: 100px;
        }
      }
      .service {
        background-image: url("./images/sprites.png");
        background-position: 0 0;
        width: 304px;
        height: 100px;
        display: inline;
        position: relative;
        z-index: 1;
        width: 304px;
        height: 100px;
        // .service-link {
        //   display: inline-block;
        //   position: relative;
        //   z-index: 2;
        //   width: 101px;
        //   height: 100px;
        //   background: url("./images/sprites.png") repeat 0 0;
        // }
        img {
          border: 0 none;
          vertical-align: top;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          width: 304px;
          height: 100px;
        }
      }
      .search {
        position: relative;
        margin-top: 33px;
        width: 391px;
        .searchForm {
          position: relative;
          z-index: 2;
          width: 387px;
          height: 32px;
          border: 2px solid #fa2a83;
          border-radius: 2px;
          background-color: #fff;
          .searchInput {
            padding: 2px 12px;
            width: 311px;
            height: 28px;
            line-height: 30px;
            font-size: 14px;
            color: #333;
            border: none;
            outline: none;
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
            background-color: #fff;
          }
          .searchBtn {
            position: absolute;
            border: none;
            outline: none;
            top: 0;
            right: 0;
            padding-top: 6px;
            width: 53px;
            height: 32px;
            text-align: center;
            background-color: #fa2a83;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            .iconfont {
              width: 19px;
              height: 22px;
              display: inline-block;
              color: white;
              font-size: 24px;
              line-height: 22px;
              text-align: center;
            }
          }
        }
      }
      .cart {
        display: inline;
        position: relative;
        z-index: 9;
        float: right;
        margin-top: 33px;
        margin-left: 15px;
        width: 96px;
        .tool {
          position: relative;
          z-index: 1;
          width: 96px;
          text-align: center;
          height: 32px;
          line-height: 32px;
          cursor: pointer;
          border: 1px solid #ccc;
          background-color: #f6f7f9;
          border-radius: 2px;
          color: #333;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
