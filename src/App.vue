<template>
  <div>
    <Footer />
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  name: "app",
  components: {
    Footer,
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>
