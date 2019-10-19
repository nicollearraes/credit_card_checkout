<template>
  <div class="navigation">
    <ul>
      <li :class="{ active: currentPage === 'shipping' }">shipping</li>
      <li :class="{ active: currentPage === 'payment' }">payment</li>
      <li :class="{ active: currentPage === 'confirmation' }">confirmation</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: ["currentPage"]
};
</script>

<style scoped>
.navigation {
  margin-bottom: 25px;
  width: 350px;
}

ul {
  list-style-type: none;
  padding: 0;
}
.active {
  border-bottom: solid #835ec7 3px;
  font-weight: bold;
  color: black;
  font-size: 16px;
}

li {
  display: inline;
  margin: 0 10px;
  text-align: left;
  color: #ecbfd3;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
}

li:hover {
  cursor: pointer;
}
</style>
