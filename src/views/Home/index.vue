<template>
  <div v-wechat-title="$route.meta.title">
    <router-link to="/searchList">搜索</router-link>
    <button @click="logoutClick">退出登录</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  /* 刷新页面 */
  // inject: ["reload"],
  methods: {
    logoutClick() {
      this.$store.dispatch("logout");
      localStorage.removeItem("token");
      localStorage.removeItem("name", "");
      localStorage.removeItem("userTempId", "");
      localStorage.removeItem("loglevel:webpack-dev-server", "");
      /* 刷新页面 */
      // this.reload();
      this.$router.replace({ path: "/" });
      //清除路由
      location.reload();
    },
  },
};
</script>

<style lang="less" scoped>
</style>
