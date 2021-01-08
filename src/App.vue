<template>
  <div>
    <NavHeader />
    <router-view v-wechat-title="$route.meta.title"></router-view>
    <Footer />
    <NavLogin />
  </div>
</template>

<script>
import Footer from "./components/footer";
import NavHeader from "./components/NavHeader/index";
import NavLogin from "./components/NavLogin/NavLogin";
export default {
  name: "app",
  components: {
    NavHeader,
    Footer,
    NavLogin,
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
