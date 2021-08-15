<template>
  <div class="search center">
    <select>
      <option v-for="item in prdType" :key="item">{{ item }}</option>
    </select>
    <div class="searchInput">
      <input placeholder="search">
      <i class="fas fa-times-circle"></i>
    </div>
    <div class="searchBtn center">
      <button><i class="fas fa-search"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      prdType: ['熱門商品', '最新商品', '全部商品']
    }
  },
  props: {}
}
</script>

<style scoped>
.search {
  width: 100%;
  margin: 0 5px;
}

/* select */
select {
  border: 2px solid var(--searchBorderColor);
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  height: 35px;
  padding: 0 3px;
  font-size: 14px;
}

/* input */
.searchInput {
  position: relative;
  flex: 0 60%;
  max-width: 350px;
}

.searchInput input {
  width: 100%;
  height: 35px;
  border: 2px solid var(--searchBorderColor);
  /* border-top-left-radius: 100px; */
  /* border-bottom-left-radius: 100px; */
  padding: 0 8px 0 10px;
  border-inline-start-style: none;
  border-inline-end-style: none;
}

.searchInput svg {
  position: absolute;
  right: 7px;
  top: 9px;
  color: #cecbcb;
  font-size: 15px;
}

/* btn */
.searchBtn button {
  width: 45px;
  height: 35px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  background: var(--searchBorderColor);
  color: #FFF;
  border: 2px solid var(--searchBorderColor);
  font-size: 18px;
}

.searchBtn svg {
  margin-right: 3px;
}
</style>
