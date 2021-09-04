import App from './App.vue'
App.boot_time = Date.now()
const app = createApp(App)
import { createApp } from 'vue'
import router from './router/index.js'
import store from './store/index.js'
import plugins from './plugins/index.js'
import './index.css'
import { makeServer } from './miragejs.js'
import { makeServerTest } from './miragejs-test'

plugins(app)
app.use(router(store))
    .use(store)
    .mount('#app')

if (import.meta.env.MODE === "test") {
  makeServer()
  makeServerTest()
}
