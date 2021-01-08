<template>
  <div v-wechat-title="$route.meta.title">
    <div class="productContainer">
      <!-- 当前搜索内容 -->
      <ul class="nav">
        <li class="item">
          <span>全部结果</span>
          <span class="tag">></span>
        </li>
        <li class="item" v-if="options.trademark">
          <span class="border">
            品牌:
            <span>{{ options.trademark }}</span>
            <span>
              <a @click="delTrademark">X</a>
            </span>
          </span>
          <span class="tag">></span>
        </li>
        <li
          class="item"
          :v-if="options.props"
          v-for="(prop, index) in options.props"
          :key="prop"
        >
          <span class="border">
            {{ prop.split(":")[2] }}:
            <span>{{ prop.split(":")[1] }}</span>
            <span>
              <a @click="delAttrValue(index)">X</a>
            </span>
          </span>
          <span class="tag">></span>
        </li>
        <li class="item">
          <span class="categoryName">{{ options.keyword }}</span>
        </li>
      </ul>
      <Option :addTrademark="addTrademark" :addAttrs="addAttrs" />
      <!-- 排序bar -->
      <div class="sortContainer">
        <div
          :class="{ sortType: true, active: isSynthesis }"
          @click="sort('1')"
        >
          <p>综合</p>
        </div>
        <div
          :class="{ sortType: true, active: isPriceSort }"
          @click="sort('2')"
        >
          <p>价格</p>
          <!-- icon-paixu-1 降序   -->
          <!-- icon-sort-small-copy-copy 升序 -->
          <i
            :class="{
              iconfont: true,
              'icon-paixu-1': isdDscending && isPriceSort,
              'icon-sort-small-copy-copy': !isdDscending && isPriceSort,
            }"
          ></i>
        </div>
        <div class="sortType">
          <p>折扣</p>
          <i></i>
        </div>
        <div class="sortType">
          <p>销量</p>
        </div>
        <div :class="{ priceArae: true, priceActive: isPriceActive }">
          <span class="startPrice">
            <input
              type="text"
              placeholder="￥"
              @focus="isPriceActive = true"
              @blur="isPriceActive = false"
            />
          </span>
          <i>-</i>
          <span class="endPrice">
            <input
              type="text"
              placeholder="￥"
              @focus="isPriceActive = true"
              @blur="isPriceActive = false"
            />
          </span>
          <button class="success" v-if="isPriceActive">确定</button>
        </div>
        <div class="paging">
          <span class="current">{{ options.pageNo }}</span
          >/
          <span>{{ productList.totalPages }}</span>
          <el-button
            :disabled="options.pageNo > 1 ? false : ''"
            @click="nextPage(-1)"
            >&lt;</el-button
          >
          <el-button @click="nextPage(1)">下一页></el-button>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="productList">
        <!-- 虚拟长列表的使用 -->
        <!-- <virtual-list
          :style="{ height: '360px', width: '100%', 'overflow-y': 'auto' }"
          :size="120"
          :remain="3"
          :data-key="'id'"
          :data-sources="productList.goodsList"
          :data-component="itemComponent"
        > -->
          <!-- 单个商品 -->
          <Product
            v-for="goods in productList.goodsList"
            :key="goods.id"
            :goods="goods"
          />
        <!-- </virtual-list> -->
      </div>
      <!-- 分页器 -->
      <div class="paginationContainer">
        <Pagination
          :total="productList.total"
          :pageSize="options.pageSize"
          :currentPage="options.pageNo"
          @currentChange="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import VirtualList from "vue-virtual-scroll-list";
import Option from "./Option";
import Pagination from "../../components/Pagination";
import Product from "./Product";
import { mapActions, mapState } from "vuex";
export default {
  name: "SearchList",
  data() {
    return {
      options: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "", //类别名称
        keyword: "", //搜索关键字
        order: "1:desc", //1代表是综合排序，desc代表升序
        pageNo: 1, //第一页
        pageSize: 100, //每页显示几个
        props: [], //属性选项
        trademark: "", //品牌
      },
      // itemComponent: Product,
      //价格区间排序区域的选中样式
      isPriceActive: false,
      //是否是综合
      isSynthesis: true,
      //是否是价格排序
      isPriceSort: false,
      //是否是价格排序的降序
      isdDscending: true,
    };
  },
  computed: {
    ...mapState({
      productList: (state) => state.search.productList,
    }),
  },
  methods: {
    ...mapActions(["getSearchList"]),
    //排序
    sort(type) {
      let [orderNum, orderType] = this.options.order.split(":");
      //不是第一次点击
      if (type === orderNum) {
        if (type === "2") {
          this.isPriceSort = true;
          this.isdDscending = !this.isdDscending;
          this.isSynthesis = false;
          orderType = orderType === "desc" ? "asc" : "desc";
        } else {
          this.isSynthesis = true;
          orderType = "desc";
        }

        //第一次点击
      } else {
        this.isSynthesis = true;
        this.isPriceSort = false;
        if (type === "2") {
          this.isPriceSort = true;
          this.isdDscending = true;
          this.isSynthesis = false;
        }
        orderType = "desc";
      }
      this.options.order = `${type}:${orderType}`;
      this.updataProductList();
    },
    //下一页
    nextPage(type) {
      if (this.options.pageNo >= this.productList.totalPages) {
        return;
      }
      if (this.options.pageNo < 1) {
        return;
      }

      let pageNo = this.options.pageNo + type;
      this.updataProductList(pageNo);
      this.options.pageNo = pageNo;
    },
    //重新请求列表
    updataProductList(pageNo = 1) {
      let options = { ...this.options, pageNo };
      this.options = options;
      this.getSearchList(options);
    },
    //页面发生改变
    handleCurrentChange(pageNo) {
      this.updataProductList(pageNo);
    },
    //添加搜索品牌
    addTrademark(trademarkName) {
      this.options.trademark = trademarkName;
      this.updataProductList();
    },
    //剔除搜索品牌
    delTrademark() {
      this.options.trademark = "";
      this.updataProductList();
    },
    //添加搜索属性
    addAttrs(option) {
      if (this.options.props.indexOf(option) > -1) return;
      this.options.props.push(option);
      this.updataProductList();
    },
    //剔除搜索属性
    delAttrValue(index) {
      this.options.props.splice(index, 1);
      this.updataProductList();
    },
  },
  mounted() {
    this.updataProductList();
  },
  components: {
    Option,
    Pagination,
    Product,
    // "virtual-list": VirtualList,
  },
};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  align-items: center;
  height: 41px;
  .item {
    font-size: 12px;
    color: #666;
    .border {
      padding: 6px;
      padding-right: 0;
      border: 1px solid #999;
      border-radius: 3px;
      :nth-child(1) {
        padding: 0 5px;
        color: #f10180;
      }
      :nth-child(2) {
        padding: 7px;
        a {
          font-weight: bold;
          color: #999;
        }
      }
    }
    .border:hover {
      padding: 6px;
      padding-right: 0;
      border: 1px solid #f10180;
      border-radius: 3px;
      :nth-child(1) {
        padding: 0 5px;
        color: #f10180;
      }
      :nth-child(2) {
        padding: 7px;
        background-color: #f10180;
        a {
          font-weight: bold;
          color: #fff;
        }
      }
    }
    .tag {
      padding: 0 8px;
      font-size: 17px;
      font-weight: 100;
      color: #999;
    }
    .categoryName {
      font-weight: bold;
    }
  }
}
.productContainer {
  width: 1170px;
  margin: 0 auto;
  .sortContainer {
    margin-top: 10px;
    display: flex;
    background-color: #eee;
    .sortType {
      width: 70px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-right: 1px solid #ccc;
      cursor: pointer;
      position: relative;
      i {
        top: 0;
        position: absolute;
        display: inline-block;
        width: 20px;
        height: 20px;
        right: 3px;
        font-size: 20px;
        color: #ff31a3;
      }
    }
    .active {
      border: 1px solid #f10180;
      background-color: #fff;
      color: #f10180;
    }
    .priceArae {
      padding: 0 5px;
      height: 40px;
      line-height: 40px;
      i {
        margin: 5px;
      }
      span input {
        width: 50px;
        border: 1px solid #ccc;
        outline: none;
        padding-left: 3px;
      }
      .success {
        outline: none;
        cursor: pointer;
        border: 0;
        background-color: #f10180;
        border-radius: 3px;
        color: #fff;
        padding: 0 3px;
        margin-left: 10px;
      }
    }
    .priceActive {
      // border: 1px solid #ccc;
      background-color: #fff;
      color: #f10180;
    }
    .paging {
      height: 40px;
      line-height: 40px;
      text-align: right;
      flex-grow: 1;
      margin-right: 5px;
      .current {
        color: #f10180;
      }
      button {
        border: 1px solid #ccc;
        background-color: #fff;
        border-radius: 3px;
        padding: 5px;
        margin-left: 10px;
      }
    }
  }
}
.productList {
  width: 100%;
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;
}
.pagination {
  margin: 0 auto;
}
.paginationContainer {
  width: 100%;
  .pagination {
    width: 500px;
    margin: 0 auto;
  }
}
</style>
