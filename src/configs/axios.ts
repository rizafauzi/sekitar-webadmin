/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import axios, { Method, AxiosRequestConfig, AxiosPromise } from 'axios'
import Cookies from 'js-cookie'

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
    data: T
    total?: number
  }
  status: number
  message?: string
}

const BASE_URL = 'https://api.setoko.co'

export const apiRequest = (arguments_: ApiRequestProperties): AxiosPromise => {
  const { method, bodyRequest, params, path, url, timeout, headers } = arguments_
  const baseUrl = url || (BASE_URL as string)
  const token = Cookies.get('token') as string
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `bearer ${token}`
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
