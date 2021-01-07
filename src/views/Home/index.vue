<template>
  <div class="bannersContainer">
    <div class="bgImage">
      <img src="./images/bgimage.jpg" alt="" />
    </div>
    <div class="focus-banners">
      <el-carousel indicator-position="outside" class="banners" autoplay>
        <el-carousel-item class="bannersItem">
          <img src="./images/banners-3.jpg" alt="" />
        </el-carousel-item>
        <el-carousel-item class="bannersItem">
          <img src="./images/banners-2.jpg" alt="" />
        </el-carousel-item>
      </el-carousel>
      <div class="triggerCon">
        <ul class="triggerItem">
          <li class="selected">MO&Co.低至1.8折</li>
          <li>巴拉巴拉低至1.8折</li>
        </ul>
      </div>
    </div>
    <div class="hotSale">
      <div class="everyDay">
        <img src="./images/everyday.jpg" alt="" />
      </div>
    </div>
    <div class="middles">
      <div class="showImg">
        <div class="discount">
          <img class="boy" src="./images/boy.jpg" alt="" />
          <img class="dis" src="./images/discount.png" alt="" />
        </div>
      </div>
      <div class="showImg">
        <div class="discount">
          <img class="boy" src="./images/boy.jpg" alt="" />
          <img class="dis" src="./images/discount.png" alt="" />
        </div>
      </div>
    </div>
    <div class="middles">
      <div class="showImg">
        <div class="discount">
          <img class="boy" src="./images/boy.jpg" alt="" />
          <img class="dis" src="./images/discount.png" alt="" />
        </div>
      </div>
      <div class="showImg">
        <div class="discount">
          <img class="boy" src="./images/boy.jpg" alt="" />
          <img class="dis" src="./images/discount.png" alt="" />
        </div>
      </div>
    </div>

    <div class="lift">
      <div class="fixedBox" @click="switched">
        <a href="###">
          <span></span>
          <span>女装</span>
        </a>
        <a href="###">
          <span></span>
          <span>鞋包</span>
        </a>
        <a href="###">
          <span></span>
          <span>男装</span>
        </a>
        <a href="###">
          <span></span>
          <span>运动</span>
        </a>
        <a href="###">
          <span></span>
          <span>饰品</span>
        </a>
        <a href="###">
          <span></span>
          <span>美妆</span>
        </a>
        <a href="###">
          <span></span>
          <span>母婴</span>
        </a>
        <a href="###">
          <span></span>
          <span>居家</span>
        </a>
        <a href="###">
          <span></span>
          <span>生活</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    switched() {
      console.log("switched");
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bannersContainer {
  position: relative;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  .bgImage {
    img {
      width: 100%;
    }
  }
}
.focus-banners {
  padding-top: 30px;
  padding-bottom: 20px;
  position: absolute;
  height: 392px;
  margin-bottom: 10px;
  top: 0px;
  left: 180px;
  .banners {
    padding: 12px;
    padding-bottom: 0;
    background: #fff;
    background: rgba(255, 255, 255, 0.86);
    width: 974px;
    position: relative;
    margin: 0 auto;
    box-shadow: 0 1px 3px rgba(167, 167, 167, 0.4);
    .bannersItem img {
      width: 976px;
      height: 340px;
      z-index: 2;
      opacity: 1;
      margin: 0 auto;
    }
  }
  .triggerCon {
    text-align: center;
    width: 976px;
    left: 50%;
    margin-left: -488px;
    height: 40px;
    position: absolute;
    z-index: 2;
    bottom: 20px;
    .triggerItem {
      width: 100%;
      height: 40px;
      text-align: center;
      li {
        display: inline-block;
        zoom: 1;
        width: 195px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 40px;
        font: 12px/40px "microsoft Yahei";
        color: #666;
        cursor: pointer;
        border-bottom: transparent 3px solid;
        position: relative;
        &::after {
          content: "|";
          font-family: tohama;
          font-size: 10px;
          margin-left: 10px;
          color: #e8e8e8;
          position: absolute;
          right: 0;
        }
      }
    }
  }
}
.hotSale {
  width: 100%;
  padding-bottom: 20px;
  .everyDay {
    margin: 0 auto;
    text-align: center;
    img {
      width: 1000px;
    }
  }
}
.middles {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  .showImg {
    .discount {
      position: relative;
      .dis {
        width: 510px;
        height: 290px;
      }
      .boy {
        position: absolute;
        width: 147px;
        height: 186px;
        top: 70px;
        left: 30px;
      }
    }
  }
}
.lift {
  position: fixed;
  top: 112px;
  width: 36px;
  height: 300px;
  font-size: 16px;
}
</style>
