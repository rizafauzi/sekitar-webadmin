/* eslint-disable unicorn/prevent-abbreviations */
import { apiRequest } from '@configs/axios'
import sekitarEnv from '@utils/ENV'
import { IRefundListParams } from '../Refund.type'

export const getRefundList = ({ page, limit }: IRefundListParams) =>
  apiRequest({
    path: '/api/v1/customers/refund_list',
    method: 'GET',
    params: {
      p: page,
      c: limit
    },
    headers: {
      access_token: sekitarEnv.accessToken
    }
  })

export const deleteRefund = (cartId: number) =>
  apiRequest({
    path: `/api/v1/customers/refund/${cartId}`,
    method: 'POST',
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })
