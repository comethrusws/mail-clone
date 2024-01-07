import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import vue3GoogleLogin from 'vue3-google-login'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {
  clientId: '440220642490-2c62rj4bbui71no8agu9thof3rubhqu5.apps.googleusercontent.com' // EG: 184413169503-jfhjjaskdfhdsakfhjsa.apps.googleusercontent.com
})

app.mount('#app')