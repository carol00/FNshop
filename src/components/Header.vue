<template>
  <div class="header">
    <Logo/>
    <Search/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import Logo from '@/components/Logo.vue';

export default {
  name: 'Header',
  components: {
    Search,
    Logo
  },
  props: {}
}
</script>

<style lang="sass" scoped>
</style>
