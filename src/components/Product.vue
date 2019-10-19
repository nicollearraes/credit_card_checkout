<template>
  <div class="product">
    <img :src="require('../assets/pusheenhalloween.jpg')" alt="Pusheen Halloween Plush" />
  </div>
</template>

<script>
export default {
  name: "Product"
};
</script>

<style scoped>
.product {
  display: flex;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>