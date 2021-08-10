<template>
  <div class="search center">
    <div class="searchInput">
      <input type="search" placeholder="search">
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
  props: {}
}
</script>

<style scoped>
@import '../style.css';

.search {
  width: 100%;
  margin: 10px 5px;
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
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}

.searchInput svg {
  position: absolute;
  right: 7px;
  top: 10px;
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
