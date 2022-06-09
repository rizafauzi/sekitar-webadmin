/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */

import { apiRequest } from '@configs/axios'
import clearEmptyObject from '@utils/object-utils'

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
    path: '/api/v3/stores',
    method: 'GET',
    params: clearEmptyObject({
      p: String(page),
      c: String(limit),
      k: keyword
    })
  })

export default getStoreById
