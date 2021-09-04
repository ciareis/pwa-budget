import { api } from '@/support/http/index.js'
const entity = path => `/auth/${path}`

export const login = payload => api.post(entity('login'), payload)
export const logout = () => api.post(entity('logout'))
export const me = () => api.get(entity('me'))
export const update = payload => api.put(entity('me'), payload)
export const changePassword = payload => api.put(entity('password'), payload)
export const forgotPassword = payload => api.post(entity('password/email'), payload)
export const resetPassword = payload => api.post(entity('password/reset'), payload)
