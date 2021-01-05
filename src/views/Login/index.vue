<template>
  <div>
    <div class="registerContainer">
      <div class="registerHeader">
        <img
          class="logo"
          src="//b.appsimg.com/upload/momin/2020/06/16/82/1592278113502.png"
          alt=""
        />
        <div class="Service"></div>
      </div>

      <div class="registerBottom">
        <span
          >Copyright 2008-2020 vip.com，All Rights Reserved ICP证：粤
          B2-20080329</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login ",
};
</script>

<style lang='less' scoped>
.registerHeader {
  display: flex;
  margin: 0 auto;
  width: 1000px;
  height: 100px;
  justify-content: space-between;
  .logo {
    width: 180px;
    height: 100px;
  }

  .Service {
    width: 304px;
    height: 100px;
    background-image: url("./images/sprites-hash-c9975078.png");
  }
}
.registerBottom {
  margin: 0 auto;
  text-align: center;
  width: 1000px;
  height: 77px;
  line-height: 77px;
}
</style>
