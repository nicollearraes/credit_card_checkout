<template>
  <div class="credit-card">
    <div class="cc-information">
      <div class="cc cc-1" :class="{ 'is-error': $v.name.$dirty && $v.name.$invalid }">
        <label>Name</label>
        <input type="text" name="name" v-model.trim="$v.name.$model" />
      </div>
    </div>
    <div class="cc-information">
      <div class="cc cc-1" :class="{ 'is-error': $v.cc_number.$dirty && $v.cc_number.$invalid }">
        <label>card number</label>
        <input
          type="text"
          name="cc_number"
          v-mask="'#### - #### - #### - ####'"
          v-model.trim="$v.cc_number.$model"
          size="25"
        />
      </div>
      <div class="cc cc-2" :class="{ 'is-error': $v.exp_date.$dirty &&  $v.exp_date.$invalid }">
        <label>MM / YY</label>
        <input
          type="text"
          name="exp_date"
          v-mask="'## / ##'"
          v-model.trim="$v.exp_date.$model"
          size="7"
        />
      </div>
      <div class="cc cc-3" :class="{ 'is-error': $v.ccv.$dirty &&  $v.ccv.$invalid }">
        <label>CVV</label>
        <input
          type="password"
          name="cvv"
          v-mask="'###'"
          v-model.trim="$v.ccv.$model"
          maxlength="3"
          size="3"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "CreditCard",
  data() {
    return {
      name: "",
      cc_number: "",
      exp_date: "",
      ccv: ""
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    cc_number: {
      required,
      length: val => val.length === 25
    },
    exp_date: {
      required,
      notExpired: val => {
        const date = new Date();
        const currentYearShort = date.getYear() - 100;
        const currentMonth = date.getMonth() + 1; // month is zero-based
        const [month, year] = val.split(" / ");

        if (month > 12 || month < 1) {
          return false;
        }

        if (year < currentYearShort) {
          return false;
        }

        // given the current year, make sure the month is not in the past
        if (Number(year) === currentYearShort && Number(month) < currentMonth) {
          return false;
        }

        return true;
      }
    },
    ccv: {
      required,
      length: val => val.length === 3
    }
  }
};
</script>

<style>
.credit-card {
  margin: 15px 0;
}

form {
  display: inline-block;
  width: 350px;
}

.cc-information {
  display: flex;
  justify-content: flex-start;
}

.cc-information + .cc-information {
  margin-top: 20px;
}

.cc {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
}

.cc + .cc {
  margin-left: 20px;
}

.cc-1 {
  flex: 1 0 auto;
}

input {
  display: inline-block;
  box-sizing: border-box;
  padding: 7px;
  border: solid #ecbfd3 1px;
  border-radius: 5px;
  text-transform: uppercase;
}

label {
  font-size: 14px;
  color: #1292b9;
  margin-bottom: 3px;
  text-transform: uppercase;
}

.is-error input {
  border-color: red;
  box-shadow: 0 0 0 1px red;
  background: #fff8f8;
}

.is-error label {
  color: red;
}
</style>
