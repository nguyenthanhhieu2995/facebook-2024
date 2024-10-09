import axios from 'axios'
import configs from '@/configs/configs'
import { getToken, removeToken } from './token'

const requestSearch = axios.create({
  baseURL: configs.API_URL_SEARCH,
  headers: {
    'Content-Type': 'application/json'
  }
})

requestSearch.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default requestSearch

const request = axios.create({
  baseURL: configs.API_URL_USER,
  headers: {
    'Content-Type': 'application/json'
  }
})
request.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
      removeToken()
      window.location.reload()
    }
    return Promise.reject(error)
  }
)
export { request }
