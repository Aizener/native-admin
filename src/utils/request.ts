import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const axios = Axios.create({
  timeout: 5000,
  baseURL: '/'
})

axios.interceptors.request.use((request: AxiosRequestConfig) => {
  return request
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response.use((response: AxiosResponse) => {
  if (response.status === 200) {
    return response.data
  } else {
    return Promise.reject(response)
  }
}, err => {
  return Promise.reject(err)
})

export default axios
