const JobDetail = {
  name: 'JobDetail',
  props: ['jobId'],
  template: `
    <div v-if="job" class="p-3 border rounded">
      <h3 class="h4">{{ job.job_title }}</h3>
      <p class="text-muted mb-2"><strong>ID:</strong> {{ job.job_id }} · <strong>Company:</strong> {{ job.company }}</p>
      <dl class="row mb-0 small">
        <dt class="col-sm-4">Category</dt><dd class="col-sm-8">{{ job.category }}</dd>
        <dt class="col-sm-4">Location</dt><dd class="col-sm-8">{{ job.location }}</dd>
        <dt class="col-sm-4">Employment type</dt><dd class="col-sm-8">{{ job.employment_type }}</dd>
        <dt class="col-sm-4">Salary range</dt><dd class="col-sm-8">{{ job.salary_range }}</dd>
        <dt class="col-sm-4">Job level</dt><dd class="col-sm-8">{{ job.job_level }}</dd>
        <dt class="col-sm-4">Required skills</dt><dd class="col-sm-8">{{ skillsText(job.required_skills) }}</dd>
        <dt class="col-sm-4">Preferred qualifications</dt><dd class="col-sm-8">{{ skillsText(job.preferred_qualifications) }}</dd>
        <dt class="col-sm-4">Description</dt><dd class="col-sm-8">{{ job.job_description }}</dd>
        <dt class="col-sm-4">Application deadline</dt><dd class="col-sm-8">{{ job.application_deadline }}</dd>
        <dt class="col-sm-4">Posted date</dt><dd class="col-sm-8">{{ job.posted_date }}</dd>
        <dt class="col-sm-4">Supervisor</dt><dd class="col-sm-8">{{ job.supervisor }}</dd>
        <dt class="col-sm-4">Positions available</dt><dd class="col-sm-8">{{ job.positions_available }}</dd>
        <dt class="col-sm-4">Start date</dt><dd class="col-sm-8">{{ job.start_date }}</dd>
        <dt class="col-sm-4">Tags</dt><dd class="col-sm-8">{{ skillsText(job.tags) }}</dd>
      </dl>
    </div>
    <div v-else class="p-3 border rounded border-warning">
      <p class="mb-0">No job found for ID <strong>{{ jobId }}</strong>.</p>
    </div>
  `,
  computed: {
    job() {
      for (let i = 0; i < JOBS.length; i++) {
        if (JOBS[i].job_id === this.jobId) {
          return JOBS[i];
        }
      }
      return null;
    }
  },
  methods: {
    skillsText(arr) {
      if (!arr || arr.length === 0) {
        return '';
      }
      return arr.join(', ');
    }
  }
};
