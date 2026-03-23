import { jobs } from "../data/jobs.js";
import JobList from "./JobList.js";
import ToDoList from "./ToDoList.js";

export default {
  name: "App",
  components: {
    JobList,
    ToDoList,
  },
  setup() {
    return {
      jobs,
    };
  },
  template: `
    <main class="container py-4">
      <header class="mb-4">
        <h1 class="h3 mb-1">Lab 05: Components and Router</h1>
        <p class="text-muted mb-0">
          Job Explorer and To-Do List built with local Vue 3, Vue Router, and Bootstrap.
        </p>
      </header>

      <section class="mb-4">
        <h2 class="h4 mb-3">Job Explorer</h2>
        <div class="row g-3 job-layout">
          <div class="col-md-4 col-lg-3">
            <JobList :jobs="jobs" />
          </div>
          <div class="col-md-8 col-lg-9">
            <router-view />
          </div>
        </div>
      </section>

      <ToDoList />
    </main>
  `,
};
