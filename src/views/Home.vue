<template>
  <div class="home">
    <Header/>
    <Banner/>
    <div class="line"></div>
    <Content/>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Content from '@/components/Content.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Content
  }
}
</script>

<style scoped>
</style>
