import { createRouter, createWebHashHistory } from 'vue-router'
import QuizsVue from '../components/Quizs.vue'
import PreReservation from '../components/preReservation.vue'

const routes = [
    // À compléter
    {
      path: '/',
      name : 'homepage',
      component : PreReservation
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router