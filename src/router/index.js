// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Gallery from '../views/Gallery.vue'
import Appointments from '../views/Appointments.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: Appointments
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router