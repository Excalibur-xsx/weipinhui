<template>
  <div class="imgListContainer">
    <ul class="smallImg">
        <li class="smallItem">
          <img src="../images/b1.png" alt="" />
        </li>
        <li class="smallItem">
          <img src="../images/b1.png" alt="" />
        </li>
        <li class="smallItem">
          <img src="../images/b1.png" alt="" />
        </li>
        <li class="smallItem">
          <img src="../images/b1.png" alt="" />
        </li>
        <li class="smallItem">
          <img src="../images/b1.png" alt="" />
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'ImgList',
}
</script>

<style lang="less" scoped>
.imgListContainer{
  width: 420px;
  .smallImg{
    width: 360px;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .smallItem{
    width: 62px;
    height: 62px;
    border: 1px solid #f2f2f2;
    background-color: #f7f7f7;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
