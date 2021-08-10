<template>
  <div class="banner">
      <div class="picArea">
        <img src="../assets/banner1.jpg">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {}
}
</script>

<style scoped>
@import '../style.css';

.banner {
    width: 100%;
    margin: 40px 0;
}

.picArea {
    width: 100%;
    margin: auto;
    max-width: 850px;
}

img {
    width: 100%;
    height: 100%;
}
</style>
