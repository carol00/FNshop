<template>
  <div class="home">
    <Nav/>
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
import Nav from '@/components/Nav.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Content,
    Nav
  }
}
</script>

<style scoped>
</style>
