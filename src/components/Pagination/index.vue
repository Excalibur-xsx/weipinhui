<template>
  <div class="pagination">
    <span>共:{{ Math.ceil(total / pageSize) }}页</span>
    <button
      @click="setCurrentPage(myCurrentPage - 1)"
      :disabled="myCurrentPage <= 1"
    >
      &lt;
    </button>
    <button @click="setCurrentPage(1)" :class="{ active: myCurrentPage === 1 }">
      1
    </button>
    <button v-show="startEnd.start > 2">...</button>
    <button
      v-for="item in mapBtnsCount"
      :key="item"
      @click="setCurrentPage(startEnd.start + item - 1)"
      :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
    >
      {{ startEnd.start + item - 1 }}
    </button>
    <button v-show="startEnd.end < totalPages - 1">...</button>
    <button
      v-show="totalPages > 1"
      @click="setCurrentPage(totalPages)"
      :class="{ active: myCurrentPage === totalPages }"
    >
      {{ totalPages }}
    </button>
    <button
      @click="setCurrentPage(myCurrentPage + 1)"
      :disabled="myCurrentPage >= totalPages"
    >
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      //为了方便修改当前页数，因为props中的数据尽量做到只读的，所有存一份在data
      myCurrentPage: this.currentPage,
    };
  },
  props: {
    //展示页码按钮的数量
    pagerCount: {
      type: Number,
      validator(val) {
        //展示页码的数量必须大于3,并且小于21，且是奇数
        return val >= 3 && val <= 21 && val % 2 === 1;
      },
      default: 7,
    },
    //每页展示多少个
    pageSize: {
      type: Number,
      default: 10,
    },
    //当前在第几页
    currentPage: {
      type: Number,
      default: 1,
    },
    //条目总数量
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    //计算总页数
    totalPages() {
      //  总数量 ÷ 每页展示多少个
      return Math.ceil(this.total / this.pageSize);
    },
    //计算除中间遍历的按钮的，开始的按钮，和结束的按钮
    startEnd() {
      //拿到要参与计算的值，  当前是第几页，展示页码按钮的数量，总页数
      const { myCurrentPage, pagerCount, totalPages } = this;
      // 中间要遍历的按钮数量 (排除开头和结束按钮)
      const count = pagerCount - 2;
      // 取要遍历的按钮的数量的一半，向下取整
      const halfCount = Math.floor(count / 2);

      //定义第一个遍历的按钮位置的，和最后一个遍历按钮的位置 （排除最开头的第一页，和最后一页）
      let start, end;

      /**
       * 当到当前点击的按钮页数大于等于 用（总页数 - 遍历按钮数量的一半）会少一个，所以要另外处理
       * 5 6 7 8 [9]
       * 如： [9]当前点击的页数是 9  如果用:myCurrentPage(9) - halfCount(2) --> 6 错误
       * 处理： 总页数 - 总共要遍历按钮的数量
       */
      if (myCurrentPage >= totalPages - halfCount) {
        //start(5) = 10(总页数) - 5(要遍历的按钮的数量)
        start = totalPages - count;
      } else {
        /**
         * [3]当前点击的页数是 3
         * 2 [3] 4 5 6
         * (正常情况下)start = 3(当前当前点击的页数) - 2(要遍历的按钮的数量的一半)
         * start = 1
         */
        start = myCurrentPage - halfCount;
      }

      //只要start小于等于1 则直接将start赋值为 2
      if (start <= 1) {
        start = 2;
      }

      /**
       * 正常情况下  end = 开始遍历的按钮的位置 + 要遍历按钮的总数量 - 1
       * 3 4 [5] 6 7      start(3) + count(5) - 1  =  7
       */
      end = start + count - 1;

      /**
       * 当end 大于总等于页数的的时候 end(6) = start(2) + count(5) - 1 结束位置为6错误
       * 1 [2] 3
       * 处理：只要end大于等于总页数则会把（end设置为总页数 - 1），因为总页数的最后一页固定写死，不需要遍历生成
       */
      if (end >= totalPages) {
        end = totalPages - 1;
      }
      return {
        start,
        end,
      };
    },
    // 需要遍历的按钮数量
    mapBtnsCount() {
      const { start, end } = this.startEnd;
      // 要遍历的次数 = end（遍历按钮结束的位置）  - start（遍历按钮开始的位置） + 1
      const count = end - start + 1;
      //如果一个元素都没有，那么count的值会为负数，就要把count设为0，就不会遍历
      return count >= 1 ? count : 0;
    },
  },
  methods: {
    setCurrentPage(val) {
      this.myCurrentPage = val;
    },
  },
  watch: {
    //监听当前页数的变化的，一但发生改变就会触发事件，发起请求
    myCurrentPage(myCurrentPage) {
      this.$emit("currentChange", myCurrentPage);
    },

    /**
     * 因为的data属性，只会赋值一次的，所有当currentPage传递过来的值再次发生变化的时候没办法给myCurrentPage重新赋值
     * 所以监听currentPage传递过来的值，如果发生改变则给data中的 myCurrentPage重新赋值
     * */
    currentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  align-items: center;
  button {
    width: 40px;
    height: 40px;
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 40px;
    line-height: 40px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid transparent;
    outline: none;
    display: block;
    background-color: #fff;
    border: 1px solid #ccc;
    color: #606266;
    border-radius: 5px;
  }
}
button:hover {
  border: 1px solid #f10180;
  background-color: #eee;
}
button.active {
  background-color: #f10180;
  color: #fff;
}
</style>
