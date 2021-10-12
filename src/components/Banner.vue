<template>
  <div class="banner">
      <div class="picContent">
        <img src="../assets/banner1.jpg">
        <!-- <img src="../assets/banner2.jpg">
        <img src="../assets/banner3.jpg"> -->
      </div>
      <!-- <div class="switch">
        <button><i class="fas fa-angle-left"></i></button>
        <button><i class="fas fa-angle-right"></i></button>
      </div> -->
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {}
}
</script>

<style lang="sass" scoped>
.banner
  width: 100%
  margin: 70px 0
  .picContent
    width: 100%
    margin: auto
    max-width: 850px
    img
      width: 100%
      height: 100%
</style>
