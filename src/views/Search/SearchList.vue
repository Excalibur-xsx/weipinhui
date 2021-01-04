<template>
  <div class="">
    <Option />
    <ProductList />
    
  </div>
</template>

<script>
import Option from "./Option";
import ProductList from "./ProductList"

export default {
  name: "SearchList",
  components: {
    Option,
    ProductList
  },
};
</script>

<style lang="less" scoped>


</style>
