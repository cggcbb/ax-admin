import qs from 'qs'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { IAxiosOption, Result } from '~/types/common'

const CONTENT_TYPE = 'Content-Type'
const APPLICATION_JSON = 'application/json; charset=UTF-8'
const FORM_URLENCODED = 'application/x-www-form-urlencoded; charset=UTF-8'

const instance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10 * 60 * 1000,
  // 所有状态码都是有效的
  validateStatus: function (status) {
    return true
  }
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
  (response: AxiosResponse): AxiosResponse | Promise<never> => {
    if (response.status === 200) {
      return response
    }
    return Promise.reject(response)
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

/**
 * 简单封装一下request方法
 * 主要为了在调用它的时候，返回值能拿到指定的类型
 *
 * const res = request<string>({
 *   url: 'https://www.baidu.com'
 * })
 *
 * res.data 的类型就是 string
 */
export const request = <T = any>({ url, method = 'GET', data = {}, headers = {} }: IAxiosOption) => {
  const handleSuccess = (res: AxiosResponse<Result<T>>) => {
    // github 返回的信息 res.data 就是返回数据，里面没有包一层data
    if (res.data.code === 200 || url.includes('api.github.com')) {
      return res.data
    }
    window.$message.error(res.data.message)
    throw new Error(res.data.message ?? '请求异常，请稍后重试 …')
  }
  const handleError = (error: Result<Error>) => {
    window.$message.error(error.data.message)
    throw new Error(error.data.message ?? '请求异常，请稍后重试 …')
  }
  const params = Object.assign({}, typeof data === 'function' ? data() : data)

  return method === 'GET'
    ? instance.get(url, { params }).then(handleSuccess, handleError)
    : instance.post(url, params, { headers }).then(handleSuccess, handleError)
}

export const get = <T = any>(url: string) => {
  return request<T>({
    url
  })
}

export const post = <T = any>(url: string) => {
  return request<T>({
    url,
    method: 'POST'
  })
}
