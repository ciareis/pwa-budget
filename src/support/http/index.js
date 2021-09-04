import axios from 'axios'
import responseErrorHandle from './response-error-handler.js'

const baseURL = import.meta.env.VITE_API_URL || '/v1'

export const api = axios.create({
  baseURL
})

export const setToken = token => {
  api.defaults.headers.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
  delete api.defaults.headers.Authorization
}

// interceptors
api.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => Promise.resolve(response.data || {}), (error) => {

  console.log({ error })
  return Promise.reject(responseErrorHandle(error))
  }
)
