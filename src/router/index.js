import { createRouter, createWebHashHistory } from 'vue-router'
import QuizsVue from '../components/Quizs.vue'

const routes = [
    // À compléter
    {
      path: '/',
      name : 'homepage',
      component : QuizsVue
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router