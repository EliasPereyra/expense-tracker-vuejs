<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["transaction-deleted"]);

const deleteTransaction = (id: number) => {
  emit("transaction-deleted", id);
};
</script>

<template>
  <section>
    <h4>History</h4>

    <ul>
      <li v-for="transaction in transactions" key="transaction.id">
        {{ transaction.text }} <span>{{ transaction.amount }}</span>
        <button @click="deleteTransaction(transaction.id)">x</button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  h4 {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    overflow-y: scroll;
    max-height: 12em;
    li {
      display: flex;
      justify-content: space-between;
      padding: 0.5em;
      border: 1px solid #aaa;
      border-radius: 0.7rem;
    }
  }
}
</style>
