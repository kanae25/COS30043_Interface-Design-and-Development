import { computed } from "../../assets/js/lib/vue.esm-browser.prod.js";
import { jobs } from "../data/jobs.js";

export default {
  name: "JobDetail",
  props: {
    jobId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const selectedJob = computed(() =>
      jobs.find((job) => job.job_id === props.jobId),
    );

    return {
      selectedJob,
    };
  },
  template: `
    <div v-if="selectedJob" class="card border-0 shadow-sm">
      <div class="card-body">
        <h4 class="mb-3">{{ selectedJob.job_title }}</h4>
        <dl class="row mb-0">
          <dt class="col-sm-4">Job ID</dt>
          <dd class="col-sm-8">{{ selectedJob.job_id }}</dd>

          <dt class="col-sm-4">Category</dt>
          <dd class="col-sm-8">{{ selectedJob.category }}</dd>

          <dt class="col-sm-4">Company</dt>
          <dd class="col-sm-8">{{ selectedJob.company }}</dd>

          <dt class="col-sm-4">Supervisor</dt>
          <dd class="col-sm-8">{{ selectedJob.supervisor }}</dd>

          <dt class="col-sm-4">Location</dt>
          <dd class="col-sm-8">{{ selectedJob.location }}</dd>

          <dt class="col-sm-4">Employment Type</dt>
          <dd class="col-sm-8">{{ selectedJob.employment_type }}</dd>

          <dt class="col-sm-4">Salary Range</dt>
          <dd class="col-sm-8">{{ selectedJob.salary_range }}</dd>

          <dt class="col-sm-4">Job Level</dt>
          <dd class="col-sm-8">{{ selectedJob.job_level }}</dd>

          <dt class="col-sm-4">Required Skills</dt>
          <dd class="col-sm-8">{{ selectedJob.required_skills.join(", ") }}</dd>

          <dt class="col-sm-4">Preferred Qualifications</dt>
          <dd class="col-sm-8">{{ selectedJob.preferred_qualifications.join(", ") }}</dd>

          <dt class="col-sm-4">Description</dt>
          <dd class="col-sm-8">{{ selectedJob.job_description }}</dd>

          <dt class="col-sm-4">Application Deadline</dt>
          <dd class="col-sm-8">{{ selectedJob.application_deadline }}</dd>

          <dt class="col-sm-4">Posted Date</dt>
          <dd class="col-sm-8">{{ selectedJob.posted_date }}</dd>

          <dt class="col-sm-4">Positions Available</dt>
          <dd class="col-sm-8">{{ selectedJob.positions_available }}</dd>

          <dt class="col-sm-4">Start Date</dt>
          <dd class="col-sm-8">{{ selectedJob.start_date }}</dd>

          <dt class="col-sm-4">Tags</dt>
          <dd class="col-sm-8">{{ selectedJob.tags.join(", ") }}</dd>
        </dl>
      </div>
    </div>
    <div v-else class="alert alert-warning mb-0">
      Job was not found.
    </div>
  `,
};
