<script setup lang="ts">
const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <section>
    <div id="incomes">
      <h4>Incomes</h4>
      <p>+ ${{ +income }}</p>
    </div>

    <div id="expenses">
      <h4>Expenses</h4>
      <p>- ${{ +expense }}</p>
    </div>
  </section>
</template>

<style scoped>
section {
  border: 1px solid #aaa;
  margin-top: 1.2rem;
  background-color: rgb(243, 238, 238);
  border-radius: 0.7rem;
  padding: 2em;
  display: flex;
  gap: 4em;
  color: #222;

  #incomes {
    p {
      color: rgb(52, 201, 52);
    }
  }

  #expenses {
    p {
      color: rgb(196, 37, 37);
    }
  }
}
</style>
