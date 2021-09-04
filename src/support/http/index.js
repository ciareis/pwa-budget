import axios from 'axios'
import responseErrorHandle from './response-error-handler.js'

const baseURL = import.meta.env.VITE_API_URL || '/v1'

const api = axios.create({
  baseURL
})

// interceptors
api.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => {
    console.log('passou no interceptor')

    return Promise.resolve(response.data || {})
  }, (error) => {

  console.log({ error })
  return Promise.reject(responseErrorHandle(error))
  }
)

export const setToken = token => {
  api.defaults.headers.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
  delete api.defaults.headers.Authorization
}

export { api } 
