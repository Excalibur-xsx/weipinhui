<template>
  <div>
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
        <div class="sortType active">
          <p>综合</p>
        </div>
        <div class="sortType">
          <p>价格</p>
          <i></i>
        </div>
        <div class="sortType">
          <p>折扣</p>
          <i></i>
        </div>
        <div class="sortType">
          <p>销量</p>
        </div>
        <div class="priceArae priceActive">
          <span class="startPrice">
            <input type="text" placeholder="￥" />
          </span>
          <i>-</i>
          <span class="endPrice">
            <input type="text" placeholder="￥" />
          </span>
          <button class="success">确定</button>
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
        <div
          class="product"
          v-for="goods in productList.goodsList"
          :key="goods.id"
        >
          <img :src="goods.defaultImg" />
          <div class="priceContainer">
            <div class="special">
              <span>特卖价</span>
            </div>
            <div class="price">
              <span>￥{{ goods.price }}</span>
            </div>
            <div class="discount">
              <span>￥{{ goods.price - 100 }}</span>
              <span>1.5折</span>
            </div>
          </div>
          <h3 class="ProductTitle">
            {{ goods.title }}
          </h3>
        </div>
      </div>
      <!-- 分页器 -->
      <div class="paginationContainer">
        <Pagination
          :total="productList.totalPages"
          :pageSize="5"
          :currentPage="options.pageNo"
          @currentChange="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Option from "./Option";
import Pagination from "../../components/Pagination";
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
        pageSize: 10, //每页显示几个
        props: [], //属性选项
        trademark: "", //品牌
      },
    };
  },
  computed: {
    ...mapState({
      productList: (state) => state.search.productList,
    }),
  },
  methods: {
    ...mapActions(["getSearchList"]),
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
    updataProductList(pageNo = 1) {
      let options = { ...this.options, pageNo };
      this.options = options;
      this.getSearchList(options);
    },
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
  margin-top: 300px;
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
      border: 1px solid #ccc;
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
  .product {
    width: 218px;
    height: 340px;
    border: 1px solid #ccc;
    padding: 2px;
    margin: 5px;
    img {
      width: 216px;
      height: 218px;
    }
    .priceContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      .special {
        background-color: #ff31a3;
        color: #fff;
        padding: 2px;
        border-radius: 10px;
        flex-shrink: 0;
      }
      .price {
        font-size: 22px;
        font-weight: bold;
      }
      .discount {
        color: #999;
        font-size: 14px;
        overflow: hidden;
        :nth-child(1) {
          margin: 0 3px;
          text-decoration: line-through;
        }
      }
    }
    .ProductTitle {
      color: #666;
      margin-top: 10px;
      padding: 0 5px;
      font-weight: inherit;
      font-size: 12px;
      //设置文本两行超出隐藏...
      display: -webkit-box; //开启webkit内核的盒模型
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical; //设置子元素对齐方式
      -webkit-line-clamp: 2; //设置为2行文本溢出隐藏
    }
  }
  .product:hover {
    border: 1px solid #ff31a3;
  }
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
