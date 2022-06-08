/* eslint-disable unicorn/prevent-abbreviations */

import { apiRequest } from '@configs/axios'

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

export const getStoreList = ({ limit, page }: IListParams) =>
  apiRequest({
    path: '/api/v3/stores',
    method: 'GET',
    params: {
      p: page,
      c: limit
    }
  })

export default getStoreById
