import { createApp } from 'vue'
import App from './App.vue'
import './assets/atom.scss'
import nativeui from './plugins/native'
import router from './router'
import { createPinia } from 'pinia'
import '@/mock'

const app = createApp(App)

app
  .use(router)
  .use(createPinia())
  .use(nativeui)
  .mount('#app')