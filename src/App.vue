<template>
  <div>
    <NavHeader></NavHeader>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import NavHeader from "./components/NavHeader/index";
export default {
  name: "app",
  components: {
    NavHeader,
  },
};
</script>

<style>
</style>
