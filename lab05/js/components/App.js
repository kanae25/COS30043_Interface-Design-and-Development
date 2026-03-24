const App = {
  name: 'App',
  components: {
    JobList,
    ToDoList
  },
  template: `
    <div class="container py-4">
      <header class="mb-4">
        <h1 class="h2 mb-1">Job Explorer &amp; To-Do List</h1>
        <p class="text-muted mb-0">Browse roles and manage your tasks.</p>
      </header>

      <section class="mb-5">
        <h2 class="h4 mb-3">Job Explorer</h2>
        <div class="row g-3">
          <div class="col-md-4">
            <job-list></job-list>
          </div>
          <div class="col-md-8">
            <router-view></router-view>
          </div>
        </div>
      </section>

      <section>
        <h2 class="h4 mb-3">To-Do List</h2>
        <to-do-list></to-do-list>
      </section>
    </div>
  `
};
