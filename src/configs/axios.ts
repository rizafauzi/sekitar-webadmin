/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import axios, { Method, AxiosRequestConfig, AxiosPromise } from 'axios'
import sekitarEnv from '@utils/ENV'
// import Cookies from 'js-cookie'

type ApiRequestProperties = {
  path: string
  params?: object
  url?: string
  method: Method
  headers?: object
  timeout?: number
  bodyRequest?: object
}

export type GetTypes = {
  limit?: number
  page?: number
  start?: string
  end?: string
  status?: string
  channel?: string
  entity?: string
}

export type ApiResponse<T> = {
  data: {
    message: string
    Data: T
    data?: T
    total?: number
    status?: number
    error?: string
  }
  status: number
  message?: string
  error?: string
}

const BASE_URL = 'https://api.setoko.co'

export const apiRequest = (arguments_: ApiRequestProperties): AxiosPromise => {
  const { method, bodyRequest, params, path, url, timeout, headers } = arguments_
  const baseUrl = url || (BASE_URL as string)
  // const token = 'e5dec26680524f7bde132a7381aa7d6da3da13e8'
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      access_token: sekitarEnv.accessToken
      // Authorization: `bearer ${token}`
    },
    url: `${baseUrl}${path}`,
    method
  }

  if (headers) {
    config.headers = { ...config.headers, ...headers }
  }

  if (bodyRequest) {
    config.data = bodyRequest
  }
  if (params) {
    config.params = params
  }

  if (timeout) {
    config.timeout = timeout
  }

  return axios(config)
}
