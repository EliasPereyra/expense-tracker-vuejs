<template>
  <section>
    <h4>Create a new transaction</h4>

    <div id="text-wrapper">
      <label> Text </label>
      <input type="text" placeholder="Computer, Salary, Camera... " />
    </div>

    <div>
      <select>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
    </div>

    <div id="amount-wrapper">
      <label> Amount </label>
      <input type="number" placeholder="" />
    </div>

    <button>Create transaction</button>
  </section>
</template>

<style scoped>
section {
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
