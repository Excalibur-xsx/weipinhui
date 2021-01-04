<template>
  <div class="contentContainer">
    <!-- 当前搜索内容 -->
    <ul class="nav">
      <li class="item">
        <span>全部结果</span>
        <span class="tag">></span>
      </li>
      <li class="item">
        <span class="border">
          品牌:
          <span>天意美</span>
          <span>
            <a>X</a>
          </span>
        </span>
        <span class="tag">></span>
      </li>
      <li class="item">
        <span class="categoryName">女鞋</span>
      </li>
    </ul>
    <!-- 搜索的选项 -->
    <div class="optionContainer">
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
      <div class="barContainer dashed">
        <h3>品牌</h3>
        <div class="barContent">
          <a
            ><img
              v-if="true"
              src="//a.vpimg2.com/upload/brandcool/0/835f65a7efac4ddd8dfc361704099bd0/10000246/primary.png"
            />
            <div v-else class="logoName">宝格丽</div>
          </a>
          <a
            ><img
              v-if="true"
              src="//a.vpimg2.com/upload/brandcool/0/b4331f2ad75c4046bb6cc94077360984/10026338/primary.png"
            />
            <div v-else class="logoName">宝格丽</div>
          </a>
          <a
            ><img
              v-if="true"
              src="//a.vpimg2.com/upload/brandcool/0/04711cfb719443b3b28eb5ad36d39197/10026339/primary.png"
            />
            <div v-else class="logoName">宝格丽</div>
          </a>
          <a
            ><img
              v-if="true"
              src="//a.vpimg2.com/upload/brandcool/0/835f65a7efac4ddd8dfc361704099bd0/10000246/primary.png"
            />
            <div v-else class="logoName">宝格丽</div>
          </a>
          <a
            ><img
              v-if="true"
              src="//a.vpimg2.com/upload/brandcool/0/835f65a7efac4ddd8dfc361704099bd0/10000246/primary.png"
            />
            <div v-else class="logoName">宝格丽</div>
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
      <div class="barContainer dashed">
        <h3>尺码</h3>
        <div class="barContent">
          <a>女鞋</a>
          <a>运动鞋</a>
          <a>防雨防晒用品</a>
          <a>个人居家用品</a>
          <a>冰雪运动</a>
        </div>
        <div class="right">
          <button class="multiple">
            <span>+</span>
            <span>多选</span>
          </button>
        </div>
      </div>
      <div class="barContainer">
        <h3>尺码</h3>
        <div class="barContent">
          <a>26</a>
          <a>27</a>
          <a>28</a>
          <a>29</a>
          <a>30</a>
          <a>31</a>
          <a>32</a>
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
    </div>
    <!-- 搜索的结果 -->
    <div class="optionsMore">
      <button v-if="true">更多选项</button>
      <button v-else>点击收起</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Option",
};
</script>

<style lang="less" scoped>
.contentContainer {
  width: 1170px;
  margin: 0 auto;
  margin-top: 300px;
}
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
.optionContainer {
  margin-top: 10px;
  width: 100%;
  border: 1px solid #ccc;
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
    }
    .barContent {
      flex-grow: 1;
      a {
        display: inline-block;
        margin-right: 56px;
        cursor: pointer;
        img {
          padding: 10px;
          margin: 15px 0;
          margin-left: -56px;
          width: 80px;
          height: 40px;
          border: 1px solid #ccc;
          border-right: 0;
        }
        .logoName {
          padding: 10px;
          margin: 15px 0;
          margin-left: -56px;
          width: 80px;
          height: 40px;
          border: 1px solid #f10180;
          text-align: center;
          line-height: 40px;
          color: #f10180;
        }
      }
      a:nth-last-child(1) img {
        border-right: 1px solid #ccc;
      }
      a:hover {
        color: #f10180;
      }
    }
    .right {
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
