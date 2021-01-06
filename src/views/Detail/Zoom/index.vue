<template>
  <div class="zoomContanier" v-if="skuImageList">
    <div class="middleImg" ref="middleImg" @mouseenter="enter">
      <img :src="skuImageList[currentIndex].imgUrl" alt="" />
    </div>
    <div
      class="bigImg"
      :class="bigShow ? 'bigShow' : ''"
      @mousemove="move"
      @mouseleave="leave"
    >
      <img ref="bigImg" :src="skuImageList[currentIndex].imgUrl" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
      bigShow: false,
    };
  },
  props: {
    skuImageList: {
      type: Array,
    },
    currentIndex: {
      type: Number
    }
  },
  methods: {
    enter() {
      this.bigShow = true;
    },
    move(e) {
      const imgToWin = {
        x: this.$refs.middleImg.getBoundingClientRect().left,
        y: this.$refs.middleImg.getBoundingClientRect().top,
      };
      const mouseToBorder = {
        x: e.clientX - imgToWin.x,
        y: e.clientY - imgToWin.y,
      };
      const resultPointer = {
        x: -mouseToBorder.x,
        y: -mouseToBorder.y,
      };
      this.$refs.bigImg.style.left = resultPointer.x + "px";
      this.$refs.bigImg.style.top = resultPointer.y + "px";
    },
    leave() {
      this.bigShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.zoomContanier {
  width: 420px;
  height: 420px;
  position: relative;
  .middleImg {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .bigImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    overflow: hidden;
    img {
      width: 200%;
      height: 200%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .bigShow {
    display: block;
  }
}
</style>
