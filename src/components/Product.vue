<template>
  <div class="product">
    <PopularProduct/>
  </div>
</template>

<script>
import PopularProduct from '@/components/PopularProduct.vue';

export default {
  name: 'Product',
  components: {
    PopularProduct
  }
}
</script>

<style scoped>
.product {
  width: 80%;
  margin: auto;
}
</style>
