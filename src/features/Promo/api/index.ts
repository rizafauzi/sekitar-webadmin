/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiRequest } from '@configs/axios'
import sekitarEnv from '@utils/ENV'

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

export const getPromoDetail = (id: string) =>
  apiRequest({
    path: `/api/v1/promo/${id}`,
    method: 'GET',
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })

export const patchPromoState = (id: number, bodyRequest: { is_active: number }): Promise<any> =>
  apiRequest({
    path: `/api/v1/promo/is_active/${id}`,
    method: 'PATCH',
    bodyRequest,
    headers: {
      access_token: sekitarEnv.merchantToken
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

export const postPromoProduct = (bodyRequest: FormData) =>
  apiRequest({
    path: '/api/v1/promo',
    method: 'POST',
    bodyRequest,
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })

export const putPromoProduct = (id: string, bodyRequest: FormData) =>
  apiRequest({
    path: `/api/v1/promo/${id}`,
    method: 'PUT',
    bodyRequest,
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })
