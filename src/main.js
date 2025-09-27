import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import '@/styles/index.css'
import '@/styles/app.css'
import vuetify from './plugins/vuetify'
import './assets/main.css'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

createApp(App)
.use(router)
.use(createPinia())
.use(vuetify)
.mount('#app')
