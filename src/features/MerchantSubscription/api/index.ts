/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */

import { apiRequest } from '@configs/axios'
import sekitarEnv from '@utils/ENV'
import clearEmptyObject from '@utils/object-utils'

export interface IListParams {
  page: number
  limit: number
  keyword?: string
}

export const getMerchantSubscriptionList = ({ limit, page, keyword }: IListParams) =>
  apiRequest({
    path: '/api/v1/premium/request_list',
    method: 'GET',
    headers: {
      access_token: sekitarEnv.merchantToken
    },
    params: clearEmptyObject({
      p: String(page),
      c: String(limit),
      k: keyword
    })
  })

export const updateMerchantSubsStatus = ({ id, status }: { id: number; status: number }) =>
  apiRequest({
    path: `/api/v1/premium/premium_store/${id}`,
    method: 'PATCH',
    headers: {
      access_token: sekitarEnv.merchantToken
    },
    bodyRequest: clearEmptyObject({
      status
    })
  })
