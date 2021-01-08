<template>
  <div class="bannersContainer">
    <div class="bgImage">
      <img src="./images/bgimage.jpg" alt="" />
    </div>
    <div class="focus-banners">
      <el-carousel class="banners" autoplay>
        <el-carousel-item class="bannersItem" v-for="item in banners" :key="item.id">
          <img v-lazy="item.imgUrl" alt="" />
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
    <div class="imgList">
      <div class="discount">
        <img src="./images/discount.png" alt="" />
      </div>
      <div class="bang">
        <img src="./images/ranking.png" alt="" />
      </div>
    </div>
    <div class="low">
      <div class="lowItem">
        <img src="./images/low.png" alt="" />
      </div>
    </div>
    <div class="sale">
      <img src="./images/sale.png" alt="" />
      <a href="###" class="reset">马上刷新</a>
    </div>
    <div class="girlClothes" v-for="(item, index) in 10" :key="index">
      <div class="girlBrand"><img src="./images/girlBrand.png" alt="" /></div>
      <div class="aside" v-for="item in floors" :key="item.id">
        <div class="detailContaniner">
          <div class="detailImge">
            <img v-lazy="item.imgUrl" alt="" />
            <span class="mihuang">米皇mihuang羊绒-最后疯抢专场</span>
            <span class="three">三折疯抢</span>
          </div>
        </div>
        <div class="detailContaniner">
          <div class="detailImge">
            <img v-lazy="item.imgUrl" alt="" />
            <span class="mihuang">米皇mihuang羊绒-最后疯抢专场</span>
            <span class="three">三折疯抢</span>
          </div>
        </div>
      </div>
      <div class="more">
        <a href="###">逛更多品牌</a>
      </div>
    </div>
    <div class="lift">
      <div class="fixedBox">
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
import {mapState,mapActions} from 'vuex'
export default {
  name: "Home",
  computed:{
    ...mapState({
      banners:(state)=>state.home.banners,
      floors:(state)=>state.home.floors
    })
  },
  methods: {
    ...mapActions(["getBanners","getFloors"])
  },
  mounted(){
    this.getBanners()
    this.getFloors()
  }
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
.imgList {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  .discount {
    img {
      width: 510px;
      height: 290px;
    }
  }
  .bang {
    img {
      width: 490px;
      height: 290px;
    }
  }
}
.low {
  .lowItem {
    width: 1000px;
    margin: 0 auto;
    img {
      width: 1000px;
      height: 298px;
    }
  }
}
.sale {
  width: 1000px;
  margin: 0 auto;
  height: 80px;
  position: relative;
  background-repeat: no-repeat;
  img {
    position: absolute;
    left: 50%;
    margin-left: -585px;
    top: 0;
  }
  .reset {
    position: absolute;
    top: 57px;
    left: 507px;
    width: 88px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    padding: 0;
  }
}
.girlClothes {
  width: 1000px;
  margin: 0 auto;
  
  .girlBrand {
    margin-bottom: 30px;
    min-height: 43px;
    border-bottom: 1px #1a1a1a solid;
    img {
      vertical-align: top;
    }
  }
  .aside {
    display: flex;
    .detailContaniner {
      .detailImge {
        display: inline-block;
        vertical-align: top;
        margin-right: 20px;
        background: #fff;
        img {
          width: 490px;
          height: 235px;
        }
        .mihuang {
          margin-top: 18px;
          cursor: pointer;
          font-family: MicrosoftYaHei;
          font-weight: 700;
          font-size: 18px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 455px;
          display: block;
        }
        .three {
          color: #4d4d4d;
          font-size: 16px;
          margin-right: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100px;
          display: inline-block;
        }
      }
    }
  }
  .more {
    border-top: 1px solid #e8e8e8;
    a {
      width: 324px;
      display: block;
      color: #fff;
      height: 44px;
      background-color: #f10180;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      font-size: 16px;
      text-align: center;
      line-height: 44px;
      margin: -1px auto 20px;
    }
  }
}
.lift {
  position: fixed;
  top: 112px;
  left:80px;
  width: 36px;
  height: 300px;
  font-size: 16px;
}
</style>
