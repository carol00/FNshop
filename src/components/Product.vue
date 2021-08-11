<template>
  <div class="product">
    <div class="pic">
        <img src="../assets/FN1.jpg">
    </div>
    <div class="name">{{ itemName }}</div>
    <div class="priceBox">
      <div class="price">
        <p>$</p>
        <span>{{ price }}</span>
      </div>
      <div class="discount">
        <p>$</p>
        <span>{{ discount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    itemName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    discount: {
      type: Number,
      required: false
    }
  }
}
</script>

<style scoped>
.product {
  width: 170px;
  margin: 10px 10px 25px 10px;
}

.pic img {
  width: 100%;
}

.name {
  text-align: left;
  font-size: 15px;
}

/* price */

.priceBox, .priceBox > div {
  display: flex;
  align-items: center;
}


.price {
  text-decoration: line-through;
  font-size: 15px;
  color: #848181;
}

.discount {
  font-size: 18px;
  color: #cc6464;
  font-weight: 700;
  margin-left: 10px;
}
</style>
