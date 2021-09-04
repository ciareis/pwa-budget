import { routes as auth } from './Auth/index.js'
import { routes as dashboard } from './Dashboard/index.js'

export const routes = [
  ...auth,
  ...dashboard
]

