<template>
  <div class="productList">
      <p class="title">{{ title }}</p>
      <div class="content">
        <div v-for="value in item" :key="value">
          <Product :itemName="value.itemName" :price="value.price" :discount="value.discount"/>
        </div>
      </div>
  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: 'ProductList',
  components: {
    Product
  },
  data() {
    return {
      item: [
        { itemName: '雙色蝴蝶結', price: 840, discount: 780 },
        { itemName: '雙色蝴蝶結', price: 840, discount: 780 },
        { itemName: '雙色蝴蝶結', price: 840, discount: 780 },
        { itemName: '雙色蝴蝶結', price: 840, discount: 780 },
        { itemName: '雙色蝴蝶結', price: 840, discount: 780 },
        { itemName: '雙色蝴蝶結', price: 840, discount: 780 }
      ]
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.productList {
  margin: 20px 0;
  color: #000;
}

.productList .content {
  display: flex;
}

.productList .content > div {
  flex: 1;
}

.title {
  text-align: left;
  font-size: 18px;
  color: #82787b;
  font-weight: 600;
}
</style>
