const JobList = {
  name: 'JobList',
  template: `
    <div class="list-group">
      <router-link class="list-group-item list-group-item-action" to="/overview">Overview</router-link>
      <router-link
        v-for="j in jobs"
        :key="j.job_id"
        class="list-group-item list-group-item-action"
        :to="'/job/' + j.job_id"
      >{{ j.job_id }}</router-link>
    </div>
  `,
  data() {
    return {
      jobs: JOBS
    };
  }
};
