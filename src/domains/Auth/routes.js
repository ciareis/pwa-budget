import Login from './views/Login.vue'
import Forgot from './views/Forgot.vue'
import LayoutAuth from '@/layout/Auth/index.vue'

export const routes = [
  {
    path: '/auth',
    component: LayoutAuth,
    meta: {
      guest: true
    },
    redirect: {
      name: 'auth.login'
    },
    children: [
      {
        meta: {
          title: import.meta.env.VITE_APP_NAME
        },
        path: '/auth/login',
        component: Login,
        name: 'auth.login'
      },
      {
        path: '/auth/forgot',
        component: Forgot,
        name: 'auth.forgot'
      }
    ]
  }
]
