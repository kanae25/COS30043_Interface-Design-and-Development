export default {
  name: "JobList",
  props: {
    jobs: {
      type: Array,
      required: true,
    },
  },
  template: `
    <div class="card border-0 shadow-sm h-100">
      <div class="card-body p-0">
        <div class="list-group list-group-flush job-nav">
          <router-link
            class="list-group-item list-group-item-action"
            :to="{ name: 'overview' }"
          >
            Overview
          </router-link>
          <router-link
            v-for="job in jobs"
            :key="job.job_id"
            class="list-group-item list-group-item-action"
            :to="{ name: 'job-detail', params: { jobId: job.job_id } }"
          >
            {{ job.job_id }}
          </router-link>
        </div>
      </div>
    </div>
  `,
};
