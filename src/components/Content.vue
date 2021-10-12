<template>
  <div class="content" v-if="sortProduct()">
    <ProductList if="this.newPrd.length" :prdList="newPrd" :titleName="'New Product'"/>
    <ProductList if="this.hotPrd.length" :prdList="hotPrd" :titleName="'Hot Product'"/>
    <ProductList if="this.prdList.length" :prdList="prdList" :titleName="'All Product'"/>
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
      newPrd: [],
      hotPrd: []
    }
  },
  props: {
    prdList: {
      type: Array
    }
  },
  methods: {
    sortProduct() {
      this.prdList.forEach((item) => {
        const type = item.type;
        if (type === 'new') this.newPrd.push(item);
        if(type === 'hot') this.hotPrd.push(item);
      });
      return this.prdList
    }
  }
}
</script>

<style lang="sass" scoped>
.content
  width: 80%
  margin: 15px auto 40px auto
</style>
