<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(img, index) in skuImageList"
        :key="img.id"
        @click="$emit('getIndex', index)"
      >
        <img :src="img.imgUrl" alt="" />
      </div>
    </div>
    <!-- 如果需要导航按钮 -->
    <div v-if="skuImageList">
      <div
        v-show="skuImageList.length >= 5"
        class="swiper-button-prev"
      ></div>
      <div
        v-show="skuImageList.length >= 5"
        class="swiper-button-next"
      ></div
    ></div>
  </div>
</template>

<script>
import Swiper, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation]);
export default {
  name: "ImgList",
  props: {
    skuImageList: {
      type: Array,
    },
  },
  watch: {
    skuImageList() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          spaceBetween: 7,
          slidesPerView: 5,
          slidesPerGroup: 5,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.swiper-container {
  width: 420px;
  position: relative;
  .swiper-wrapper {
    width: 350px;
    margin: 0 auto;
    margin-top: 10px;
  }
  .swiper-slide {
    width: 62px !important;
    height: 62px;
    // margin: 0 5px;
    border: 1px solid #f2f2f2;
    background-color: #f7f7f7;
    &:hover {
      border: 1px solid indianred;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 29px;
    height: 64px;
    top: 32px;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    &::after {
      font-size: 12px;
    }
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
}
</style>
