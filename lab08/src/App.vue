<template>
  <div>
    <header class="app-header">
      <h1 class="app-title">Lab 08 — External Data</h1>
      <nav class="app-nav" aria-label="Main">
        <router-link to="/task1">Task 1</router-link>
        <router-link to="/task2">Task 2</router-link>
      </nav>
    </header>
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-header {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #e0e0e0;
  background: #fafafa;
}
.app-title {
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
}
.app-nav {
  display: flex;
  gap: 1rem;
}
.app-nav a {
  color: #2563eb;
  text-decoration: none;
}
.app-nav a.router-link-active {
  font-weight: 600;
  text-decoration: underline;
}
.app-main {
  padding: 1.25rem;
  max-width: 960px;
}
</style>
