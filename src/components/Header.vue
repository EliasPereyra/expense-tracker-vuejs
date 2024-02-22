<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <h1>Expense Tracker</h1>

  <h3>Your balance</h3>
  <p id="balance-amount">
    <strong>${{ total }}</strong>
  </p>
</template>

<style scoped>
#balance-amount {
  font-size: 2.5rem;
}
</style>
