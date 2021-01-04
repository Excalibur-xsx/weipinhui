<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all"><i class="iconfont icon-mianbaoxie"></i>商品分类</h2>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "",
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
      }
    }
    .nav {
      .first{
        color: #f10180;
        font-weight:500;
      }
      a {
        height: 43px;
        padding: 0 10px;
        line-height: 43px;
        font-size: 16px;
        color: #333;
        white-space: nowrap;
      }
    }
    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
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
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;
            a {
              color: #333;
            }
          }
          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;
            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;
              dl {
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
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }
                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;
                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
