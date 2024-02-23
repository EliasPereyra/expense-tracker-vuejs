import type { Transaction } from "@/types/Transaction";

import { computed, onMounted, ref, type Ref } from "vue";

export function useTransactions() {
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

  return {
    transactions,
    saveTransactionsToLocalStorage,
    total,
    income,
    expense,
  };
}
