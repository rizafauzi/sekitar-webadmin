/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */

import { apiRequest } from '@configs/axios'
// import clearEmptyObject from '@utils/object-utils'
import { IMerchant } from '../Order.type'

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

export const getOrderDetail = (cartId: string) =>
  apiRequest({
    path: `/api/v1/courier/order/${cartId}`,
    method: 'GET'
  })

export const postEditMerchant = (id: number, bodyRequest: IMerchant) =>
  apiRequest({
    path: `/api/dashboard/stores_update/${id}`,
    method: 'POST',
    bodyRequest
  })

export const patchDeleteOrder = (cartId: string) =>
  apiRequest({
    path: `/api/v1/courier/order/cancel/${cartId}`,
    method: 'PATCH',
    headers: {
      access_token: 'e5dec26680524f7bde132a7381aa7d6da3da13e8'
    }
  })

export const patchDispatchCourier = (cartId: string, bodyRequest: { id: number }) =>
  apiRequest({
    path: `https://api.setoko.co/api/v1/courier/dispatch/${cartId}`,
    method: 'PATCH',
    bodyRequest,
    headers: {
      access_token: 'e5dec26680524f7bde132a7381aa7d6da3da13e8'
    }
  })