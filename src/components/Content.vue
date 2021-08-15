<template>
  <div class="content">
    <ProductList :title="title" :prdList="prdList"/>
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
  },
  props: {
    prdList: {
      type: Array
    }
  }
}
</script>

<style scoped>
.content {
  width: 80%;
  margin: 15px auto 40px auto;
}
</style>
