<template>
  <div class="nav">
    <ul v-for="value in item" :key="value">
      <li><i :class="value.icon"></i><p class="amount">12</p></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  data() {
    return {
      item: [
        { name: '購物車', icon: 'fas fa-shopping-cart' }
      ]
    }
  }
}
</script>

<style scoped>
.nav {
  width: 100%;
  height: 35px;
  padding: 7px 17px;
  border-bottom: 1px #ece6e6 solid;
}

ul {
  text-align: right;
  color: #848383;
  font-size: 20px;
}

li {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}

.amount {
  width: 18px;
  height: 18px;
  position: absolute;
  background: #cc6241;
  border-radius: 50%;
  border: 1px #FFF solid;
  top: -6px;
  right: -9px;
  font-size: 12px;
  color: #FFF;
  text-align: center;
}
</style>
