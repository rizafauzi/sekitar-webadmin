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
  status?: string
  date?: string | (string | null)[] | null
  sorting?: string
}

export const getMerchantSubscriptionList = ({
  limit,
  page,
  keyword,
  status,
  date,
  sorting
}: IListParams) => {
  const [startDateString, endDateString] = typeof date === 'string' ? date.split(',') : [null, null]
  return apiRequest({
    path: '/api/v1/premium/request_list',
    method: 'GET',
    headers: {
      access_token: sekitarEnv.merchantToken
    },
    params: clearEmptyObject({
      p: String(page),
      c: String(limit),
      search: keyword,
      status_active: String(status) || '',
      start_date: startDateString || '',
      end_date: endDateString || '',
      sorting: sorting === 'DESC' ? '' : sorting
    })
  })
}

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
