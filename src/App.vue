<template>
  <div id="app">
    <div class="aside">
      <Product />
    </div>
    <div class="main">
      <Navigation :currentPage="currentPage" />

      <!-- payment -->
      <PaymentMethod v-if="currentPage === 'payment'" />
      <form @submit="onSubmit" v-if="currentPage === 'payment'">
        <CreditCard ref="creditCard" />
        <Description />
      </form>

      <!-- confirmation -->
      <div v-if="currentPage === 'confirmation'">
        <p>success!</p>
      </div>
    </div>
  </div>
</template>

<script>
import CreditCard from "./components/CreditCard.vue";
import Product from "./components/Product.vue";
import Navigation from "./components/Navigation.vue";
import PaymentMethod from "./components/PaymentMethod.vue";
import Description from "./components/Description.vue";
import Vue from "vue";
import VueMask from "v-mask";
import Vuelidate from "vuelidate";

Vue.use(VueMask);
Vue.use(Vuelidate);

export default {
  name: "app",
  data() {
    return {
      currentPage: "payment"
    };
  },
  components: {
    CreditCard,
    Product,
    Navigation,
    PaymentMethod,
    Description
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const formIsValid = !this.$refs.creditCard.$v.$invalid;

      if (formIsValid) {
        this.currentPage = "confirmation";
      }
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  border: solid #1292b9 100px;
  display: flex;
  min-height: calc(100vh - 200px);
}

.aside {
  display: flex;
  flex: 0 0 50%;
}

.main {
  flex: 0 0 50%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


