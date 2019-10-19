<template>
  <div class="description">
    <div class="price">
      <label>price:</label>
      <p>{{ formatPrice(form.price) }}</p>
    </div>
    <div class="desc">
      <label>description:</label>
      <p>{{ form.description }}</p>
    </div>
    <div class="button">
      <button @click="confirmPayment()">confirm payment</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  data() {
    return {
      form: {
        price: "1980",
        description: "Cauldron witch pusheen light-up plush"
      }
    };
  },
  methods: {
    formatPrice(cents) {
      return `$${(cents / 100)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    },
    confirmPayment() {}
  }
};
</script>


<style>
form {
  width: 350px;
}

.description {
  margin: 15px 0;
}

.button {
  display: flex;
  justify-content: flex-end;
}

button {
  margin-top: 20px;
  background-color: #ecbfd3;
  border-radius: 5px;
  color: #835ec7;
  cursor: pointer;
  font-size: 14px;
  padding: 10px;
  border: none;
  text-transform: uppercase;
}

button:hover {
  background-color: #dfdcf9;
  color: #f8a363;
}

p {
  margin: 0;
  font-size: 14px;
  text-transform: uppercase;
}

label {
  margin-bottom: 3px;
}

.price,
.desc {
  margin-bottom: 10px;
  text-transform: uppercase;
}
</style>