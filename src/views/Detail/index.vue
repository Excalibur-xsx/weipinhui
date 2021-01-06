<template>
  <div class="goodShowContanier">
    <div class="leftContainer">
      <Zoom
        :skuImageList="goodDetail.skuInfo && goodDetail.skuInfo.skuImageList"
        :currentIndex="currentIndex"
      />
      <ImgList
        :skuImageList="goodDetail.skuInfo && goodDetail.skuInfo.skuImageList"
        @getIndex="getIndex"
      />
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
    <div class="rightContainer" v-if="goodDetail.skuInfo">
      <div class="brandName">
        <!-- <a href="www.baidu.com">苹果</a> -->
        <a href="www.baidu.com">{{ goodDetail.skuInfo.skuName }}</a>
        <p class="goodTitle">
          <!-- <span>iPhone11 128G 双卡双待（无充电器耳机版）全网通手机</span> -->
          <span>{{ goodDetail.skuInfo.skuDesc }}</span>
        </p>
      </div>
      <div class="priceContainer">
        <div class="priceWrap">
          <div class="price">
            <div class="presentPrice">
              <span>￥</span>
              <p>{{ goodDetail.price }}</p>
            </div>
            <div class="originalPrice">
              <span>￥</span>
              <p>{{ goodDetail.price + 999 }}</p>
            </div>
            <p class="discount">9.1折</p>
          </div>
        </div>
        <div class="limit">
          <span>限制</span>
          <p>该商品为特殊商品，不支持使用全场券、品类券、超级VIP9.8折</p>
        </div>
      </div>
      <div class="delivery attr">
        <p class="attrName">配送</p>
        <div class="address">
          <div
            class="optionBox"
            :class="isClick ? 'isClick' : ''"
            @click="showAddress"
          >
            <p v-if="!addressInfo.province">请选择配送地址</p>
            <p v-else>
              {{ addressInfo.province }} {{ addressInfo.city }}
              {{ addressInfo.county }}
              {{ addressInfo.street }}
            </p>
            <i
              class="iconfont"
              :class="
                isClick ? 'icon-Tarrow' : 'icon-Icon-KeyboardArrow-Down-Rounded'
              "
            ></i>
          </div>
          <Address
            v-show="isClick"
            @hideX="isClick = false"
            @selectAddress="selectAddress"
            :provinceInfo="provinceInfo"
          />
          <p class="time">现在付款，最快明天送达</p>
        </div>
      </div>
      <div class="freight attr">
        <p class="attrName">运费</p>
        <div>
          <span>订单满88元免运费</span>
          <i class="iconfont icon-wenhao"></i>
        </div>
      </div>
      <div class="color attr" :class="noSelectColor?'active':''">
        <p class="attrName">颜色</p>
        <div class="colorContainer">
          <div
            class="colorValue"
            :class="color.isActive ? 'active' : ''"
            v-for="(color, index) in colorInfo.spuSaleAttrValueList"
            :key="color.id"
            @click="selectColor(index)"
          >
            <img src="./images/s2.png" alt="" />
            <span>{{ color.saleAttrValueName }}</span>
            <i v-if="color.isActive" class="iconfont icon-gou1"></i>
          </div>
        </div>
      </div>
      <div
        class="specs attr"
        :class="noSelectAttr?'active':''"
        v-for="(attr, attrIndex) in noColorInfo"
        :key="attr.id"
      >
        <p class="attrName">{{ attr.saleAttrName.slice(2) }}</p>
        <div class="attrContainer">
          <div
            :class="attrValue.isActive ? 'active' : ''"
            v-for="(attrValue, attrValueIndex) in attr.spuSaleAttrValueList"
            :key="attrValue.id"
            @click="selectAttr(attrIndex, attrValueIndex)"
          >
            <span>{{ attrValue.saleAttrValueName }}</span>
            <i v-if="attrValue.isActive" class="iconfont icon-gou1"></i>
          </div>
        </div>
      </div>
      <div class="count attr">
        <p class="attrName">数量</p>
        <el-input-number
          v-model="count"
          :min="1"
          :max="2"
          label="描述文字"
        ></el-input-number>
      </div>
      <button class="buyBtn" @click="addShopcart">
        <p>￥{{ goodDetail.price * count }}</p>
        <span>特卖价</span>
        <span>抢 ></span>
      </button>
      <div class="line"></div>
      <div class="cusService attr">
        <p class="attrName">客服</p>
        <div>
          <i class="iconfont icon-duihua"></i>
          <a>在线客服</a>
          <span>(09:00-22:00)</span>
          <a @click="getShopcartList">看看购物车</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Zoom from "./Zoom";
import ImgList from "./ImgList";
import Address from "../../components/Address";
import {
  getGoodDetail,
  getProvince,
  addToShopcart,
  getShopcartList,
} from "../../api/detail";
export default {
  name: "Detail",
  data() {
    return {
      isHover: false,
      isClick: false,
      count: 1,
      goodDetail: {},
      currentIndex: 0,
      provinceInfo: [],
      addressInfo: {},
      noSelectColor: false,
      noSelectAttr: false
    };
  },
  watch: {
    "addressInfo.street"() {
      if (this.addressInfo.street) {
        localStorage.setItem("address", JSON.stringify(this.addressInfo));
      }
    },
  },
  computed: {
    colorInfo() {
      return this.goodDetail.spuSaleAttrList.find(
        (attr) => attr.saleAttrName === "选择颜色"
      );
    },
    noColorInfo() {
      return this.goodDetail.spuSaleAttrList.filter(
        (attr) => attr.saleAttrName !== "选择颜色"
      );
    },
  },
  methods: {
    shareEnter() {
      this.isHover = true;
    },
    shareLeave() {
      this.isHover = false;
    },
    //点击选择地址
    async showAddress() {
      this.isClick = true;
      if (this.provinceInfo.length) {
        return;
      }
      const res = await getProvince();
      this.provinceInfo = res.data.list;
    },
    //当Address组件选择地址时
    selectAddress(title, name) {
      this.$set(this.addressInfo, title, name);
    },
    //获取当前选中轮播图图片下标
    getIndex(index) {
      this.currentIndex = index;
    },
    //选择颜色
    selectColor(index) {
      this.noSelectColor = false
      this.$set(this.colorInfo.spuSaleAttrValueList[index], "isActive", true);
      this.colorInfo.spuSaleAttrValueList.map((attr, i) => {
        if (i !== index) {
          this.$set(attr, "isActive", false);
        }
        return attr;
      });
    },
    //选择其他属性
    selectAttr(attrIndex, attrValueIndex) {
      this.noSelectAttr = false
      this.$set(
        this.noColorInfo[attrIndex].spuSaleAttrValueList[attrValueIndex],
        "isActive",
        true
      );
      this.noColorInfo[attrIndex].spuSaleAttrValueList.map((value, i) => {
        if (i !== attrValueIndex) {
          this.$set(value, "isActive", false);
        }
        return value;
      });
    },
    //加入购物车
    addShopcart() {
      //判断是否选择颜色
      const colorList = this.colorInfo.spuSaleAttrValueList;
      const selectedColor = colorList.find((item) => item.isActive);
      if(!selectedColor){
        this.noSelectColor = true
      }else{
        this.noSelectColor = false
      }
      //判断是否选择其他属性
      const selectedAllAttr = this.noColorInfo.every(attr=>{
        const selectedAttr = attr.spuSaleAttrValueList.find(item=>item.isActive)
        if(selectedAttr){
          return true
        }else{
          return false
        }
      })
      if(!selectedAllAttr){
        this.noSelectAttr = true
      }else{
        this.noSelectAttr = false
      }

      //每个属性都选择才发请求
      if(!this.noSelectColor && !this.noSelectAttr){
        addToShopcart(this.goodDetail.skuInfo.id,this.count)
      }
    },
    //test获取购物车列表
    getShopcartList() {
      getShopcartList();
    },
  },
  async mounted() {
    //获取商品详情数据
    // const res = await getGoodDetail(1361);
    // const res = await getGoodDetail(113);
    // const res = await getGoodDetail(1194)
    const res = await getGoodDetail(123)
    this.goodDetail = res;

    //自动识别地址
    const address = localStorage.getItem("address");
    this.addressInfo = JSON.parse(address);
  },
  components: {
    Zoom,
    ImgList,
    Address,
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
    // background-color: indianred;
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
  .attr {
    display: flex;
    align-items: center;
    margin: 15px 0;
  }
  .delivery {
    position: relative;
    align-items: flex-start;
    p {
      height: 30px;
      line-height: 30px;
    }
    .time {
      margin-top: 10px;
      color: #666;
    }
  }
  /* .address{
    position: relative;
  } */
  .optionBox {
    width: 250px;
    height: 30px;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #ccc;
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      max-width: 240px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .iconfont {
      color: #b3b3b3;
    }
    &.isClick {
      border-bottom: 1px solid #fff;
    }
  }
  .attrName {
    color: #999;
    margin-right: 16px;
  }
  .freight {
    div {
      display: flex;
      align-items: center;
    }
    .icon-wenhao {
      margin-left: 5px;
      font-weight: bold;
      color: #333;
    }
  }
  .color {
    align-items: flex-start;
    p {
      white-space: nowrap;
      height: 32px;
      line-height: 32px;
    }
  }
  .color,.specs{
    &.active {
      padding: 10px;
      padding-bottom: 0;
      border: 1px solid indianred;
      background-color: #fdedf5;
      position: relative;
      left: -10px;
    }
  }
  .colorContainer {
    display: flex;
    flex-wrap: wrap;
  }
  .colorValue {
    margin: 0 10px 10px 0;
    padding: 1px;
    border: 1px solid #ccc;
    background-color: #fff;
    display: flex;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    img {
      width: 28px;
      height: 28px;
    }
    span {
      padding: 0 15px;
    }
    &.active {
      padding: 0;
      border: 2px solid indianred;
    }
    .icon-gou1 {
      position: absolute;
      bottom: -2px;
      right: -1px;
      color: indianred;
    }
  }
  .specs {
    align-items: flex-start;
    p {
      white-space: nowrap;
      height: 32px;
      line-height: 32px;
    }
    span {
      padding: 0 20px;
    }
    .icon-gou1 {
      position: absolute;
      bottom: -2px;
      right: -1px;
      color: indianred;
    }
  }
  .attrContainer {
    display: flex;
    flex-wrap: wrap;
    div {
      height: 32px;
      // line-height: 32px;
      display: flex;
      align-items: center;
      margin: 0 10px 10px 0;
      padding: 1px;
      border: 1px solid #ccc;
      background-color: #fff;
      position: relative;
      box-sizing: border-box;
      &.active {
        padding: 0;
        border: 2px solid indianred;
      }
    }
  }
  .count {
    /deep/.el-input {
      width: 75px;
      height: 30px;
    }
    /deep/.el-input-number {
      width: 75px;
      height: 30px;
    }
    /deep/.el-input__inner {
      width: 75px;
      height: 30px;
      padding: 0;
      border: 1px solid #b3b3b3;
      border-radius: 0;
      display: flex;
      justify-content: space-between;
    }
    /deep/.el-input-number__decrease,
    /deep/.el-input-number__increase {
      width: 21px;
      height: 28px;
      line-height: 28px;
    }
  }
  .buyBtn {
    width: 252px;
    height: 46px;
    padding: 0 40px;
    margin-left: 40px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: indianred;
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    p {
      font-size: 20px;
    }
    span {
      font-size: 14px;
    }
  }
  .line {
    margin-top: 10px;
    border-bottom: 1px dashed #e2e2e2;
  }
  .cusService {
    div {
      display: flex;
      align-items: center;
    }
    .iconfont {
      margin-right: 5px;
      color: indianred;
    }
    a {
      color: indianred;
      text-decoration: underline;
    }
    span {
      margin-left: 5px;
      color: #999;
    }
  }
}
</style>
