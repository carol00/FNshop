<template>
  <div class="home">
    <Search/>
    <Banner/>
    <div class="line"></div>
    <Product/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import Banner from '@/components/Banner.vue';
import Product from '@/components/Product.vue';

export default {
  name: 'Home',
  components: {
    Search,
    Banner,
    Product
  }
}
</script>

<style scoped>
</style>
