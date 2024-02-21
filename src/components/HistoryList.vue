<template>
  <section>
    <h4>History</h4>

    <ul>
      <li>One element</li>
      <li>One element</li>
      <li>One element</li>
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

    li {
      padding: 0.5em;
      border: 1px solid #aaa;
      border-radius: 0.7rem;
    }
  }
}
</style>
