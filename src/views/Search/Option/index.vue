<template>
  <div>
    <!-- 搜索的选项 -->
    <div class="optionContainer" :style="{ height: isMore ? '333px' : '100%' }">
      <div class="barContainer dashed">
        <h3>唯品服务</h3>
        <div class="barContent">
          <a>超值优惠</a>
          <a>新货</a>
          <a>专柜同步</a>
        </div>
        <div class="right">
          <button class="multiple">
            <span>+</span>
            <span>多选</span>
          </button>
        </div>
      </div>
      <div class="barContainer dashed" v-if="trademarkList.length">
        <h3>品牌</h3>
        <div class="trandemark">
          <a
            v-for="trademark in trademarkList"
            :key="trademark.tmId"
            @click="addTrademark(`${trademark.tmId}:${trademark.tmName}`)"
          >
            <div class="logoName">{{ trademark.tmName }}</div>
          </a>
        </div>
        <div class="right">
          <button class="more">
            <span>更多</span>
            <span>↓</span>
          </button>
          <button class="multiple">
            <span>+</span>
            <span>多选</span>
          </button>
        </div>
      </div>
      <div
        class="barContainer dashed"
        v-for="attr in attrsList"
        :key="attr.attrId"
      >
        <h3>{{ attr.attrName }}</h3>
        <div class="barContent">
          <a
            v-for="value in attr.attrValueList"
            :key="value"
            @click="addAttrs(`${attr.attrId}:${value}:${attr.attrName}`)"
            >{{ value }}</a
          >
        </div>
        <div class="right">
          <button class="multiple">
            <span>+</span>
            <span>多选</span>
          </button>
        </div>
      </div>
    </div>
    <!-- 更多选项 -->
    <div class="optionsMore">
      <button v-if="isMore" @click="moreOptions('show')">更多选项</button>
      <button v-else @click="moreOptions('hidden')">点击收起</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Option",
  props: {
    addTrademark: Function,
    addAttrs: Function,
  },
  data() {
    return {
      moreAttrs: this.attrsList,
      isMore: true,
    };
  },
  computed: {
    ...mapGetters(["trademarkList", "attrsList"]),
  },
  methods: {
    moreOptions(type) {
      if (type === "show") {
        this.isMore = false;
      }
      if (type === "hidden") {
        this.isMore = true;
      }
    },
    addSearchAttrName() {},
  },
};
</script>

<style lang="less" scoped>
.optionContainer {
  margin-top: 10px;
  width: 100%;
  border: 1px solid #ccc;
  height: 500px;
  overflow: hidden;
  .dashed {
    border-bottom: 1px dashed#ccc;
  }
  .barContainer {
    display: flex;
    align-items: center;

    h3 {
      font-weight: inherit;
      padding: 15px 0 15px 15px;
      width: 118px;
      flex-shrink: 0;
    }
    .barContent {
      flex-grow: 1;
      a {
        display: inline-block;
        cursor: pointer;
        margin-right: 20px;
      }
      a:hover {
        color: #f10180;
      }
    }
    .trandemark {
      flex-grow: 1;
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
      a {
        width: 98px;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
        .logoName {
          padding: 10px;
          margin: 15px 0;
          width: 75px;
          height: 40px;
          border: 1px solid #ccc;
          text-align: center;
          line-height: 40px;
          color: #f10180;
          font-size: 12px;
        }
      }
      a:hover .logoName {
        border: 1px solid #f10180;
        font-weight: bold;
      }
    }
    .right {
      display: flex;
      flex-shrink: 0;
      button {
        width: 50px;
        margin-right: 10px;
        outline: none;
        font-size: 15px;
        cursor: pointer;
        background-color: #fff;
        color: #666;
      }
      .more {
        border: 0;
      }
      .multiple {
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }
  }
}
.optionsMore {
  width: 100%;
  text-align: center;
  button {
    margin: 0 auto;
    width: 100px;
    outline: none;
    border: 1px solid #ccc;
    border-top: 0;
    font-size: 15px;
    cursor: pointer;
    background-color: #fff;
    margin-top: -1px;
    color: #666;
  }
}
.cat-oper-topbar {
  width: 1170px;
  position: fixed;
  top: 0;
}
</style>
