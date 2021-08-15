<template>
  <div class="home">
    <div v-if="loading">
      <Loading/>
    </div>
    <div v-else>
      <Nav/>
      <Header/>
      <Banner/>
      <div class="line"></div>
      <Content :prdList="getList"/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import Nav from '@/components/Nav.vue';
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import Content from '@/components/Content.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Loading,
    Header,
    Banner,
    Content,
    Nav,
    Footer
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    getList() {
      return this.$store.state.list;
    }
  },
  mounted() {
    this.$store.dispatch('GETLIST')
    this.loading = false;

  }
}
</script>

<style scoped>
.home {
  font-family: "Lato","Helvetica Neue",Helvetica,Arial,sans-serif;
}
</style>
