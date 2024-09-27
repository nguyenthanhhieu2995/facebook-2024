import axios from 'axios'
import configs from '@/configs/configs'
import { getToken } from './token'

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
export { request }
