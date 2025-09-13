import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomeSection.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('../components/AboutSection.vue') },
  { path: '/experience', name: 'Experience', component: () => import('../components/ExperienceSection.vue') },
  { path: '/education', name: 'Education', component: () => import('../components/EducationSection.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../components/ContactSection.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
