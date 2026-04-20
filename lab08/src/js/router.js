import { createRouter, createWebHashHistory } from 'vue-router'
import Task1 from '../components/Task1.vue'
import Task2 from '../components/Task2.vue'

const routes = [
  { path: '/', redirect: '/task1' },
  { path: '/task1', name: 'task1', component: Task1 },
  { path: '/task2', name: 'task2', component: Task2 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
