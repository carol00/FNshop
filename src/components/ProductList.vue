<template>
  <div class="productList">
      <p class="title">{{ titleName }}</p>
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
    titleName: {
      type: String
    },
    prdList: {
      type: Array
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/style/breakpoints.sass'

.productList
  margin: 20px 0
  color: #000
  .prdContent
    display: grid
    grid-template-columns: repeat(2, 1fr)
    justify-content: center
    align-items: center
    @include media-breakpoints(600px)
      grid-template-columns: repeat(3, 1fr)
    @include media-breakpoints(800px)
      grid-template-columns: repeat(4, 1fr)
    @include media-breakpoints(1180px)
      grid-template-columns: repeat(5, 1fr)
    @include media-breakpoints(1300px)
      grid-template-columns: repeat(6, 1fr)
    > div
      margin: auto
  .title
    text-align: left
    font-size: 18px
    color: #82787b
    font-weight: 600
</style>
