<script setup lang="ts">
import { ref, computed, onMounted, type Ref } from "vue";
import Header from "@/components/Header.vue";
import IncomeExpense from "@/components/IncomeExpense.vue";
import HistoryList from "@/components/HistoryList.vue";
import AddTransactionForm from "@/components/AddTransactionForm.vue";

interface Transaction {
  id: number;
  text: string;
  amount: number;
}

const transactions: Ref<Transaction[]> = ref([]);

const saveTransactionsToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem("transactions")!);

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

const total = computed(() => {
  return transactions.value.reduce((acc, trans) => {
    return acc + trans.amount;
  }, 0);
});

const income = computed(() => {
  return transactions.value
    .filter((trans) => trans.amount > 0)
    .reduce((acc, trans) => {
      return acc + trans.amount;
    }, 0)
    .toFixed(2);
});

const expense = computed(() => {
  return transactions.value
    .filter((trans) => trans.amount < 0)
    .reduce((acc, trans) => {
      return acc + trans.amount;
    }, 0)
    .toFixed(2);
});

const generateId = () => {
  return Math.floor(Math.random() * 100000);
};

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
