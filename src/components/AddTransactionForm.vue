<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["transactionSubmit"]);
const text = ref("");
const amount = ref("");

const onSubmit = () => {
  if (!text.value || !amount.value) {
    alert("You have to enter the values");
  }
  const transaction = {
    text: text.value,
    amount: amount.value,
  };

  emit("transactionSubmit", transaction);

  text.value = "";
  amount.value = "";
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h4>Create a new transaction</h4>

    <div id="text-wrapper">
      <label> Text </label>
      <input
        type="text"
        id="text"
        v-model="text"
        placeholder="Computer, Salary, Camera... "
      />
    </div>

    <div id="amount-wrapper">
      <label> Amount </label>
      <input type="number" id="amount" v-model="amount" placeholder="" />
    </div>

    <button>Create transaction</button>
  </form>
</template>

<style scoped>
form {
  h4 {
    margin: 1.2rem 0;
  }

  :is(#text-wrapper, #amount-wrapper) {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
  }

  select {
    width: 100%;
    border: 1px solid #aaa;
  }

  button {
    border: 1px solid #222;
    font-weight: bold;
    padding: 1rem;
    border-radius: 0.7rem;
  }
}
</style>
