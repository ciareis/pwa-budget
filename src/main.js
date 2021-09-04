import App from './App.vue'
App.boot_time = Date.now()
const app = createApp(App)
import { createApp } from 'vue'
import router from './router/index.js'
import store from './store/index.js'
import plugins from './plugins/index.js'
import './index.css'

plugins(app)
app.use(router(store))
    .use(store)
    .mount('#app')
