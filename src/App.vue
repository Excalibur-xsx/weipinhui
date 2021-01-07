<template>
  <div>
    <router-view></router-view>
    <Footer />
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
* {
  margin: 0;
  padding: 0;
}
</style>
