<script setup lang="ts">
import Header from "@/components/Header.vue";
import IncomeExpense from "@/components/IncomeExpense.vue";
import HistoryList from "@/components/HistoryList.vue";
import AddTransactionForm from "@/components/AddTransactionForm.vue";

const transactions = [
  {
    id: 1,
    text: "Salary",
    amount: -15.99,
  },
  {
    id: 2,
    text: "Computer",
    amount: -300.0,
  },
  {
    id: 3,
    text: "Refrigerator",
    amount: -85.0,
  },
  {
    id: 4,
    text: "Microphone",
    amount: 55.45,
  },
];
</script>

<template>
  <main>
    <Header />
    <IncomeExpense />
    <HistoryList />
    <AddTransactionForm />
  </main>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

input,
select {
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
}

h4 {
  font-size: 1.4rem;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

main {
  color: #222;
  padding: 2em;
  background-color: #f1f1f1;
  border-radius: 0.7rem;
}
</style>
