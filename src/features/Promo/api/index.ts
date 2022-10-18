/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiRequest } from '@configs/axios'

export interface IPromoListParams {
  page: number
  limit: number
}

export interface IPromoProductsParams {
  page: number
  limit: number
  keyword?: string
  storeIds: string[]
}

export const getPromoList = ({ page, limit }: IPromoListParams) =>
  apiRequest({
    path: '/api/v1/promo',
    method: 'GET',
    params: {
      p: page,
      c: limit
    }
  })

export const patchPromoState = (id: number, bodyRequest: { is_active: number }): Promise<any> =>
  apiRequest({
    path: `/api/v1/promo/is_active/${id}`,
    method: 'PATCH',
    bodyRequest,
    headers: {
      access_token: 'asdasd123qwepoi%^&vmnbweihuf716823'
    }
  })

export const getPromoProducts = ({ page, limit, keyword, storeIds }: IPromoProductsParams) =>
  apiRequest({
    path: '/api/v1/promo/products',
    method: 'GET',
    params: {
      p: page,
      c: limit,
      k: keyword,
      storesIds: storeIds.toString()
    }
  })
