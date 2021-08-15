<template>
  <div class="productList">
      <p class="title">{{ title }}</p>
      <div class="prdContent">
        <div v-for="item in prdList" :key="item">
          <Product :itemName="item.itemName" :price="item.price" :discount="item.discount"
          :pic="item.img"/>
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
    return {}
  },
  props: {
    title: {
      type: String,
      required: true
    },
    prdList: {
      type: Array
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
