<script setup lang="ts">
import { ref, computed, onMounted, type Ref } from "vue";

import Header from "@/components/Header.vue";
import IncomeExpense from "@/components/IncomeExpense.vue";
import HistoryList from "@/components/HistoryList.vue";
import AddTransactionForm from "@/components/AddTransactionForm.vue";

import { useTransactions } from "@/hooks/useTransaction";

import { generateId } from "@/utils/generateId";

const { transactions, saveTransactionsToLocalStorage, total, income, expense } =
  useTransactions();

const handleSubmit = (transaction: { text: string; amount: number }) => {
  const newTransaction = {
    id: generateId(),
    text: transaction.text,
    amount: transaction.amount,
  };

  transactions.value.push(newTransaction);
  saveTransactionsToLocalStorage();
};

const handleTransactionDeleted = (id: number) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );

  saveTransactionsToLocalStorage();
};
</script>

<template>
  <main>
    <Header :total="+total" />
    <IncomeExpense :income="+income" :expense="+expense" />
    <HistoryList
      :transactions="transactions"
      @transaction-deleted="handleTransactionDeleted"
    />
    <AddTransactionForm @transactionSubmit="handleSubmit" />
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
