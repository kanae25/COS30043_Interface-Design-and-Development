import { createRouter, createWebHashHistory } from "../../assets/js/lib/vue-router.esm-browser.prod.js";
import JobDetail from "../components/JobDetail.js";
import JobOverview from "../components/JobOverview.js";

const routes = [
  {
    path: "/",
    redirect: "/jobs/overview",
  },
  {
    path: "/jobs",
    redirect: "/jobs/overview",
  },
  {
    path: "/jobs/overview",
    name: "overview",
    component: JobOverview,
  },
  {
    path: "/jobs/:jobId",
    name: "job-detail",
    component: JobDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
