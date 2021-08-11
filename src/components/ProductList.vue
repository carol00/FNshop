<template>
  <div class="productList">
      <p class="title">{{ title }}</p>
      <div class="prdContent">
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

.prdContent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
}

.prdContent > div {
  margin: auto;
}

.title {
  text-align: left;
  font-size: 18px;
  color: #82787b;
  font-weight: 600;
}

@media screen and (min-width: 600px) {
  .prdContent {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 800px) {
  .prdContent {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (min-width: 1180px) {
  .prdContent {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media screen and (min-width: 1300px) {
  .prdContent {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
