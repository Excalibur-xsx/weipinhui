<template>
  <div class="goodShowContanier">
    <div class="leftContainer">
      <Zoom />
      <ImgList />
      <div class="bottomHandle">
        <span class="goodCode"
          >商品编码：苹果iPhone11-128G简配绿 商品编码：苹果iPhone11-128G简配绿
        </span>
        <div class="collection">
          <i class="iconfont icon-kongxinwujiaoxing"></i>
          <span>收藏商品</span>
        </div>
        <div
          class="share"
          :class="isHover ? 'isHover' : ''"
          @mouseenter="shareEnter"
          @mouseleave="shareLeave"
        >
          <i class="iconfont icon-fenxiang"></i>
          <span>分享到:</span>
          <i
            class="iconfont"
            :class="
              isHover ? 'icon-triangle-t' : 'icon-triangle-copy-copy-copy'
            "
          ></i>
        </div>
        <ul
          class="shareList"
          :class="isHover ? 'isShow' : ''"
          @mouseenter="shareEnter"
          @mouseleave="shareLeave"
        >
          <li>
            <i class="iconfont icon-qqkongjian"></i>
          </li>
          <li>
            <i class="iconfont icon-qq"></i>
          </li>
          <li>
            <i class="iconfont icon-weixin"></i>
          </li>
          <li>
            <i class="iconfont icon-weibo"></i>
          </li>
        </ul>
      </div>
      <div class="bottomImg">
        <img src="./images/pc_xuanguan.png" alt="" />
      </div>
    </div>
    <div class="rightContainer">
      <div class="brandName">
        <a href="www.baidu.com">苹果</a>
        <p class="goodTitle">
          <span>iPhone11 128G 双卡双待（无充电器耳机版）全网通手机</span>
        </p>
      </div>
      <div class="priceContainer">
        <div class="priceWrap">
          <div class="price">
            <div class="presentPrice">
              <span>￥</span>
              <p>4798</p>
            </div>
            <div class="originalPrice">
              <span>￥</span>
              <p>5299</p>
            </div>
            <p class="discount">9.1折</p>
          </div>
        </div>
        <div class="limit">
          <span>限制</span>
          <p>该商品为特殊商品，不支持使用全场券、品类券、超级VIP9.8折</p>
        </div>
      </div>
      <div class="delivery">
        <p class="attrName">配送</p>
        <div class="address">
          <div class="optionBox">
            <p>请选择</p>
            <i class="iconfont icon-Icon-KeyboardArrow-Down-Rounded"></i>
          </div>
          <div class="addressBox">
            <ul class="addressTitle">
              <li>省份</li>
              <li>城市</li>
              <li>县区</li>
              <li>街道</li>
            </ul>
            <div>
              <ul class="addressName">
                <li>
                  <a href="">广东省</a>
                </li>
                <li>
                  <a href="">广东省</a>
                </li>
                <li>
                  <a href="">广东省</a>
                </li>
                <li>
                  <a href="">广东省</a>
                </li>
                <li>
                  <a href="">广东省</a>
                </li>
                <li>
                  <a href="">广东省</a>
                </li>
                <li>
                  <a href="">广东省</a>
                </li>
                <li>
                  <a href="">广东省</a>
                </li>
                <li>
                  <a href="">广东省</a>
                </li>
                <li>
                  <a href="">广东省</a>
                </li>
                <li>
                  <a href="">广东省</a>
                </li>
                <li>
                  <a href="">广东省</a>
                </li>
              </ul>
              <ul class="addressName">
                <li>
                  <a href="">西红柿</a>
                </li>
                <li>
                  <a href="">西红柿</a>
                </li>
                <li>
                  <a href="">西红柿</a>
                </li>
                <li>
                  <a href="">西红柿</a>
                </li>
                <li>
                  <a href="">西红柿</a>
                </li>
                <li>
                  <a href="">西红柿</a>
                </li>
                <li>
                  <a href="">西红柿</a>
                </li>
                <li>
                  <a href="">西红柿</a>
                </li>
                <li>
                  <a href="">西红柿</a>
                </li>
              </ul>
              <ul class="addressName">
                <li>
                  <a href="">xx县</a>
                </li>
                <li>
                  <a href="">xx县</a>
                </li>
                <li>
                  <a href="">xx县</a>
                </li>
                <li>
                  <a href="">xx县</a>
                </li>
                <li>
                  <a href="">xx县</a>
                </li>
                <li>
                  <a href="">xx县</a>
                </li>
                <li>
                  <a href="">xx县</a>
                </li>
                <li>
                  <a href="">xx县</a>
                </li>
                <li>
                  <a href="">xx县</a>
                </li>
                <li>
                  <a href="">xx县</a>
                </li>
              </ul>
              <ul class="addressName">
                <li>
                  <a href="">大街</a>
                </li>
                <li>
                  <a href="">大街</a>
                </li>
                <li>
                  <a href="">大街</a>
                </li>
                <li>
                  <a href="">大街</a>
                </li>
                <li>
                  <a href="">大街</a>
                </li>
                <li>
                  <a href="">大街</a>
                </li>
                <li>
                  <a href="">大街</a>
                </li>
                <li>
                  <a href="">大街</a>
                </li>
                <li>
                  <a href="">大街</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Zoom from "./Zoom";
import ImgList from "./ImgList";
export default {
  name: "Detail",
  data() {
    return {
      isHover: false,
    };
  },
  methods: {
    shareEnter() {
      this.isHover = true;
    },
    shareLeave() {
      this.isHover = false;
    },
  },
  components: {
    Zoom,
    ImgList,
  },
};
</script>

<style lang="less" scoped>
.goodShowContanier {
  width: 1000px;
  margin: 22px auto 0;
  display: flex;
  justify-content: space-between;
  .leftContainer {
    width: 420px;
  }
  .bottomHandle {
    display: flex;
    padding: 10px 0;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom: 1px dashed #e2e2e2;
    span {
      color: #999;
    }
    .collection {
      display: flex;
      align-items: center;
    }
    .icon-kongxinwujiaoxing {
      margin-right: 5px;
      font-size: 18px;
      font-weight: bold;
      color: indianred;
    }
  }
  .goodCode {
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .share {
    width: 93px;
    height: 22px;
    padding: 0 5px;
    box-sizing: border-box;
    border: 1px solid #c2c2c2;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    .icon-fenxiang {
      font-size: 12px;
      font-weight: bold;
    }
    .iconfont {
      color: #999;
    }
    span {
      color: #333;
    }
    &.isHover {
      border-bottom: 1px solid transparent;
    }
  }
  .shareList {
    width: 130px;
    padding: 5px 0;
    border: 1px solid #c2c2c2;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    top: 31px;
    left: 327px;
    z-index: 1;
    display: none;
    &.isShow {
      display: flex;
    }
    li:nth-of-type(1) i {
      color: rgb(255, 224, 51);
    }
    li:nth-of-type(2) i {
      color: rgb(126, 174, 239);
    }
    li:nth-of-type(3) i {
      color: rgb(120, 211, 125);
    }
    li:nth-of-type(4) i {
      color: rgb(255, 120, 114);
    }
    i {
      font-size: 20px;
    }
  }
  .bottomImg {
    margin: 20px 0;
  }
  .rightContainer {
    width: 550px;
  }
  .brandName {
    font-size: 16px;
    a {
      color: blue;
    }
    .goodTitle {
      margin: 8px 0;
      span {
        font-weight: bold;
        background-color: #c8c8c8;
      }
    }
  }
  .priceContainer {
    padding-bottom: 10px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
  }
  .priceWrap {
    padding: 15px 0;
    background-color: indianred;
  }
  .price {
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
  }
  .presentPrice {
    span {
      font-size: 20px;
      font-family: arial;
    }
    p {
      font-size: 48px;
      font-weight: 400;
      display: inline-block;
    }
  }
  .originalPrice {
    font-size: 16px;
    color: #999;
    height: 37px;
    line-height: 37px;
    p {
      display: inline-block;
      text-decoration: line-through;
    }
  }
  .discount {
    font-size: 16px;
    color: #999;
    height: 37px;
    line-height: 37px;
  }
  .limit {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 20px;
    span {
      padding: 1px 20px;
      margin-right: 5px;
      color: #fff;
      background-color: #f3b241;
    }
    p {
      width: 338px;
      font-size: 16px;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .delivery{
    height: 30px;
    line-height: 30px;
    display: flex;
    position: relative;
  }
  /* .address{
    position: relative;
  } */
  .optionBox{
    width: 250px;
    height: 30px;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #ccc;
    border-bottom: #fff;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .iconfont{
      color: #b3b3b3;
    }
  }
  .attrName{
    color: #999;
    margin-right: 16px;
  }
  .addressBox{
    padding: 20px;
    padding-bottom: 0;
    border: 1px solid #ccc;
    position: absolute;
    left: -20px;
    top: 29px;
    z-index: 1;
  }
  .addressTitle{
    width: 455px;
    border-bottom: 1px solid #ccc;
    display: flex;
    li{
      width: 70px;
      height: 30px;
      text-align: center;
      margin-right: -1px;
      margin-bottom: -1px;
      border: 1px solid #ccc;
      // border-bottom: transparent;
      background-color: #f9f9f9;
    }
  }
  .addressName{
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    display: none;
    &:nth-of-type(1){
      display: flex;
    }
    li{
      width: 103px;
      height: 22px;
      a{
        padding: 2px 10px;
        border: 1px solid transparent;
      }
      a:hover{
        text-decoration: none;
        border: 1px solid rgb(245,86,144);
      }
    }
  }
}
</style>
