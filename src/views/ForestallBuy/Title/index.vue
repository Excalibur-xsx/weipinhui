<template>
  <div class="title-container">
    <div class="line"></div>
    <div class="title">{{ titleName }}</div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    titleName: String,
  },
};
</script>

<style lang="less" scoped>
.title-container {
  width: 1170px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  .line {
    width: 130px;
    height: 0.5px;
    background-color: #f10180;
  }
  .title{
    padding: 5px 40px;
    border: 1px solid #ffa8e1;
    background-color: #ffdfef;
    color: #f10180;
    font-size: 25px;
  }
}
</style>
