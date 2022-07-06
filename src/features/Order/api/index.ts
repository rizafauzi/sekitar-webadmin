/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */

import { apiRequest } from '@configs/axios'
import sekitarEnv from '@utils/ENV'
// import clearEmptyObject from '@utils/object-utils'

export interface IListParams {
  page: number
  limit: number
  keyword?: string
  status?: string
}

export const getStoreById = (id: string) =>
  apiRequest({
    path: `/api/v1/stores/${id}`,
    method: 'GET'
  })

export const getOrderList = ({ limit, page, status }: IListParams) =>
  apiRequest({
    path: '/api/v1/courier/order',
    method: 'GET',
    params: {
      p: page,
      c: limit,
      status
    }
  })

export const getTotalOrder = () =>
  apiRequest({
    path: '/api/v1/courier/count/order',
    method: 'GET'
  })

export const getDeliveryDetail = (cartId: string) =>
  apiRequest({
    path: `/api/v1/courier/order/${cartId}`,
    method: 'GET'
  })

export const getOrderDetail = (cartId: string) =>
  apiRequest({
    path: `/api/v1/courier/order/cta/${cartId}`,
    method: 'GET'
  })

export const patchDeleteOrder = (cartId: string) =>
  apiRequest({
    path: `/api/v1/courier/order/cancel/${cartId}`,
    method: 'PATCH',
    headers: {
      access_token: sekitarEnv.accessToken
    }
  })

export const patchDispatchCourier = (cartId: string, bodyRequest: { id: number }) =>
  apiRequest({
    path: `/api/v1/courier/dispatch/${cartId}`,
    method: 'PATCH',
    bodyRequest,
    headers: {
      access_token: sekitarEnv.accessToken
    }
  })
