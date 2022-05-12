import { createRouter, createWebHashHistory } from 'vue-router'
import information from '../components/information.vue'
import home from '../components/home.vue'

const routes = [
    {
      path: '/',
      name : 'homepage',
      component : home
    },
    {
      path: '/information',
      name : 'information',
      component : information
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router