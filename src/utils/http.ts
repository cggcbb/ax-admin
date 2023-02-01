import qs from 'qs'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

const CONTENT_TYPE = 'Content-Type'
const APPLICATION_JSON = 'application/json; charset=UTF-8'
const FORM_URLENCODED = 'application/x-www-form-urlencoded; charset=UTF-8'

const instance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10 * 60 * 1000
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    !config.headers && (config.headers = {})
    if (!config.headers[CONTENT_TYPE]) {
      config.headers[CONTENT_TYPE] = APPLICATION_JSON
    }
    if (config.headers[CONTENT_TYPE] === FORM_URLENCODED) {
      config.data = qs.stringify(config.data)
    }
    return config as any
  },
  (error: AxiosError) => {
    return Promise.reject(error.response)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === 200) {
      return response.data
    }
    window.$message.error(response.status)
    throw new Error(response.status.toString())
  },
  (error: AxiosError) => {
    window.$message.error('服务器异常，请稍后重试 …')
    return Promise.reject(new Error('服务器异常，请稍后重试 …'))
  }
)

export default instance
