import { createApp } from 'vue'
import App from './App.vue'
import plugins from './plugins/index.js'

const app = createApp(App)
plugins(app)

app.mount('#app')
