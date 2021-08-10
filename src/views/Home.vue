<template>
  <div class="home">
    <Header/>
    <Banner/>
    <div class="line"></div>
    <Product/>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Product from '@/components/Product.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Product,
    Header
  }
}
</script>

<style scoped>
</style>
