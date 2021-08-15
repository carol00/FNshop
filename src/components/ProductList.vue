<template>
  <div class="productList">
      <p class="title">{{ title }}</p>
      <div class="prdContent">
        <div v-for="item in list" :key="item">
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
      list: [
        { itemName: '雙色蝴蝶結', price: 840, discount: 780, type: 'new' },
        { itemName: '髮夾', price: 690, discount: 666, type: 'hot' },
        { itemName: '彩帶', price: 320, discount: 203, type: '' },
        { itemName: '書籤', price: 800, discount: 746, type: 'hot' },
        { itemName: '票卡', price: 540, discount: 480, type: '' },
        { itemName: '金色髮夾', price: 420, discount: 370, type: 'new' }
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
