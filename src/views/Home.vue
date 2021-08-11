<template>
  <div class="home">
    <Nav/>
    <Header/>
    <Banner/>
    <div class="line"></div>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import Content from '@/components/Content.vue';
import Footer from '@/components/Footer.vue';


export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Content,
    Nav,
    Footer
  }
}
</script>

<style scoped>
.home {
  font-family: "Lato","Helvetica Neue",Helvetica,Arial,sans-serif;
}
</style>
