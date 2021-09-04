import Layout01 from '@/layout/01/index.vue'
import Home from './views/Home.vue'

export const routes = [
  {
    path: '/',
    component: Layout01,
    meta: {
  //    auth: true,
      title: import.meta.env.VITE_APP_NAME
    },
    children: [
      {
        path: '/',
        component: Home,
        name: 'dashboard.home'
      }
    ]
  }
]
