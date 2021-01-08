<template>
  <div class="detailBottom">
    <ul class="detailNav" :class="isSticky ? 'sticky' : ''" ref="detailNav">
      <li :class="activePlace === 'params' ? 'active' : ''">
        <a @click="scrollTo('params')">规格参数</a>
      </li>
      <li :class="activePlace === 'goodShow' ? 'active' : ''">
        <a @click="scrollTo('goodShow')">商品展示</a>
      </li>
      <li :class="activePlace === 'comment' ? 'active' : ''">
        <a @click="scrollTo('comment')">全部评价（666）</a>
      </li>
      <li>
        <a>商品咨询</a>
      </li>
      <li>
        <a>售后服务</a>
      </li>
      <li>
        <a>关于我们</a>
      </li>
      <div v-if="isSticky" class="addShopcartWrap">
        <span>￥ {{ price }}</span>
        <div class="addShopcart" @click="$emit('addShopcart', true)">
          <i class="iconfont icon-ziyuan"></i>
          <p>加入购物袋</p>
        </div>
      </div>
    </ul>
    <div class="bottomContainer">
      <div class="certificate">
        <i class="iconfont icon-CCCrenzheng"></i>商品具有<a href=""
          >国家强制性产品认证（CCC）证书</a
        >，符合国家强制性产品认证CCC标准。
      </div>
      <!-- <a name="params"></a> -->
      <div class="titleWrap" ref="params">
        <div class="detailTitle">
          <i class="iconfont icon-lengxingmiaobian"></i>
          <p>商品参数</p>
          <span>DETAIL</span>
        </div>
        <div class="dashLine"></div>
      </div>
      <div class="tableWrap">
        <table class="paraTb">
          <tr height="42">
            <td class="title" width="93">屏幕尺寸：</td>
            <td class="value" width="405">6.56英寸</td>
            <td class="title" width="93">机身内存：</td>
            <td class="value" width="405">128G/256G</td>
          </tr>
          <tr height="42">
            <td class="title" width="93">运行内存：</td>
            <td class="value" width="405">8G</td>
            <td class="title" width="93">CPU：</td>
            <td class="value" width="405">骁龙765</td>
          </tr>
          <tr height="42">
            <td class="title" width="93">网络：</td>
            <td class="value" width="405">5G全网通</td>
            <td class="title" width="93">电池容量：</td>
            <td class="value" width="405">4000mAh-4999mAh</td>
          </tr>
          <tr height="42">
            <td class="title" width="93">后摄主摄像素：</td>
            <td class="value" width="405">4800万像素</td>
            <td class="title" width="93">前摄主摄像素：</td>
            <td class="value" width="405">3200万像素</td>
          </tr>
        </table>
        <table class="paraTb hide" :class="isShowTable ? 'isShow' : 'isHide'">
          <tr height="42">
            <td class="title" width="93">功能：</td>
            <td class="value" width="405">指纹识别,5G</td>
            <td class="title" width="93">屏幕类型：</td>
            <td class="value" width="405">平面屏</td>
          </tr>
          <tr height="42">
            <td class="title" width="93">屏幕尺寸：</td>
            <td class="value" width="405">6.56英寸</td>
            <td class="title" width="93">机身内存：</td>
            <td class="value" width="405">128G/256G</td>
          </tr>
          <tr height="42">
            <td class="title" width="93">电信设备进网许可证编号：</td>
            <td class="value" width="405">00-B220-208273</td>
            <td class="title" width="93">机身内存：</td>
            <td class="value" width="405">128G/256G</td>
          </tr>
          <tr height="42">
            <td class="title" width="93">产地：</td>
            <td class="value" width="405">00-B220-208273</td>
            <td class="title" width="93">机身内存：</td>
            <td class="value" width="405">128G/256G</td>
          </tr>
          <tr height="42">
            <td class="title" width="93">屏幕尺寸：</td>
            <td class="value" width="405">6.56英寸</td>
            <td class="title" width="93">商品配件：</td>
            <td class="value" width="405">
              主机*1 耳机*1 数据线*1 充电头*1 保修卡*1 手机保护壳*1 取卡针*1
            </td>
          </tr>
          <tr height="42">
            <td class="title" width="93">屏幕尺寸：</td>
            <td class="value" width="405">6.56英寸</td>
            <td class="title" width="93"></td>
            <td class="value" width="405"></td>
          </tr>
        </table>
        <div class="hideBtn" @click="changeShow" onselectstart="return false">
          <span v-if="isShowTable">收起</span>
          <span v-else>查看更多</span>
          <i
            class="iconfont"
            :class="
              isShowTable
                ? 'icon-Tarrow'
                : 'icon-Icon-KeyboardArrow-Down-Rounded'
            "
          ></i>
        </div>
      </div>
      <!-- <a name="goodShow" ref="a"></a> -->
      <div class="titleWrap" ref="goodShow">
        <div class="detailTitle">
          <i class="iconfont icon-lengxingmiaobian"></i>
          <p>商品展示</p>
          <span>IMAGE</span>
        </div>
        <div class="dashLine"></div>
      </div>
      <div class="imgWrap">
        <img
          width="100%"
          src="../images/0422192c-3a28-4b63-baec-87a1eee40c2e.png"
          alt=""
        />
        <img src="../images/6199d1fd-73a2-4dfb-869e-a00f36e21938.jpg" alt="" />
        <img src="../images/a0ffb8ac-c462-4eba-80e3-1eff56022d20.jpg" alt="" />
        <img src="../images/cdad3523-9fe6-439a-a1d7-077bb100c52b.jpg" alt="" />
        <img width="100%" src="../images/1597801550898.png" alt="" />
      </div>
      <div class="titleWrap">
        <div class="detailTitle">
          <i class="iconfont icon-lengxingmiaobian"></i>
          <p>售后说明</p>
          <span>INSTRUNCTIONS</span>
        </div>
        <div class="dashLine"></div>
      </div>
      <div class="explain">
        温馨提示：手机为特殊商品，快件请亲自签收并当场验货。快递被签收即视为已验货，售出产品100%原装正品，本产品全国联保一年，享受三包服务。手机类产品自收货之日起，提供7天无理由退货、不支持换货（退货需满足手机外观完好无损，手机插卡或连接WIFI即激活，则不支持7天无理由退货）。如因质量问题或故障，凭官方网点质量检测证，享受7天内退货，15天以上在质保期内非人为损坏的质量问题，享受免费保修等三包服务！您可拨打vivo全国客服电话400-678-9688查询当地售后地址持保修卡进行全国联保。重要信息：请会员确认订单时自行勾选发票以便保修，谢谢！
      </div>
      <!-- <a name="comment"></a> -->
      <div class="commentContainer" ref="comment">
        <div class="comHeader">
          <div class="title">全部评价</div>
          <div class="comNavWrap">
            <div class="ratio">
              <p>96.89%</p>
              <span>的用户对商品满意</span>
            </div>
            <div class="comNav">
              <ul>
                <li>
                  <a class="active" href="">全部</a>
                </li>
                <li>
                  <a href="">最新</a>
                </li>
                <li>
                  <a href="">有图 (11)</a>
                </li>
                <li>
                  <a href="">追加 (1)</a>
                </li>
                <li>
                  <a href="">挺好 (111)</a>
                </li>
                <li>
                  <a href="">很喜欢 (1111)</a>
                </li>
                <li>
                  <a href="">有图 (11)</a>
                </li>
                <li>
                  <a href="">追加 (1)</a>
                </li>
                <li>
                  <a href="">挺好 (111)</a>
                </li>
                <li>
                  <a href="">很喜欢 (1111)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="commentCon">
          <div class="user">
            <div class="avatar">
              <img
                src="../images/064ae6cb-2ad2-4706-a0a7-9705958f9ec9.jpg"
                alt=""
              />
            </div>
            <div class="name">
              <span>艹***早</span>
              <p>
                <i class="iconfont icon-huiyuan"></i>
                <span>金卡会员</span>
              </p>
            </div>
          </div>
          <div class="con">
            <div class="time">2021-01-05 14:08:34</div>
            <ul class="conTab">
              <li>拍照好看</li>
              <li>照好看</li>
              <li>好看</li>
            </ul>
            <div class="conMain">
              第一次在网上买手机，是我想要的，目前用着很好，用一段时间再追加
            </div>
            <div class="star">
              <i class="iconfont icon-zan"></i>
              <span>1</span>
            </div>
          </div>
        </div>
        <div class="commentCon">
          <div class="user">
            <div class="avatar">
              <img
                src="../images/064ae6cb-2ad2-4706-a0a7-9705958f9ec9.jpg"
                alt=""
              />
            </div>
            <div class="name">
              <span>艹***早</span>
              <p>
                <i class="iconfont icon-huiyuan"></i>
                <span>金卡会员</span>
              </p>
            </div>
          </div>
          <div class="con">
            <div class="time">2021-01-05 14:08:34</div>
            <ul class="conTab">
              <li>拍照好看</li>
              <li>照好看</li>
              <li>好看</li>
            </ul>
            <div class="conMain">
              第一次在网上买手机，是我想要的，目前用着很好，用一段时间再追加
            </div>
            <div class="star">
              <i class="iconfont icon-zan"></i>
              <span>1</span>
            </div>
          </div>
        </div>
        <div class="commentCon">
          <div class="user">
            <div class="avatar">
              <img
                src="../images/064ae6cb-2ad2-4706-a0a7-9705958f9ec9.jpg"
                alt=""
              />
            </div>
            <div class="name">
              <span>艹***早</span>
              <p>
                <i class="iconfont icon-huiyuan"></i>
                <span>金卡会员</span>
              </p>
            </div>
          </div>
          <div class="con">
            <div class="time">2021-01-05 14:08:34</div>
            <ul class="conTab">
              <li>拍照好看</li>
              <li>照好看</li>
              <li>好看</li>
            </ul>
            <div class="conMain">
              第一次在网上买手机，是我想要的，目前用着很好，用一段时间再追加
            </div>
            <div class="star">
              <i class="iconfont icon-zan"></i>
              <span>1</span>
            </div>
          </div>
        </div>
        <div class="commentCon">
          <div class="user">
            <div class="avatar">
              <img
                src="../images/064ae6cb-2ad2-4706-a0a7-9705958f9ec9.jpg"
                alt=""
              />
            </div>
            <div class="name">
              <span>艹***早</span>
              <p>
                <i class="iconfont icon-huiyuan"></i>
                <span>金卡会员</span>
              </p>
            </div>
          </div>
          <div class="con">
            <div class="time">2021-01-05 14:08:34</div>
            <ul class="conTab">
              <li>拍照好看</li>
              <li>照好看</li>
              <li>好看</li>
            </ul>
            <div class="conMain">
              第一次在网上买手机，是我想要的，目前用着很好，用一段时间再追加
            </div>
            <div class="star">
              <i class="iconfont icon-zan"></i>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottom",
  data() {
    return {
      isShowTable: false,
      isSticky: false,
      activePlace: "params",
    };
  },
  props: ["price"],
  methods: {
    throttle() {
      let lastTime = 0;
      return ()=>{
        let nowTime = Date.now();

        if (nowTime - lastTime < 200) {
          return;
        }

        this.changeNav();

        lastTime = nowTime;
      };
    },
    changeShow() {
      this.isShowTable = !this.isShowTable;
    },
    changeNav() {
      console.log(111);
      if (this.$refs.detailNav.getBoundingClientRect().top === 0) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
      const placeArr = ["params", "goodShow", "comment"];
      placeArr.forEach((item) => {
        if (this.$refs[item].getBoundingClientRect().top <= 40) {
          this.activePlace = item;
        }
      });
    },
    scrollTo(place) {
      this.$refs[place].scrollIntoView(true);
      this.activePlace = place;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.throttle());
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.throttle());
  },
};
</script>

<style lang="less" scoped>
.detailBottom {
  width: 100%;
}
.bottomContainer {
  width: 1000px;
  margin: 60px auto;
}
.detailNav {
  width: 1000px;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  display: flex;
  border: 1px solid #e7e7e7;
  border-bottom: 3px solid #000;
  border-left: none;
  background-color: #fff;
  position: sticky;
  top: 0;
  li {
    a {
      display: inline-block;
      height: 100%;
      padding: 0 15px;
      font-size: 14px;
      color: #333;
      border-left: 1px solid #e7e7e7;
      cursor: pointer;
      &:hover {
        text-decoration: none;
      }
    }
    &.active {
      border-bottom: 3px solid #f10180;
      margin-bottom: -3px;
      a {
        color: #f10180;
      }
    }
  }
  &.sticky {
    width: 100%;
    height: 45px;
    line-height: 45px;
    padding: 0 173px;
    z-index: 999;
  }
}
.addShopcartWrap {
  display: flex;
  position: absolute;
  top: -1px;
  right: 173px;
  span {
    padding: 0 20px;
    font-size: 26px;
    color: #f43499;
  }
}
.addShopcart {
  display: flex;
  background-color: #f10180;
  color: #fff;
  font-size: 18px;
  padding: 0 20px;
  p {
    padding-left: 10px;
  }
}
.certificate {
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 10px 0 20px;
  .iconfont {
    font-size: 18px;
    font-weight: bold;
    margin-right: 5px;
    margin-left: 2px;
  }
  a {
    color: #1d94d1;
    text-decoration: underline;
  }
}
.detailTitle {
  height: 31px;
  line-height: 31px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #f10180;
  .iconfont {
    font-size: 14px;
    font-weight: bold;
    margin-right: 5px;
  }
  span {
    color: #999;
    margin-left: 5px;
  }
}
.dashLine {
  height: 5px;
  background-image: url("//shop.vipstatic.com/img/detail/detial_line-hash-73c7b229.png?f06a5522");
}
.tableWrap {
  padding: 20px 0 40px;
}
.paraTb {
  margin-top: -1px;
  td {
    border: 1px solid #ededed;
    font-size: 14px;
  }
  .title {
    text-align: right;
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-right: 1px solid #ededed;
    font-weight: bold;
    color: #666;
  }
  .value {
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    color: #999;
  }
  &.isHide {
    display: none;
  }
  &.isShow {
    display: table;
  }
}
.hideBtn {
  height: 41px;
  line-height: 41px;
  border: 1px solid #ededed;
  border-top: none;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
.imgWrap {
  text-align: center;
  margin-bottom: 20px;
}
.explain {
  padding: 20px 0 40px;
  font-size: 14px;
  line-height: 21px;
  color: #333;
}
.commentContainer {
  .title {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    background-color: #eae8eb;
    padding-left: 15px;
    box-sizing: border-box;
  }
}
.comHeader {
  border: solid 1px #e5e5e5;
}
.comNavWrap {
  display: flex;
  align-items: center;
  background-color: #fafafa;
  .ratio {
    padding: 6px 35px;
    margin: 30px 0;
    box-sizing: border-box;
    text-align: center;
    border-right: 1px solid #e5e5e5;
    p {
      font-size: 50px;
      color: #de327f;
    }
    span {
      font-size: 14px;
    }
  }
}
.comNav {
  width: 615px;
  margin: 0 auto;
  padding: 35px 0;
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    padding: 7px 0 5px;
    margin: 0 10px 10px 0;
  }
  a {
    padding: 7px 12px 5px;
    border: solid 1px #cbcbcb;
    background-color: #fff;
    border-radius: 3px;
    &:hover {
      text-decoration: none;
      border: 1px solid rgb(245, 86, 144);
    }
    &.active {
      background-color: #f10180;
      border: 1px solid rgb(245, 86, 144);
      color: #fff !important;
    }
  }
}
.commentCon {
  display: flex;
  align-items: flex-start;
  border-bottom: #ededed 1px solid;
  .user {
    width: 235px;
    padding: 30px 0 30px 20px;
    display: flex;
    align-items: center;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    span {
      line-height: 18px;
    }
    .iconfont {
      color: #f8b536;
    }
  }
  .con {
    padding: 30px 0;
  }
  .time {
    color: #6f6f6f;
    line-height: 18px;
  }
}
.conTab {
  display: flex;
  li {
    padding: 4px 12px;
    border: 1px solid #dee2ea;
    background-color: #f3f7fe;
    margin-right: 10px;
  }
}
.conMain {
  color: #666;
  margin: 20px 0 30px;
  height: 21px;
  line-height: 21px;
}
.star {
  width: 630px;
  text-align: right;
  line-height: 26px;
  position: relative;
  .iconfont {
    font-size: 18px;
    color: #e780b1;
    cursor: pointer;
    position: absolute;
    right: 7px;
  }
  span {
    cursor: pointer;
  }
}
</style>
