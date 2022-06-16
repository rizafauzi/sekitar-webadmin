/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */

import { apiRequest } from '@configs/axios'
// import clearEmptyObject from '@utils/object-utils'
import { IMerchant } from '../Merchant.type'

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
    path: '/api/v1/courier/order/total',
    method: 'GET'
  })

export const postEditMerchant = (id: number, bodyRequest: IMerchant) =>
  apiRequest({
    path: `/api/dashboard/stores_update/${id}`,
    method: 'POST',
    bodyRequest
  })

export default getStoreById

// https://api.setoko.co

// p=0&c=20&start_date=2022-04-10&end_date=2022-06-20&status=canceled
