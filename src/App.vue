<template>
  <div>
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  // data() {
  //   return {
  //     isRouterAlive: true,
  //   };
  // },
  // provide() {
  //   //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
  //   return {
  //     reload: this.reload,
  //   };
  // },
  methods: {
    /* 刷新页面方法 */
    /*   reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true; //再打开
      });
    }, */
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
</style>
