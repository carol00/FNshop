<template>
  <div class="nav">
    <ul v-for="value in item" :key="value">
      <!-- <li><i :class="value.icon"></i><p class="amount">12</p></li> -->
      <li @click="logout"><i :class="value.icon"></i><p class="">{{value.name}}</p></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Nav',
  data() {
    return {
      item: [
        // { name: '購物車', icon: 'fas fa-shopping-cart' },
        { name: '登出', icon: '' }
      ]
    }
  },
  methods: {
    logout() {
      console.log('logout')
      axios.post(`${process.env.VUE_APP_APIPATCH}/logout`).then((res) => {
        if (res.data.success) this.$router.push('/login');
      });
    }
  }
}
</script>

<style lang="sass" scoped>
.nav
  width: 100%
  height: 35px
  padding: 7px 17px
  border-bottom: 1px #ece6e6 solid
  ul
    text-align: right
    color: #848383
    font-size: 12px
    li
      display: flex
      align-items: center
      justify-content: flex-end
      position: relative
    .amount
      width: 18px
      height: 18px
      position: absolute
      background: #cc6241
      border-radius: 50%
      border: 1px #FFF solid
      top: -6px
      right: -9px
      font-size: 12px
      color: #FFF
      text-align: center
</style>
