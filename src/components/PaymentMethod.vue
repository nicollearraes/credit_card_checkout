<template>
  <div class="box">
    <label>Payment Method</label>
    <div class="payment-method">
      <div
        class="cc-stripe master"
        :class="{ active: creditCard === 'mc' }"
        @click="selectedCard('mc')"
      >
        <img :src="require('../assets/master.png')" alt="Mastercard logo" />
        <label class="master">Mastercard</label>
      </div>
      <div
        class="cc-stripe visa"
        :class="{ active: creditCard === 'visa' }"
        @click="selectedCard('visa')"
      >
        <img :src="require('../assets/visa.png')" alt="Visa logo" class="visa-img" />
        <label class="visa">Visa</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentMethod",
  data: function() {
    return {
      creditCard: "mc"
    };
  },
  methods: {
    selectedCard(creditCard) {
      this.creditCard = creditCard;
    }
  }
};
</script>

<style scoped>
.box {
  margin: 15px 0;
  width: 350px;
}

.payment-method {
  display: flex;
  justify-content: flex-start;
}

.cc-stripe + .cc-stripe {
  margin-left: 40px;
  margin-right: 40px;
}

label {
  font-size: 14px;
  color: #1292b9;
  margin-bottom: 3px;
  text-transform: uppercase;
}

.cc-stripe {
  cursor: pointer;
  opacity: 0.2;
  display: flex;
  flex: 0 0 100px;
  flex-direction: column;
  color: #f8a363;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
}

img {
  width: 100%;
  display: block;
  object-fit: contain;
  width: 100px;
  height: 65px;
}

.visa,
.master {
  color: #835ec7;
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
  text-transform: uppercase;
}

.active {
  opacity: 1;
}
</style>