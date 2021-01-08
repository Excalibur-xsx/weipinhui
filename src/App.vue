<template>
  <div>
    <NavHeader></NavHeader>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer";
import NavHeader from "./components/NavHeader/index";
export default {
  name: "app",
  components: {
    NavHeader,
    Footer
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
