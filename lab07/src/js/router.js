import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Travel from '../components/Travel.vue'
import About from '../components/About.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/travel', name: 'travel', component: Travel },
  { path: '/about', name: 'about', component: About }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
