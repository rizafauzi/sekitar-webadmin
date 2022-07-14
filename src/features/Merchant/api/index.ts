/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */

import { apiRequest } from '@configs/axios'
import clearEmptyObject from '@utils/object-utils'
import { IMerchant } from '../Merchant.type'

export interface IListParams {
  page: number
  limit: number
  keyword?: string
}

export const getStoreById = (id: string) =>
  apiRequest({
    path: `/api/v1/stores/${id}`,
    method: 'GET'
  })

export const getStoreList = ({ limit, page, keyword }: IListParams) =>
  apiRequest({
    path: keyword === 'undefined' ? '/api/v3/stores' : '/api/dashboard/stores/search',
    method: 'GET',
    params: clearEmptyObject({
      p: String(page),
      c: String(limit),
      k: keyword
    })
  })

export const postEditMerchant = (id: number, bodyRequest: IMerchant) =>
  apiRequest({
    path: `/api/dashboard/stores_update/${id}`,
    method: 'POST',
    headers: {
      access_token: 'asdasd123qwepoi%^&vmnbweihuf716823'
    },
    bodyRequest
  })

export default getStoreById
