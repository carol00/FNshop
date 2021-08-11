<template>
  <div class="content">
    <ProductList :title="title"/>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Content',
  components: {
    ProductList
  },
  data() {
    return {
      title: '全部商品'
    }
  }
}
</script>

<style scoped>
.content {
  width: 80%;
  margin: auto;
}
</style>
