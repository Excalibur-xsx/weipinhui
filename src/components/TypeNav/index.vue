<template>
  <div class="type-nav">
    <div class="container fix" @mouseleave="isShowCategory = false">
      <h2 class="all" @mouseenter="isShowCategory = true">
        <i class="iconfont icon-mianbaoxie"></i>商品分类
      </h2>
      <nav class="nav">
        <a href="###" class="first">首页</a>
        <a href="###">3折疯抢</a>
        <a href="###">唯品快抢</a>
        <a href="###">唯品奥莱</a>
        <a href="###">品牌清仓</a>
        <a href="###">女装</a>
        <a href="###">母婴</a>
        <a href="###">家电</a>
        <a href="###">美妆</a>
        <a href="###">鞋包</a>
        <a href="###">更多</a>
      </nav>
      <transition name="search">
        <div class="sort" v-show="isShowCategory">
          <div class="all-sort-list2">
            <div
              class="item bo"
              v-for="category in categoryList"
              :key="category.categoryId"
            >
              <h3>
                <a href="###">{{ category.categoryName }}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="child in category.categoryChild"
                    :key="child.categoryId"
                  >
                    <dt>
                      <a href="###">{{ child.categoryName }}</a>
                    </dt>
                    <dd>
                      <em
                        v-for="item in child.categoryChild"
                        :key="item.categoryId"
                      >
                        <a href="###">{{ item.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="brandContainer">
                <div class="brand">
                  <div class="recommend">品牌推荐</div>
                  <div class="detail">
                    <img src="../NavHeader/images/logo.png" alt="" />
                  </div>
                  <div class="detail">
                    <img src="../NavHeader/images/logo.png" alt="" />
                  </div>
                  <div class="detail">
                    <img src="../NavHeader/images/logo.png" alt="" />
                  </div>
                  <div class="detail">
                    <img src="../NavHeader/images/logo.png" alt="" />
                  </div>
                  <div class="detail">
                    <img src="../NavHeader/images/logo.png" alt="" />
                  </div>
                  <div class="detail">
                    <img src="../NavHeader/images/logo.png" alt="" />
                  </div>
                  <div class="detail">
                    <img src="../NavHeader/images/logo.png" alt="" />
                  </div>
                  <div class="detail">
                    <img src="../NavHeader/images/logo.png" alt="" />
                  </div>
                  <div class="detail">
                    <img src="../NavHeader/images/logo.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {
      isShowCategory: false,
    };
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList.slice(0, 11),
    }),
  },
  methods: {
    ...mapActions(["getBaseCategoryList"]),
  },
  mounted() {
    this.getBaseCategoryList();
    console.log(this);
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  .container {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    position: relative;
    .all {
      background-color: #f10180;
      width: 156px;
      height: auto;
      margin-right: 20px;
      line-height: 43px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      .iconfont {
        vertical-align: middle;
        margin-top: -3px;
        margin-right: 6px;
        font-size: 28px;
      }
    }
    .nav {
      .first {
        color: #f10180;
        font-weight: 500;
      }
      a {
        height: 43px;
        padding: 0 10px;
        line-height: 43px;
        font-size: 16px;
        white-space: nowrap;
      }
    }
    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 156px;
      height: 495px;
      position: absolute;
      background: #f10180;
      z-index: 999;
      // 控制显示隐藏过渡效果
      &.search-enter-active {
        transition: height 0.5s;
        overflow: hidden;
      }
      &.search-enter {
        height: 0px;
      }
      .all-sort-list2 {
        color: #fff;
        &:hover .item-list .subitem {
          display: block;
        }
        .item {
          h3 {
            // width: 156px;
            line-height: 45px;
            font-size: 12px;
            font-weight: 400;
            overflow: hidden;
            padding-left: 20px;
            a {
              color: #fff;
            }
            &:hover {
              background-color: #fff;
              a {
                color: #f10180;
              }
            }
          }
          .item-list {
            display: none;
            float: left;
            width: 519px;
            padding: 16px 40px 16px 40px;
            border-top: 1px solid #eee;
            position: absolute;
            height: 495px;
            background: #ffffff;
            left: 156px;
            top: 0;
            z-index: 9999 !important;
            .subitem {
              position: absolute;
              dl {
                margin-bottom: 24px;
                position: relative;
                font-size: 12px;
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;
                &.fore {
                  border-top: 0;
                }
                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                  line-height: 22px;
                  left: 0;
                  width: 83px;
                  color: #222;
                  overflow: hidden;
                }
                dd {
                  width: 425px;
                  margin-left: 95px;
                  overflow: hidden;
                  *zoom: 1;
                  word-break: keep-all;
                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                  }
                }
              }
            }
          }
          &:hover {
            .item-list {
              display: block;
            }
            .brandContainer {
              display: block;
            }
          }
        }
      }
      .brandContainer {
        display: none;
        background-color: #f5f5f5;
        width: 213px;
        height: 463px;
        padding: 16px;
        position: absolute;
        top: 0;
        left: 754px;
        .recommend {
          font-size: 12px;
          color: #222;
          line-height: 21px;
          margin-bottom: 28px;
        }
        .detail {
          width: 68px;
          height: 68px;
          display: inline-block;
          background: #fff;
          margin-top: -12px;
          img {
            display: block;
            width: 68px;
            height: 68px;
            position: relative;
          }
        }
      }
    }
  }
}
</style>
